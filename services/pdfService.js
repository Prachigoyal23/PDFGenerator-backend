const puppeteer = require('puppeteer');
const archiverPkg = require('archiver');

const createZipArchive = (options = {}) => {
  if (typeof archiverPkg === 'function') {
    return archiverPkg('zip', options);
  }
  if (archiverPkg.default && typeof archiverPkg.default === 'function') {
    return archiverPkg.default('zip', options);
  }
  if (archiverPkg.ZipArchive) {
    return new archiverPkg.ZipArchive(options);
  }
  throw new Error('Could not instantiate archiver');
};

let browserInstance = null;

/**
 * Get or launch shared Puppeteer browser instance
 */
const getBrowser = async () => {
  if (browserInstance && browserInstance.connected) {
    return browserInstance;
  }

  const launchOptions = {
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  };

  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  browserInstance = await puppeteer.launch(launchOptions);

  return browserInstance;
};

/**
 * Replace all {{key}} placeholders in HTML with values from data object
 */
const injectDataIntoTemplate = (htmlContent, data) => {
  if (!htmlContent) return '';
  
  let rendered = htmlContent;

  // Replace case-insensitive {{placeholder}} and {{ placeholder }}
  for (const [key, value] of Object.entries(data)) {
    const safeVal = value !== undefined && value !== null ? String(value) : '';
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'gi');
    rendered = rendered.replace(regex, safeVal);
  }

  // Replace any leftover {{...}} with empty or placeholder
  rendered = rendered.replace(/{{\s*[\w.-]+\s*}}/g, '');

  return rendered;
};

/**
 * Render a single HTML string to PDF Buffer using Puppeteer
 */
const renderHtmlToPdfBuffer = async (htmlContent, options = {}) => {
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    const {
      orientation = 'portrait',
      pageSize = 'A4',
      margin = { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' }
    } = options;

    const renderTimeout = parseInt(process.env.PUPPETEER_TIMEOUT_MS, 10) || 30000;

    await page.setContent(htmlContent, {
      waitUntil: ['load', 'networkidle0'],
      timeout: renderTimeout
    });

    const pdfResult = await page.pdf({
      format: pageSize,
      landscape: orientation === 'landscape',
      printBackground: true,
      margin: margin
    });

    return Buffer.from(pdfResult);
  } finally {
    await page.close();
  }
};

/**
 * Generate a single PDF for a specific record and template
 */
const generateSinglePdf = async (template, recordData) => {
  const renderedHtml = injectDataIntoTemplate(template.htmlContent, recordData);
  const pdfBuffer = await renderHtmlToPdfBuffer(renderedHtml, {
    orientation: template.orientation || 'portrait',
    pageSize: template.pageSize || 'A4'
  });

  const sanitizedName = (recordData.name || 'document')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .substring(0, 40);
  const invoiceNo = (recordData.invoice_no || 'doc')
    .replace(/[^a-zA-Z0-9_-]/g, '_');
  
  const fileName = `${sanitizedName}_${invoiceNo}.pdf`;

  return {
    fileName,
    pdfBuffer,
    renderedHtml
  };
};

/**
 * Generate multiple PDFs and bundle into a ZIP archive stream
 */
const generateBatchZipStream = async (template, records) => {
  const archive = createZipArchive({
    zlib: { level: 6 } // Good balance between speed and compression
  });

  // We process records in chunks to prevent memory overload
  const CHUNK_SIZE = 5;
  (async () => {
    try {
      for (let i = 0; i < records.length; i += CHUNK_SIZE) {
        const chunk = records.slice(i, i + CHUNK_SIZE);

        await Promise.all(
          chunk.map(async (record, chunkIdx) => {
            try {
              const overallIndex = i + chunkIdx + 1;
              const renderedHtml = injectDataIntoTemplate(template.htmlContent, record);
              const pdfBuffer = await renderHtmlToPdfBuffer(renderedHtml, {
                orientation: template.orientation || 'portrait',
                pageSize: template.pageSize || 'A4'
              });

              const sanitizedName = (record.name || `User_${overallIndex}`)
                .replace(/[^a-zA-Z0-9_-]/g, '_')
                .substring(0, 30);
              const safeId = (record.invoice_no || `ID_${overallIndex}`).replace(/[^a-zA-Z0-9_-]/g, '_');
              const entryName = `${String(overallIndex).padStart(3, '0')}_${sanitizedName}_${safeId}.pdf`;

              archive.append(Buffer.from(pdfBuffer), { name: entryName });
            } catch (err) {
              console.error(`Failed to generate PDF for record #${i + chunkIdx + 1}:`, err);
              archive.append(
                Buffer.from(`Error generating PDF for record: ${JSON.stringify(record, null, 2)}\nError: ${err.message}`),
                { name: `ERROR_record_${i + chunkIdx + 1}.txt` }
              );
            }
          })
        );
      }

      await archive.finalize();
    } catch (archiveErr) {
      console.error('Error during archive generation:', archiveErr);
      archive.destroy(archiveErr);
    }
  })();

  return archive;
};

module.exports = {
  injectDataIntoTemplate,
  renderHtmlToPdfBuffer,
  generateSinglePdf,
  generateBatchZipStream
};
