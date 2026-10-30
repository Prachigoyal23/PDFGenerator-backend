const express = require('express');
const multer = require('multer');
const router = express.Router();
const {
  parseExcel,
  downloadSampleExcel,
  previewHtml,
  generateSingle,
  generateBatchZip,
} = require('../controllers/pdfController');

// Multer in-memory storage (configurable via MAX_FILE_SIZE_MB in .env)
const maxFileSizeMB = parseInt(process.env.MAX_FILE_SIZE_MB, 10) || 20;

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxFileSizeMB * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'text/csv',
      'application/csv',
    ];
    if (
      allowed.includes(file.mimetype) ||
      file.originalname.match(/\.(xlsx|xls|csv)$/i)
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only .xlsx, .xls, and .csv files are supported!'), false);
    }
  },
});

router.post('/parse-excel', upload.single('file'), parseExcel);
router.get('/sample-excel', downloadSampleExcel);
router.post('/preview-html', previewHtml);
router.post('/generate-single', generateSingle);
router.post('/generate-batch-zip', generateBatchZip);

module.exports = router;

