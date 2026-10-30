const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
  {
    templateId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    orientation: {
      type: String,
      enum: ['portrait', 'landscape'],
      default: 'portrait',
    },
    pageSize: {
      type: String,
      enum: ['A4', 'Letter', 'Legal'],
      default: 'A4',
    },
    fields: {
      type: [String],
      default: ['name', 'email', 'phone', 'amount', 'address'],
    },
    sampleData: {
      type: Map,
      of: String,
      default: {},
    },
    htmlContent: {
      type: String,
      required: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Template', templateSchema);

