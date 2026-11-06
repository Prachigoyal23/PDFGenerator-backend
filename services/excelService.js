const xlsx = require('xlsx');

/**
 * Standard & Valuation Dynamic Field Keys
 */
const STANDARD_FIELDS = [
  'name', 'email', 'phone', 'amount', 'address', 'invoice_no', 'date', 'description',
  'report_no', 'father_name', 'market_value', 'market_value_in_words', 'guideline_value',
  'realisable_value', 'distress_value', 'distress_value_lacs', 'distress_value_in_words',
  'date_of_inspection', 'date_of_valuation', 'city_town', 'residential_area', 'commercial_area',
  'industrial_area', 'area_economic_class', 'area_urban_class', 'municipality', 'agriculture_conversion',
  'deed_north', 'deed_south', 'deed_east', 'deed_west',
  'actual_north', 'actual_south', 'actual_east', 'actual_west',
  'deed_dim_north', 'deed_dim_south', 'deed_dim_east', 'deed_dim_west',
  'actual_dim_north', 'actual_dim_south', 'actual_dim_east', 'actual_dim_west',
  'extent_site', 'locality_classification', 'surrounding_development', 'land_shape',
  'land_use_type', 'town_planning_approved', 'corner_or_intermediate', 'road_facilities',
  'road_type', 'road_width', 'water_potentiality', 'underground_sewerage',
  'power_supply', 'site_advantages', 'plot_size_north_south', 'plot_size_east_west',
  'plot_area', 'market_rate', 'gdl_rate', 'dlc_reference',
  'land_gdv', 'land_mv', 'bld_type', 'bld_construction',
  'bld_year', 'bld_floors_height', 'bld_plinth_area', 'bld_ext_condition',
  'bld_int_condition', 'bld_layout_date', 'bld_authority', 'bld_authenticity',
  'spec_superstructure', 'spec_doors_windows', 'spec_elec_class', 'spec_elec_light',
  'spec_elec_fan', 'spec_elec_plug', 'spec_plumb_closets', 'spec_plumb_basins',
  'spec_plumb_urinals', 'spec_plumb_tubs', 'spec_plumb_taps', 'spec_plumb_fixtures',
  'bld_plinth_val', 'bld_roof_height', 'bld_age', 'bld_rep_rate',
  'bld_rep_cost', 'bld_depr_pct', 'mbld_vlu', 'bld_builtup_area',
  'bld_dlc_rate', 'bld_dlc_ref', 'gbv', 'ngbv',
  'ngbv_lacs', 'total_mv', 'total_mv_say', 'total_gv',
  'total_gv_lacs', 'total_mv_lacs', 'realisable_value_lacs',
  'photo_1', 'photo_2'
];

/**
 * Common column synonyms for smart auto-mapping
 */
const FIELD_SYNONYMS = {
  name: ['name', 'full name', 'fullname', 'owner name', 'property owner', 'customer name', 'client name', 'candidate name', 'user', 'username'],
  email: ['email', 'email id', 'email address', 'e-mail', 'mail', 'emailid'],
  phone: ['phone', 'contact', 'contact number', 'contact no', 'mobile', 'mobile number', 'mobile no', 'phone number', 'phoneno', 'telephone'],
  amount: ['amount', 'total', 'total amount', 'price', 'fee', 'fees', 'salary', 'stipend', 'cost', 'net amount', 'grand total'],
  address: ['address', 'full address', 'property address', 'situated at', 'location', 'residence', 'street', 'postal address'],
  invoice_no: ['invoice', 'invoice no', 'invoice number', 'receipt no', 'receipt number', 'bill no', 'id', 'ref no', 'reference'],
  date: ['date', 'report date', 'issue date', 'invoice date', 'billing date', 'created date', 'dated'],
  description: ['description', 'desc', 'service', 'purpose', 'item', 'details', 'subject', 'course'],

  // Valuation report specific synonyms
  report_no: ['report no', 'report number', 'sr no', 'serial no', 'sr. no.', 'sr. no', 'reference no', 'reportid'],
  father_name: ['father name', 'father', 'fathers name', 's/o', 'so', 'husband name'],
  market_value: ['market value', 'present market value', 'market value in lacs', 'mv', 'market val'],
  market_value_in_words: ['market value in word', 'market value in words', 'market value words', 'mv in words'],
  guideline_value: ['guide line value', 'guideline value', 'dlc value', 'govt value'],
  realisable_value: ['realisable value', 'realizable value', 'realisable value in lacs'],
  distress_value: ['distress sale', 'distress value', 'distress sale in lacs', 'distress sale value'],
  distress_value_lacs: ['distress value lacs', 'distress sale lacs'],
  distress_value_in_words: ['distress value in words', 'distress value in word', 'distress sale in words'],
  date_of_inspection: ['date of inspection', 'inspection date', 'doi'],
  date_of_valuation: ['date of valuation', 'valuation date', 'dov'],
  city_town: ['city town', 'city', 'town'],
  residential_area: ['residential area', 'ward no', 'ward'],
  commercial_area: ['commercial area'],
  industrial_area: ['industrial area'],
  area_economic_class: ['high middle poor', 'economic class', 'area economic class', 'area class'],
  area_urban_class: ['urban semi urban rural', 'urban class', 'area urban class'],
  municipality: ['municipality', 'corporation limit', 'nagar palika', 'panchayat'],
  agriculture_conversion: ['agriculture conversion', 'agriculture land conversion'],
  deed_north: ['deed north', 'boundaries deed north', 'sale deed north'],
  deed_south: ['deed south', 'boundaries deed south', 'sale deed south'],
  deed_east: ['deed east', 'boundaries deed east', 'sale deed east'],
  deed_west: ['deed west', 'boundaries deed west', 'sale deed west'],
  actual_north: ['actual north', 'boundaries actual north'],
  actual_south: ['actual south', 'boundaries actual south'],
  actual_east: ['actual east', 'boundaries actual east'],
  actual_west: ['actual west', 'boundaries actual west'],
  extent_site: ['extent of the site', 'extent site', 'site extent', 'extent'],
  plot_area: ['plot area', 'total extant of the plot', 'total extent of the plot', 'total plot area'],
  market_rate: ['market rate', 'market rate per sqmt', 'prevailing market rate'],
  gdl_rate: ['gdl rate', 'guideline rate', 'guideline rate per sqmt', 'dlc rate'],
  dlc_reference: ['dlc reference', 'dlc calendar reference', 'guideline rate reference'],
  land_gdv: ['land gdv', 'guideline value of land', 'land guideline value'],
  land_mv: ['land mv', 'market value of land', 'land market value'],
  total_mv: ['total mv', 'total market value'],
  total_mv_say: ['total mv say', 'or say market value'],
  total_gv: ['total gv', 'total guideline value'],
  total_gv_lacs: ['total gv lacs', 'govt value lacs'],
  total_mv_lacs: ['total mv lacs', 'market value lacs'],
  realisable_value_lacs: ['realisable value lacs', 'realizable value lacs'],
  photo_1: ['photo 1', 'photo1', 'photo_1', 'site photo 1', 'site photo'],
  photo_2: ['photo 2', 'photo2', 'photo_2', 'site photo 2']
};

/**
 * Detect best match for dynamic fields among uploaded Excel headers
 */
const autoDetectMapping = (headers) => {
  const mapping = {};
  const lowerHeaders = headers.map((h) => ({
    original: h,
    normalized: String(h).toLowerCase().trim().replace(/[_\W]+/g, ' '),
    snake: String(h).toLowerCase().trim().replace(/[_\W]+/g, '_')
  }));

  for (const field of STANDARD_FIELDS) {
    const synonyms = FIELD_SYNONYMS[field] || [field.replace(/_/g, ' ')];
    const fieldSnake = field.toLowerCase();

    // 1. Exact match with original, snake_case, or normalized synonym
    let match = lowerHeaders.find(
      (h) => h.snake === fieldSnake || synonyms.includes(h.normalized)
    );

    // 2. Substring match (header must contain synonym, with min length 3 to prevent false positives)
    if (!match) {
      match = lowerHeaders.find((h) =>
        synonyms.some((syn) => syn.length >= 3 && h.normalized.split(' ').includes(syn))
      );
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
    allRows: rawRows,
  };
};

/**
 * Transform rows using user-defined or auto-detected column mapping
 */
const transformRowsWithMapping = (rows, mapping = {}) => {
  return rows.map((row, index) => {
    const mappedRecord = {
      _rowIndex: index + 1,
      ...row,
    };

    // Add normalized snake_case keys for all raw row properties
    for (const [key, val] of Object.entries(row)) {
      const snakeKey = String(key).toLowerCase().trim().replace(/[_\W]+/g, '_');
      if (!mappedRecord[snakeKey]) {
        mappedRecord[snakeKey] = val !== undefined && val !== null ? String(val).trim() : '';
      }
    }

    // Apply explicit mappings (targetField -> excelColumnName)
    for (const [targetField, sourceCol] of Object.entries(mapping)) {
      if (sourceCol && row[sourceCol] !== undefined) {
        mappedRecord[targetField] = String(row[sourceCol]).trim();
      }
    }

    return mappedRecord;
  });
};

/**
 * Generate a ready-to-use Sample Excel workbook Buffer
 */
const generateSampleExcel = (templateId = 'valuation-report') => {
  if (templateId === 'valuation-report') {
    const valuationRows = [
      {
        'Report No': 'AV/2026/108',
        'Date': '22/09/2026',
        'Owner Name': 'Rajesh Kumar Sharma',
        'Father Name': 'Shri Ram Prasad Sharma',
        'Address': 'Commercial Plot No. 12, Main Market, Sheopur (M.P.)',
        'Market Value': '49.25',
        'Market Value in Words': 'Forty Nine Lakh Twenty Five Thousand',
        'Guideline Value': '21.83',
        'Realisable Value': '46.79',
        'Distress Value': '44.32',
        'Distress Value in Words': 'Forty Four Lakh Thirty Two Thousand',
        'Date of Inspection': '22/09/2026',
        'Date of Valuation': '22/09/2026',
        'City Town': 'Sheopur',
        'Residential Area': 'Ward No. 4',
        'Commercial Area': 'Commercial Area',
        'Industrial Area': 'None',
        'Area Economic Class': 'Middle Class',
        'Area Urban Class': 'Urban Area',
        'Municipality': 'Nagar Palika Sheopur',
        'Agriculture Conversion': 'No',
        'Deed North': 'Araji Ajay Singh Kreta',
        'Deed South': 'Sheopur Baroda Road',
        'Deed East': 'Rasta 3.66 m Choda',
        'Deed West': 'Dukaan Ve Araji Jebunisha',
        'Actual North': 'Shop Ajay Singh',
        'Actual South': 'Sheopur Baroda Road',
        'Actual East': '3.66 m Wide Road',
        'Actual West': 'Shop',
        'Deed Dim North': '6.71 m',
        'Deed Dim South': '6.71 m',
        'Deed Dim East': '3.36 m',
        'Deed Dim West': '3.36 m',
        'Actual Dim North': '6.71 m',
        'Actual Dim South': '6.71 m',
        'Actual Dim East': '3.36 m',
        'Actual Dim West': '3.36 m',
        'Extent of Site': '22.55 Sq.mt',
        'Locality Classification': 'Situated in Commercial area',
        'Surrounding Development': 'Surrounding area is developing Area',
        'Land Shape': 'Rectangular',
        'Land Use Type': 'Commercial Use,',
        'Town Planning Approved': 'Not Verified',
        'Corner or Intermediate': 'Corner Plot',
        'Road Facilities': 'Yes',
        'Road Type': 'C.C Road',
        'Road Width': 'Road Width>20 feet',
        'Water Potentiality': 'Yes',
        'Underground Sewerage': 'No',
        'Power Supply': 'Yes',
        'Site Advantages': 'Property is at Developing area hence Future of the property is positive',
        'Plot Size North South': '6.71 m & 6.71 m.',
        'Plot Size East West': '3.36 m & 3.36 m.',
        'Plot Area': '22.55',
        'Market Rate': '1,80,000',
        'GDL Rate': '60,000',
        'DLC Reference': 'Rate adopted from Sheopur DLC Calendar 2025–26, Page No. 14, Sr. No. 138.',
        'Land GDV': '13,53,000.00',
        'Land MV': '40,59,000.00',
        'Building Type': 'Commercial Building',
        'Building Construction': 'RCC Building',
        'Year of Construction': 'Not specifically verified',
        'Floors and Height': 'G.F 3 mtr,',
        'Plinth Area Floorwise': 'G.F (22.55 sqm)',
        'Exterior Condition': 'Good',
        'Interior Condition': 'Good',
        'Layout Date': 'Not Obtained',
        'Plan Issuing Authority': 'Nagar Palika Sheopur',
        'Plan Authenticity': 'Not Verified',
        'Super Structure': 'R.C.C Super Structure',
        'Doors and Windows': 'Wooden Doors, Windows,',
        'Electrical Class': 'Ordinary',
        'Light Points': 'Available – details not specifically counted',
        'Fan Points': 'Available – details not specifically counted',
        'Spare Plug Points': 'Available – details not specifically counted',
        'Plumbing Closets': 'Not specifically verified',
        'Plumbing Basins': 'Not specifically verified',
        'Plumbing Urinals': 'Not specifically verified',
        'Plumbing Tubs': 'None',
        'Plumbing Taps': 'Not specifically verified',
        'Plumbing Fixtures': 'Not specifically verified',
        'Building Plinth Val': '22.55 Sqm',
        'Roof Height': '3 mtr',
        'Age of Building': '20Yr',
        'Replacement Rate': '10500/-',
        'Replacement Cost': '236775/-',
        'Depreciation Pct': '20%',
        'Net Building Value': '1,89,420/-',
        'Building Builtup Area': '22.55',
        'Building DLC Rate': '46,000/-',
        'Building DLC Ref': 'Sheopur DLC Calendar 2025–26, Page No. 14, Sr. No. 138',
        'Gross Building Value': '10,37,300/-',
        'Net Guideline Building Value': '8,29,840/-',
        'NGBV Lacs': '8.30',
        'Total Market Value': '42,48,420/-',
        'Total Market Value Say': '4925000.00',
        'Total Guideline Value': '21,82,840/-',
        'Total GV Lacs': '21.83',
        'Total MV Lacs': '49.25',
        'Realisable Value Lacs': '46.79',
        'Distress Value Lacs': '44.32',
        'Photo 1 URL': 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
        'Photo 2 URL': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
      },
      {
        'Report No': 'AV/2026/109',
        'Date': '25/09/2026',
        'Owner Name': 'Sunil Verma',
        'Father Name': 'Late Shri M.L. Verma',
        'Address': 'Commercial Shop 5, Station Road, Sheopur (M.P.)',
        'Market Value': '58.50',
        'Market Value in Words': 'Fifty Eight Lakh Fifty Thousand',
        'Guideline Value': '26.40',
        'Realisable Value': '55.57',
        'Distress Value': '52.65',
        'Distress Value in Words': 'Fifty Two Lakh Sixty Five Thousand',
        'Date of Inspection': '25/09/2026',
        'Date of Valuation': '25/09/2026',
        'City Town': 'Sheopur',
        'Residential Area': 'Ward No. 7',
        'Commercial Area': 'Commercial Area',
        'Industrial Area': 'None',
        'Area Economic Class': 'Middle Class',
        'Area Urban Class': 'Urban Area',
        'Municipality': 'Nagar Palika Sheopur',
        'Agriculture Conversion': 'No',
        'Deed North': 'P.K. Construction',
        'Deed South': 'Main Station Road',
        'Deed East': '4.00 m Wide Rasta',
        'Deed West': 'Plot of Shri Gupta',
        'Actual North': 'Shop P.K.',
        'Actual South': 'Main Station Road',
        'Actual East': '4.00 m Wide Road',
        'Actual West': 'Commercial Complex',
        'Deed Dim North': '7.50 m',
        'Deed Dim South': '7.50 m',
        'Deed Dim East': '4.00 m',
        'Deed Dim West': '4.00 m',
        'Actual Dim North': '7.50 m',
        'Actual Dim South': '7.50 m',
        'Actual Dim East': '4.00 m',
        'Actual Dim West': '4.00 m',
        'Extent of Site': '30.00 Sq.mt',
        'Locality Classification': 'Situated in Commercial area',
        'Surrounding Development': 'Surrounding area is highly developed',
        'Land Shape': 'Rectangular',
        'Land Use Type': 'Commercial Use,',
        'Town Planning Approved': 'Verified',
        'Corner or Intermediate': 'Corner Plot',
        'Road Facilities': 'Yes',
        'Road Type': 'C.C Road',
        'Road Width': 'Road Width>30 feet',
        'Water Potentiality': 'Yes',
        'Underground Sewerage': 'Yes',
        'Power Supply': 'Yes',
        'Site Advantages': 'High footfall prime market area',
        'Plot Size North South': '7.50 m & 7.50 m.',
        'Plot Size East West': '4.00 m & 4.00 m.',
        'Plot Area': '30.00',
        'Market Rate': '1,95,000',
        'GDL Rate': '68,000',
        'DLC Reference': 'Rate adopted from Sheopur DLC Calendar 2025–26, Page No. 16, Sr. No. 142.',
        'Land GDV': '20,40,000.00',
        'Land MV': '58,50,000.00',
        'Building Type': 'Commercial Building',
        'Building Construction': 'RCC Building',
        'Year of Construction': '2018',
        'Floors and Height': 'G.F 3.2 mtr,',
        'Plinth Area Floorwise': 'G.F (30.00 sqm)',
        'Exterior Condition': 'Excellent',
        'Interior Condition': 'Good',
        'Layout Date': 'Obtained',
        'Plan Issuing Authority': 'Nagar Palika Sheopur',
        'Plan Authenticity': 'Verified',
        'Super Structure': 'R.C.C Super Structure',
        'Doors and Windows': 'Aluminum Glazed, Rolling Shutter',
        'Electrical Class': 'Superior',
        'Light Points': '12 Points',
        'Fan Points': '4 Points',
        'Spare Plug Points': '8 Points',
        'Plumbing Closets': '1 Western WC',
        'Plumbing Basins': '1 Ceramic Basin',
        'Plumbing Urinals': '1 Urinal',
        'Plumbing Tubs': 'None',
        'Plumbing Taps': 'CP Brass Taps',
        'Plumbing Fixtures': 'Verified Good',
        'Building Plinth Val': '30.00 Sqm',
        'Roof Height': '3.2 mtr',
        'Age of Building': '8Yr',
        'Replacement Rate': '12500/-',
        'Replacement Cost': '375000/-',
        'Depreciation Pct': '10%',
        'Net Building Value': '3,37,500/-',
        'Building Builtup Area': '30.00',
        'Building DLC Rate': '48,000/-',
        'Building DLC Ref': 'Sheopur DLC Calendar 2025–26, Page No. 16, Sr. No. 142',
        'Gross Building Value': '14,40,000/-',
        'Net Guideline Building Value': '12,96,000/-',
        'NGBV Lacs': '12.96',
        'Total Market Value': '61,87,500/-',
        'Total Market Value Say': '6200000.00',
        'Total Guideline Value': '33,36,000/-',
        'Total GV Lacs': '33.36',
        'Total MV Lacs': '61.88',
        'Realisable Value Lacs': '58.78',
        'Distress Value Lacs': '55.69',
        'Photo 1 URL': 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
        'Photo 2 URL': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
      }
    ];

    const worksheet = xlsx.utils.json_to_sheet(valuationRows);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Valuation_Data');
    return xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
  }

  // Fallback default sample Excel
  const sampleData = [
    {
      'Full Name': 'Aarav Sharma',
      'Email ID': 'aarav.sharma@example.com',
      'Contact Number': '+91 98765 43210',
      'Amount': '5,000.00',
      'Address': 'Flat 302, Palm Heights, Andheri West, Mumbai, MH',
      'Invoice No': 'INV-2026-101',
      'Date': '2026-10-30',
      'Description': 'Web Development & Cloud Consulting',
    },
    {
      'Full Name': 'Priya Patel',
      'Email ID': 'priya.patel@example.com',
      'Contact Number': '+91 98123 45678',
      'Amount': '8,500.00',
      'Address': 'B-14, Navrangpura, Ahmedabad, GJ',
      'Invoice No': 'INV-2026-102',
      'Date': '2026-10-30',
      'Description': 'UI/UX Brand Design & Prototyping',
    }
  ];

  const worksheet = xlsx.utils.json_to_sheet(sampleData);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'User_Data');
  return xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
};

module.exports = {
  STANDARD_FIELDS,
  FIELD_SYNONYMS,
  parseExcelBuffer,
  autoDetectMapping,
  transformRowsWithMapping,
  generateSampleExcel,
};
