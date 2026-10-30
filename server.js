const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, getDBStatus } = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (with graceful fallback if not available)
connectDB();

// Dynamic CORS configuration from .env
const rawCors = process.env.CORS_ORIGIN || '*';
const allowedOrigins = rawCors === '*' ? '*' : rawCors.split(',').map((o) => o.trim());

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health & System Info Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'PDFGenerator-Backend',
    timestamp: new Date().toISOString(),
    database: getDBStatus() ? 'connected' : 'in-memory-fallback',
  });
});

// Mount Routes
app.use('/api/templates', require('./routes/templateRoutes'));
app.use('/api/pdf', require('./routes/pdfRoutes'));

// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Central Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Application Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 PDFGenerator-Backend running on port: ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📄 Templates:    http://localhost:${PORT}/api/templates`);
  console.log(`📊 PDF API:      http://localhost:${PORT}/api/pdf`);
  console.log(`===============================================`);
});

// Graceful termination handling
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Shutting down gracefully.');
  server.close(() => process.exit(0));
});

module.exports = app;

