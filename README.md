# PDFGenerator-Backend (MERN Stack)

High-performance Node.js, Express, Puppeteer & Mongoose backend service for dynamic, automated bulk PDF generation from Excel/CSV spreadsheets.

---

## 🌟 Features

- **Dynamic Template Engine**: Replace variables like `{{name}}`, `{{email}}`, `{{phone}}`, `{{amount}}`, `{{address}}`, `{{invoice_no}}`, `{{date}}`, `{{description}}` in real-time.
- **Smart Column Auto-Detection**: Uses synonym detection to automatically map varying Excel column names (`"Customer Name"`, `"Mobile No"`, `"Net Amount"`) to PDF placeholders.
- **Pixel-Perfect PDF Rendering**: Powered by headless Chromium (Puppeteer) with support for custom CSS, landscape/portrait orientations, and standard paper sizes (A4, Letter, Legal).
- **Batch ZIP Generation**: Multi-threaded chunk processing bundled directly into streaming ZIP archives.
- **Sample Excel Generation**: Instant downloadable `.xlsx` sample with proper column formatting.
- **Graceful Resilience**: Automatically connects to MongoDB when available; seamlessly falls back to memory cache if MongoDB is offline so PDF generation never blocks.

---

## 📂 Project Structure

```
PDFGenerator-backend/
├── config/
│   └── db.js                 # MongoDB connection & fallback
├── controllers/
│   ├── templateController.js # Template management (CRUD)
│   └── pdfController.js      # Excel parsing & PDF generation logic
├── models/
│   ├── Template.js           # Mongoose Template model
│   └── GenerationJob.js      # Audit log model
├── routes/
│   ├── templateRoutes.js     # /api/templates
│   └── pdfRoutes.js          # /api/pdf routes
├── services/
│   ├── excelService.js       # Spreadsheet parsing & auto-mapping
│   └── pdfService.js         # Puppeteer rendering & ZIP archiving
├── templates/
│   └── defaultTemplates.js   # Pre-built receipts, invoices, certificates, letters
├── .env.example
├── .env
├── package.json
└── server.js                 # Express application entrypoint
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (optional - local or Atlas URI)

### 2. Installation
```bash
cd PDFGenerator-backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of `PDFGenerator-backend`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/pdf_generator
NODE_ENV=development
```

### 4. Run the Server
```bash
# Development mode with hot-reload
npm run dev

# Production start
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check & database connection status |
| `GET` | `/api/templates` | List all available PDF templates |
| `GET` | `/api/templates/:id` | Get specific template details |
| `POST` | `/api/templates` | Save or update custom HTML/CSS template |
| `DELETE` | `/api/templates/:id` | Delete custom template |
| `POST` | `/api/pdf/parse-excel` | Upload `.xlsx` or `.csv` file and extract records |
| `GET` | `/api/pdf/sample-excel` | Download formatted sample Excel spreadsheet |
| `POST` | `/api/pdf/preview-html` | Render populated HTML for live UI preview |
| `POST` | `/api/pdf/generate-single` | Generate & download a single PDF file |
| `POST` | `/api/pdf/generate-batch-zip` | Generate all PDFs and stream as a ZIP archive |

