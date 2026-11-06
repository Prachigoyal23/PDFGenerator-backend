const valuationReportTemplate = require('./valuationReportTemplate');

const defaultTemplates = [
  valuationReportTemplate,
  {
    id: 'payment-receipt',
    name: 'Payment Receipt / Invoice (Modern Emerald)',
    description: 'Clean, professional payment receipt with amount breakdown, customer contact details, and status badge.',
    orientation: 'portrait',
    pageSize: 'A4',
    fields: ['name', 'email', 'phone', 'amount', 'address', 'invoice_no', 'date', 'description'],
    sampleData: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 019-2834',
      amount: '4,500.00',
      address: '742 Evergreen Terrace, Springfield, OR',
      invoice_no: 'INV-2026-001',
      date: '2026-10-30',
      description: 'Professional Consulting & Development Services'
    },
    htmlContent: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
  body { background: #f8fafc; color: #1e293b; padding: 40px; }
  .invoice-card { background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
  .header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 28px; border-bottom: 2px solid #f1f5f9; }
  .brand { display: flex; align-items: center; gap: 12px; }
  .brand-logo { width: 44px; height: 44px; background: linear-gradient(135deg, #059669, #10b981); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 20px; }
  .brand-title { font-size: 22px; font-weight: 700; color: #0f172a; }
  .brand-subtitle { font-size: 13px; color: #64748b; }
  .invoice-meta { text-align: right; }
  .badge { display: inline-block; background: #d1fae5; color: #065f46; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; margin-bottom: 8px; }
  .meta-title { font-size: 20px; font-weight: 800; color: #0f172a; }
  .meta-sub { font-size: 13px; color: #64748b; margin-top: 2px; }
  .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 32px; padding: 24px; background: #f8fafc; border-radius: 12px; }
  .section-label { font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: #64748b; margin-bottom: 10px; }
  .client-name { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 6px; }
  .info-row { font-size: 13px; color: #475569; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
  .table { width: 100%; border-collapse: collapse; margin-top: 36px; }
  .table th { background: #f1f5f9; color: #475569; font-size: 12px; font-weight: 700; text-transform: uppercase; padding: 14px 16px; text-align: left; }
  .table th:last-child { text-align: right; }
  .table td { padding: 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #334155; }
  .table td:last-child { text-align: right; font-weight: 600; }
  .summary { margin-top: 28px; display: flex; justify-content: flex-end; }
  .summary-box { width: 280px; }
  .summary-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #64748b; }
  .summary-total { border-top: 2px solid #0f172a; margin-top: 8px; padding-top: 12px; font-size: 18px; font-weight: 800; color: #0f172a; }
  .summary-total span:last-child { color: #059669; }
  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px dashed #cbd5e1; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #94a3b8; }
  .footer-terms { max-width: 60%; }
</style>
</head>
<body>
  <div class="invoice-card">
    <div class="header">
      <div class="brand">
        <div class="brand-logo">₹</div>
        <div>
          <div class="brand-title">Enterprise Solutions Inc.</div>
          <div class="brand-subtitle">Official Payment Receipt & Statement</div>
        </div>
      </div>
      <div class="invoice-meta">
        <div class="badge">Paid In Full</div>
        <div class="meta-title">#{{invoice_no}}</div>
        <div class="meta-sub">Date: {{date}}</div>
      </div>
    </div>

    <div class="details-grid">
      <div>
        <div class="section-label">Billed To (Customer Details)</div>
        <div class="client-name">{{name}}</div>
        <div class="info-row">📧 <strong>Email:</strong> {{email}}</div>
        <div class="info-row">📞 <strong>Contact:</strong> {{phone}}</div>
        <div class="info-row">📍 <strong>Address:</strong> {{address}}</div>
      </div>
      <div>
        <div class="section-label">Payment Information</div>
        <div class="info-row">💳 <strong>Method:</strong> Direct Transfer / Online</div>
        <div class="info-row">🆔 <strong>Ref ID:</strong> REF-{{invoice_no}}</div>
        <div class="info-row">📅 <strong>Settlement Date:</strong> {{date}}</div>
        <div class="info-row">✅ <strong>Verification:</strong> Completed</div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Description</th>
          <th style="width: 100px;">Qty</th>
          <th style="width: 140px;">Rate</th>
          <th style="width: 140px;">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>{{description}}</strong>
            <div style="font-size: 12px; color: #64748b; margin-top: 2px;">Deliverables for {{name}} as per agreement</div>
          </td>
          <td>1</td>
          <td>{{amount}}</td>
          <td>{{amount}}</td>
        </tr>
      </tbody>
    </table>

    <div class="summary">
      <div class="summary-box">
        <div class="summary-row">
          <span>Subtotal</span>
          <span>{{amount}}</span>
        </div>
        <div class="summary-row">
          <span>Tax / GST (0%)</span>
          <span>0.00</span>
        </div>
        <div class="summary-row summary-total">
          <span>Total Paid</span>
          <span>{{amount}}</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-terms">
        <strong>Thank you for your business!</strong><br>
        For inquiries regarding this receipt, please contact support@example.com.
      </div>
      <div style="text-align: right;">
        <div>Authorized Signatory</div>
        <div style="margin-top: 18px; font-weight: 700; color: #0f172a; border-top: 1px solid #cbd5e1; padding-top: 4px;">Finance Department</div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: 'corporate-invoice',
    name: 'Corporate Executive Invoice (Navy Blue)',
    description: 'Corporate style invoice with modern header, clean table, and dynamic contact and amount fields.',
    orientation: 'portrait',
    pageSize: 'A4',
    fields: ['name', 'email', 'phone', 'amount', 'address', 'invoice_no', 'date', 'description'],
    sampleData: {
      name: 'Sarah Jenkins',
      email: 'sarah.j@acmecorp.com',
      phone: '+91 9876543210',
      amount: '12,750.00',
      address: 'Suite 404, Tech Park, Bangalore, KA 560100',
      invoice_no: 'CORP-8821',
      date: '2026-10-30',
      description: 'Cloud Infrastructure & Managed Support'
    },
    htmlContent: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; }
  body { background: #ffffff; color: #1e293b; padding: 48px; }
  .top-bar { height: 6px; background: linear-gradient(90deg, #1e3a8a, #3b82f6); margin: -48px -48px 40px -48px; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; }
  .company-title { font-size: 26px; font-weight: 800; color: #1e3a8a; letter-spacing: -0.5px; }
  .company-meta { font-size: 13px; color: #64748b; margin-top: 4px; line-height: 1.4; }
  .invoice-title { font-size: 28px; font-weight: 900; color: #0f172a; text-transform: uppercase; text-align: right; }
  .invoice-num { font-size: 14px; color: #3b82f6; font-weight: 700; text-align: right; margin-top: 4px; }
  .date-badge { text-align: right; font-size: 12px; color: #64748b; margin-top: 2px; }
  .cards-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 36px; }
  .box { padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; background: #fafafa; }
  .box-label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #3b82f6; margin-bottom: 8px; letter-spacing: 0.05em; }
  .box-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 6px; }
  .box-text { font-size: 13px; color: #475569; line-height: 1.5; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
  th { background: #1e3a8a; color: white; padding: 12px 16px; text-align: left; font-size: 12px; text-transform: uppercase; font-weight: 600; }
  th:last-child { text-align: right; }
  td { padding: 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
  td:last-child { text-align: right; font-weight: 700; color: #1e3a8a; }
  .amount-total-box { margin-left: auto; width: 280px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; }
  .amount-total-row { display: flex; justify-content: space-between; font-size: 14px; color: #1e3a8a; }
  .amount-total-row.grand { font-size: 18px; font-weight: 800; border-top: 1px solid #93c5fd; padding-top: 10px; margin-top: 10px; }
  .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between; }
</style>
</head>
<body>
  <div class="top-bar"></div>
  <div class="header">
    <div>
      <div class="company-title">NEXUS GLOBAL CORP</div>
      <div class="company-meta">Corporate Towers, Innovation Way<br>GSTIN: 27AABCN1234F1Z5 | Support: contact@nexusglobal.com</div>
    </div>
    <div>
      <div class="invoice-title">Tax Invoice</div>
      <div class="invoice-num">#{{invoice_no}}</div>
      <div class="date-badge">Issued: {{date}}</div>
    </div>
  </div>

  <div class="cards-row">
    <div class="box">
      <div class="box-label">Client Details (Bill To)</div>
      <div class="box-title">{{name}}</div>
      <div class="box-text"><strong>Email:</strong> {{email}}</div>
      <div class="box-text"><strong>Phone:</strong> {{phone}}</div>
      <div class="box-text"><strong>Address:</strong> {{address}}</div>
    </div>
    <div class="box">
      <div class="box-label">Invoice Summary</div>
      <div class="box-text"><strong>Invoice Number:</strong> {{invoice_no}}</div>
      <div class="box-text"><strong>Date:</strong> {{date}}</div>
      <div class="box-text"><strong>Status:</strong> <span style="color:#059669; font-weight:bold;">CONFIRMED / PAID</span></div>
      <div class="box-text"><strong>Currency:</strong> INR (₹) / USD ($)</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Service / Item Description</th>
        <th style="width: 100px;">Qty</th>
        <th style="width: 150px;">Rate</th>
        <th style="width: 150px;">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>{{description}}</strong>
          <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Service for {{name}} (Contact: {{phone}})</div>
        </td>
        <td>1</td>
        <td>{{amount}}</td>
        <td>{{amount}}</td>
      </tr>
    </tbody>
  </table>

  <div class="amount-total-box">
    <div class="amount-total-row">
      <span>Net Amount</span>
      <span>{{amount}}</span>
    </div>
    <div class="amount-total-row grand">
      <span>Total Amount</span>
      <span>{{amount}}</span>
    </div>
  </div>

  <div class="footer">
    <div>Generated automatically via Enterprise PDF System. Computer generated document.</div>
    <div>Page 1 of 1</div>
  </div>
</body>
</html>`
  },
  {
    id: 'certificate-template',
    name: 'Certificate of Appreciation & Excellence',
    description: 'Landscape ornate certificate with student/employee dynamic name, contact, and achievement amount/score.',
    orientation: 'landscape',
    pageSize: 'A4',
    fields: ['name', 'email', 'phone', 'amount', 'address', 'invoice_no', 'date', 'description'],
    sampleData: {
      name: 'Alexander Wright',
      email: 'alex.wright@example.com',
      phone: '+91 9123456789',
      amount: 'Grade A+ (Distinction)',
      address: 'Department of Computing & Information Systems',
      invoice_no: 'CERT-2026-904',
      date: '2026-10-30',
      description: 'Advanced Software Architecture & System Engineering'
    },
    htmlContent: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Georgia', serif; }
  body { background: #ffffff; padding: 25px; text-align: center; }
  .cert-border { border: 6px double #b45309; padding: 36px 48px; border-radius: 8px; position: relative; background: #fffbeb; height: calc(100vh - 50px); display: flex; flex-direction: column; justify-content: space-between; }
  .ribbon { font-size: 38px; color: #92400e; font-weight: bold; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 6px; }
  .sub-ribbon { font-size: 16px; color: #78350f; letter-spacing: 2px; text-transform: uppercase; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .present-to { font-size: 15px; color: #78350f; font-style: italic; margin-top: 24px; font-family: 'Georgia', serif; }
  .recipient-name { font-size: 38px; color: #1e3a8a; font-weight: bold; border-bottom: 2px solid #b45309; display: inline-block; padding: 6px 40px; margin: 14px auto; }
  .cert-text { font-size: 16px; color: #451a03; max-width: 720px; margin: 12px auto; line-height: 1.6; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .details-badge { display: inline-flex; gap: 20px; margin-top: 14px; font-size: 13px; color: #78350f; font-family: 'Helvetica Neue', Arial, sans-serif; background: #fef3c7; padding: 6px 18px; border-radius: 20px; }
  .signatures { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 36px; padding: 0 40px; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .sig-line { width: 180px; border-top: 1px solid #78350f; padding-top: 8px; font-size: 13px; color: #78350f; font-weight: bold; }
  .cert-id { font-size: 11px; color: #92400e; font-family: monospace; }
</style>
</head>
<body>
  <div class="cert-border">
    <div>
      <div class="ribbon">Certificate of Excellence</div>
      <div class="sub-ribbon">HONORING OUTSTANDING PERFORMANCE & COMMITMENT</div>
    </div>

    <div>
      <div class="present-to">This certificate is proudly awarded to</div>
      <div class="recipient-name">{{name}}</div>
      <div class="cert-text">
        In recognition of successfully fulfilling the program requirements for <strong>{{description}}</strong> with exceptional performance and distinction.
      </div>
      <div class="details-badge">
        <span>📧 {{email}}</span>
        <span>📞 {{phone}}</span>
        <span>📍 {{address}}</span>
      </div>
    </div>

    <div class="signatures">
      <div class="sig-line">
        <div>Program Director</div>
        <div style="font-size: 11px; color: #92400e; font-weight: normal; margin-top: 2px;">Dr. Robert Henderson</div>
      </div>
      <div>
        <div class="cert-id">ID: {{invoice_no}} | Date: {{date}}</div>
        <div style="font-size: 13px; color: #b45309; font-weight: bold; margin-top: 4px;">Score / Recognition: {{amount}}</div>
      </div>
      <div class="sig-line">
        <div>Authorized Registrar</div>
        <div style="font-size: 11px; color: #92400e; font-weight: normal; margin-top: 2px;">Office of Certification</div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: 'welcome-offer-letter',
    name: 'Official Offer / Confirmation Letter',
    description: 'Formal company letter with customized address, salary/fee amount, date, and contact details.',
    orientation: 'portrait',
    pageSize: 'A4',
    fields: ['name', 'email', 'phone', 'amount', 'address', 'invoice_no', 'date', 'description'],
    sampleData: {
      name: 'Emily Davis',
      email: 'emily.davis@workmail.com',
      phone: '+1 (415) 890-1234',
      amount: '$95,000 / year',
      address: '120 Market Street, San Francisco, CA',
      invoice_no: 'OFFER-2026-44',
      date: '2026-10-30',
      description: 'Senior Full Stack Software Engineer'
    },
    htmlContent: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
  body { background: #ffffff; color: #1e293b; padding: 50px 60px; line-height: 1.6; }
  .letterhead { display: flex; justify-content: space-between; border-bottom: 2px solid #0f172a; padding-bottom: 20px; margin-bottom: 30px; }
  .co-name { font-size: 22px; font-weight: 800; color: #0f172a; }
  .co-tagline { font-size: 12px; color: #64748b; }
  .ref-date { font-size: 13px; color: #475569; text-align: right; }
  .recipient-block { margin-bottom: 28px; font-size: 14px; }
  .recipient-name { font-weight: 700; color: #0f172a; font-size: 16px; }
  .subject { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 20px; padding: 8px 12px; background: #f1f5f9; border-left: 4px solid #2563eb; }
  .letter-body { font-size: 14px; color: #334155; margin-bottom: 24px; text-align: justify; }
  .letter-body p { margin-bottom: 14px; }
  .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
  .details-table td { padding: 10px 16px; font-size: 13px; border-bottom: 1px solid #e2e8f0; }
  .details-table td:first-child { font-weight: 600; color: #475569; width: 35%; }
  .signature-block { margin-top: 40px; font-size: 14px; }
  .signature-sign { font-family: 'Brush Script MT', cursive, sans-serif; font-size: 26px; color: #1e3a8a; margin: 10px 0; }
</style>
</head>
<body>
  <div class="letterhead">
    <div>
      <div class="co-name">APEX INNOVATIONS TECH LTD.</div>
      <div class="co-tagline">Building the Future of Digital Platforms</div>
    </div>
    <div class="ref-date">
      <div><strong>Ref:</strong> {{invoice_no}}</div>
      <div><strong>Date:</strong> {{date}}</div>
    </div>
  </div>

  <div class="recipient-block">
    <div>To,</div>
    <div class="recipient-name">{{name}}</div>
    <div>Email: {{email}} | Phone: {{phone}}</div>
    <div>Address: {{address}}</div>
  </div>

  <div class="subject">
    SUBJECT: OFFICIAL APPOINTMENT & ENGAGEMENT CONFIRMATION (ROLE: {{description}})
  </div>

  <div class="letter-body">
    <p>Dear {{name}},</p>
    <p>We are delighted to extend this formal engagement letter to you for the position of <strong>{{description}}</strong> at Apex Innovations Tech Ltd. We were thoroughly impressed with your background and credentials.</p>
    
    <table class="details-table">
      <tr>
        <td>Designation / Role</td>
        <td><strong>{{description}}</strong></td>
      </tr>
      <tr>
        <td>Candidate Name</td>
        <td>{{name}}</td>
      </tr>
      <tr>
        <td>Contact Email</td>
        <td>{{email}}</td>
      </tr>
      <tr>
        <td>Contact Phone</td>
        <td>{{phone}}</td>
      </tr>
      <tr>
        <td>Residential Address</td>
        <td>{{address}}</td>
      </tr>
      <tr>
        <td>Agreed Compensation / Amount</td>
        <td><strong style="color: #059669; font-size: 15px;">{{amount}}</strong></td>
      </tr>
      <tr>
        <td>Effective Commencement Date</td>
        <td>{{date}}</td>
      </tr>
    </table>

    <p>Please review and sign the duplicate copy of this letter to acknowledge your formal acceptance. We look forward to welcoming you aboard and achieving great milestones together.</p>
  </div>

  <div class="signature-block">
    <div>Sincerely,</div>
    <div class="signature-sign">David Richardson</div>
    <div><strong>David Richardson</strong></div>
    <div style="font-size: 12px; color: #64748b;">Director of Human Resources & Talent Operations<br>Apex Innovations Tech Ltd.</div>
  </div>
</body>
</html>`
  }
];

module.exports = defaultTemplates;

