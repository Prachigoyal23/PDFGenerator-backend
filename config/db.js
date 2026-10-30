const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pdf_generator';

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`[MongoDB] Warning: Could not connect to MongoDB at ${mongoURI}`);
    console.warn(`[MongoDB] Running in In-Memory / File-Cache mode. Batch PDF generation and templates will still work seamlessly!`);
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };

