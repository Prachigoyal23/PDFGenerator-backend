const mongoose = require('mongoose');

const generationJobSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true,
      unique: true,
    },
    templateId: {
      type: String,
      required: true,
    },
    templateName: {
      type: String,
      required: true,
    },
    totalRecords: {
      type: Number,
      required: true,
    },
    successCount: {
      type: Number,
      default: 0,
    },
    failedCount: {
      type: Number,
      default: 0,
    },
    records: [
      {
        name: String,
        email: String,
        phone: String,
        amount: String,
        address: String,
        status: { type: String, enum: ['success', 'failed'], default: 'success' },
        fileName: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('GenerationJob', generationJobSchema);

