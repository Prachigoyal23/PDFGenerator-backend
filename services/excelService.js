const xlsx = require('xlsx');

/**
 * Standard dynamic field keys we look for
 */
const STANDARD_FIELDS = ['name', 'email', 'phone', 'amount', 'address', 'invoice_no', 'date', 'description'];

/**
 * Common column synonyms for smart auto-mapping
 */
const FIELD_SYNONYMS = {
  name: ['name', 'full name', 'fullname', 'customer name', 'client name', 'student name', 'candidate name', 'user', 'username'],
  email: ['email', 'email id', 'email address', 'e-mail', 'mail', 'emailid'],
  phone: ['phone', 'contact', 'contact number', 'contact no', 'mobile', 'mobile number', 'mobile no', 'phone number', 'phoneno', 'telephone'],
  amount: ['amount', 'total', 'total amount', 'price', 'fee', 'fees', 'salary', 'stipend', 'cost', 'net amount', 'grand total'],
  address: ['address', 'full address', 'residence', 'city', 'location', 'street', 'postal address'],
  invoice_no: ['invoice', 'invoice no', 'invoice number', 'receipt no', 'receipt number', 'bill no', 'id', 'ref no', 'reference'],
  date: ['date', 'issue date', 'invoice date', 'billing date', 'created date'],
  description: ['description', 'desc', 'service', 'purpose', 'item', 'details', 'subject', 'course']
};

/**
 * Detect best match for a standard field among uploaded Excel headers
 */
const autoDetectMapping = (headers) => {
  const mapping = {};
  const lowerHeaders = headers.map(h => ({
    original: h,
    normalized: String(h).toLowerCase().trim().replace(/[_\W]+/g, ' ')
  }));

  for (const field of STANDARD_FIELDS) {
    const synonyms = FIELD_SYNONYMS[field] || [field];
    
    // 1. Exact match
    let match = lowerHeaders.find(h => synonyms.includes(h.normalized));
    
    // 2. Substring match
    if (!match) {
      match = lowerHeaders.find(h => synonyms.some(syn => h.normalized.includes(syn)));
    }

    if (match) {
      mapping[field] = match.original;
    }
  }

  return mapping;
};

/**
 * Parse an Excel or CSV file buffer
 */
const parseExcelBuffer = (buffer) => {
  const workbook = xlsx.read(buffer, { type: 'buffer', cellDates: true });
  
  if (!workbook.SheetNames || workbook.SheetNames.length === 0) {
    throw new Error('Excel file has no sheets.');
  }

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convert to JSON array of objects
  const rawRows = xlsx.utils.sheet_to_json(worksheet, { defval: '', raw: false });

  if (rawRows.length === 0) {
    throw new Error('Excel sheet is empty or contains no data rows.');
  }

  // Extract all distinct column headers
  const headers = Object.keys(rawRows[0] || {});
  const suggestedMapping = autoDetectMapping(headers);

  return {
    sheetName,
    totalRows: rawRows.length,
    headers,
    suggestedMapping,
    previewRows: rawRows.slice(0, 10),
    allRows: rawRows
  };
};

/**
 * Transform rows using user-defined or auto-detected column mapping
 */
const transformRowsWithMapping = (rows, mapping) => {
  return rows.map((row, index) => {
    const mappedRecord = {
      _rowIndex: index + 1,
      name: (mapping.name && row[mapping.name]) ? String(row[mapping.name]).trim() : `Customer #${index + 1}`,
      email: (mapping.email && row[mapping.email]) ? String(row[mapping.email]).trim() : 'N/A',
      phone: (mapping.phone && row[mapping.phone]) ? String(row[mapping.phone]).trim() : 'N/A',
      amount: (mapping.amount && row[mapping.amount]) ? String(row[mapping.amount]).trim() : '0.00',
      address: (mapping.address && row[mapping.address]) ? String(row[mapping.address]).trim() : 'N/A',
      invoice_no: (mapping.invoice_no && row[mapping.invoice_no]) ? String(row[mapping.invoice_no]).trim() : `INV-${1000 + index + 1}`,
      date: (mapping.date && row[mapping.date]) ? String(row[mapping.date]).trim() : new Date().toISOString().split('T')[0],
      description: (mapping.description && row[mapping.description]) ? String(row[mapping.description]).trim() : 'Standard Services',
    };

    // Preserve any extra columns as custom dynamic tags
    for (const [key, val] of Object.entries(row)) {
      if (!mappedRecord[key]) {
        mappedRecord[key] = val !== undefined && val !== null ? String(val).trim() : '';
      }
    }

    return mappedRecord;
  });
};

/**
 * Generate a ready-to-use Sample Excel workbook Buffer
 */
const generateSampleExcel = () => {
  const sampleData = [
    {
      'Full Name': 'Aarav Sharma',
      'Email ID': 'aarav.sharma@example.com',
      'Contact Number': '+91 98765 43210',
      'Amount': '5,000.00',
      'Address': 'Flat 302, Palm Heights, Andheri West, Mumbai, MH',
      'Invoice No': 'INV-2026-101',
      'Date': '2026-10-30',
      'Description': 'Web Development & Cloud Consulting'
    },
    {
      'Full Name': 'Priya Patel',
      'Email ID': 'priya.patel@example.com',
      'Contact Number': '+91 98123 45678',
      'Amount': '8,500.00',
      'Address': 'B-14, Navrangpura, Ahmedabad, GJ',
      'Invoice No': 'INV-2026-102',
      'Date': '2026-10-30',
      'Description': 'UI/UX Brand Design & Prototyping'
    },
    {
      'Full Name': 'Rohan Gupta',
      'Email ID': 'rohan.gupta@example.com',
      'Contact Number': '+91 97654 32109',
      'Amount': '12,000.00',
      'Address': 'Sector 62, Noida, Gautam Buddha Nagar, UP',
      'Invoice No': 'INV-2026-103',
      'Date': '2026-10-31',
      'Description': 'Enterprise API & Database Architecture'
    },
    {
      'Full Name': 'Ananya Sen',
      'Email ID': 'ananya.sen@example.com',
      'Contact Number': '+91 99001 22334',
      'Amount': '6,200.00',
      'Address': 'Salt Lake Sector V, Kolkata, WB',
      'Invoice No': 'INV-2026-104',
      'Date': '2026-10-31',
      'Description': 'SEO & Digital Marketing Retainer'
    },
    {
      'Full Name': 'Vikram Malhotra',
      'Email ID': 'vikram.m@example.com',
      'Contact Number': '+91 91234 56780',
      'Amount': '15,000.00',
      'Address': 'Indiranagar 100ft Road, Bengaluru, KA',
      'Invoice No': 'INV-2026-105',
      'Date': '2026-11-01',
      'Description': 'Mobile Application Development Phase 1'
    }
  ];

  const worksheet = xlsx.utils.json_to_sheet(sampleData);

  // Set column widths for readability
  worksheet['!cols'] = [
    { wch: 22 }, // Full Name
    { wch: 28 }, // Email ID
    { wch: 18 }, // Contact Number
    { wch: 14 }, // Amount
    { wch: 42 }, // Address
    { wch: 16 }, // Invoice No
    { wch: 14 }, // Date
    { wch: 38 }, // Description
  ];

  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'User_Data');

  return xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
};

module.exports = {
  STANDARD_FIELDS,
  parseExcelBuffer,
  autoDetectMapping,
  transformRowsWithMapping,
  generateSampleExcel
};

