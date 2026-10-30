const {
  parseExcelBuffer,
  transformRowsWithMapping,
  generateSampleExcel,
} = require('../services/excelService');
const {
  injectDataIntoTemplate,
  generateSinglePdf,
  generateBatchZipStream,
} = require('../services/pdfService');
const defaultTemplates = require('../templates/defaultTemplates');
const Template = require('../models/Template');
const GenerationJob = require('../models/GenerationJob');
const { getDBStatus } = require('../config/db');

/**
 * Helper to fetch template by ID from DB or defaults
 */
const resolveTemplate = async (templateId, customTemplate) => {
  if (customTemplate && customTemplate.htmlContent) {
    return customTemplate;
  }

  if (templateId) {
    if (getDBStatus()) {
      const dbTpl = await Template.findOne({ templateId });
      if (dbTpl) {
        return {
          id: dbTpl.templateId,
          name: dbTpl.name,
          orientation: dbTpl.orientation,
          pageSize: dbTpl.pageSize,
          htmlContent: dbTpl.htmlContent,
        };
      }
    }

    const found = defaultTemplates.find((t) => t.id === templateId);
    if (found) return found;
  }

  // Fallback to first default template
  return defaultTemplates[0];
};

/**
 * POST /api/pdf/parse-excel
 * Accepts multipart/form-data with file
 */
const parseExcel = async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded. Please upload a valid .xlsx, .xls, or .csv file.',
      });
    }

    const parsed = parseExcelBuffer(req.file.buffer);

    return res.json({
      success: true,
      message: `Parsed ${parsed.totalRows} rows successfully`,
      data: parsed,
    });
  } catch (error) {
    console.error('Error parsing Excel:', error);
    return res.status(400).json({
      success: false,
      message: error.message || 'Failed to process Excel spreadsheet.',
    });
  }
};

/**
 * GET /api/pdf/sample-excel
 * Download pre-populated sample Excel workbook
 */
const downloadSampleExcel = async (req, res) => {
  try {
    const buffer = generateSampleExcel();
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="Dynamic_PDF_Users_Sample.xlsx"'
    );
    return res.send(buffer);
  } catch (error) {
    console.error('Error generating sample Excel:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate sample Excel file',
      error: error.message,
    });
  }
};

/**
 * POST /api/pdf/preview-html
 * Returns rendered HTML with placeholders filled
 */
const previewHtml = async (req, res) => {
  try {
    const { templateId, customTemplate, record } = req.body;
    const template = await resolveTemplate(templateId, customTemplate);
    const data = record || template.sampleData || {};

    const html = injectDataIntoTemplate(template.htmlContent, data);

    return res.json({
      success: true,
      html,
      templateName: template.name,
      orientation: template.orientation || 'portrait',
    });
  } catch (error) {
    console.error('Error previewing HTML:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to preview HTML',
      error: error.message,
    });
  }
};

/**
 * POST /api/pdf/generate-single
 * Generates and returns a single PDF file
 */
const generateSingle = async (req, res) => {
  try {
    const { templateId, customTemplate, record } = req.body;

    if (!record) {
      return res.status(400).json({
        success: false,
        message: 'Record data (name, email, phone, amount, etc.) is required.',
      });
    }

    const template = await resolveTemplate(templateId, customTemplate);
    const { fileName, pdfBuffer } = await generateSinglePdf(template, record);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Length', pdfBuffer.length);

    return res.end(pdfBuffer);
  } catch (error) {
    console.error('Error generating single PDF:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate PDF',
      error: error.message,
    });
  }
};

/**
 * POST /api/pdf/generate-batch-zip
 * Generates all PDFs from provided records or mapping and streams a ZIP
 */
const generateBatchZip = async (req, res) => {
  try {
    const { templateId, customTemplate, records, mapping } = req.body;

    if (!records || !Array.isArray(records) || records.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Records array is required and must contain at least one item.',
      });
    }

    const template = await resolveTemplate(templateId, customTemplate);

    // If raw records and mapping were sent, transform them
    const finalRecords = mapping ? transformRowsWithMapping(records, mapping) : records;

    const zipFileName = `Generated_PDFs_${template.id || 'batch'}_${Date.now()}.zip`;

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${zipFileName}"`);

    const zipStream = await generateBatchZipStream(template, finalRecords);
    zipStream.pipe(res);

    // Save job history in background if DB is connected
    if (getDBStatus()) {
      GenerationJob.create({
        jobId: `job_${Date.now()}`,
        templateId: template.id || 'custom',
        templateName: template.name || 'Custom Template',
        totalRecords: finalRecords.length,
        successCount: finalRecords.length,
        records: finalRecords.map((r) => ({
          name: r.name,
          email: r.email,
          phone: r.phone,
          amount: r.amount,
          address: r.address,
          status: 'success',
        })),
      }).catch((e) => console.warn('Could not save job to DB:', e.message));
    }
  } catch (error) {
    console.error('Error generating batch ZIP:', error);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: 'Failed to generate batch PDFs',
        error: error.message,
      });
    }
  }
};

module.exports = {
  parseExcel,
  downloadSampleExcel,
  previewHtml,
  generateSingle,
  generateBatchZip,
};

