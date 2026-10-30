const Template = require('../models/Template');
const defaultTemplates = require('../templates/defaultTemplates');
const { getDBStatus } = require('../config/db');

// In-memory store when MongoDB is not connected
let memoryTemplates = [...defaultTemplates];

/**
 * Get all available templates
 */
const getAllTemplates = async (req, res) => {
  try {
    if (getDBStatus()) {
      const dbTemplates = await Template.find().sort({ createdAt: -1 });
      
      // Combine defaults with dbTemplates if db is fresh
      const existingIds = new Set(dbTemplates.map(t => t.templateId));
      const combined = [
        ...dbTemplates.map(t => ({
          id: t.templateId,
          name: t.name,
          description: t.description,
          orientation: t.orientation,
          pageSize: t.pageSize,
          fields: t.fields,
          sampleData: Object.fromEntries(t.sampleData || new Map()),
          htmlContent: t.htmlContent,
          isDefault: t.isDefault,
        })),
        ...defaultTemplates.filter(d => !existingIds.has(d.id))
      ];

      return res.json({ success: true, count: combined.length, templates: combined });
    }

    return res.json({ success: true, count: memoryTemplates.length, templates: memoryTemplates });
  } catch (error) {
    console.error('Error fetching templates:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve templates', error: error.message });
  }
};

/**
 * Get a specific template by ID
 */
const getTemplateById = async (req, res) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      const template = await Template.findOne({ templateId: id });
      if (template) {
        return res.json({
          success: true,
          template: {
            id: template.templateId,
            name: template.name,
            description: template.description,
            orientation: template.orientation,
            pageSize: template.pageSize,
            fields: template.fields,
            sampleData: Object.fromEntries(template.sampleData || new Map()),
            htmlContent: template.htmlContent,
            isDefault: template.isDefault,
          }
        });
      }
    }

    const fallback = defaultTemplates.find(t => t.id === id) || memoryTemplates.find(t => t.id === id);
    if (!fallback) {
      return res.status(404).json({ success: false, message: `Template with ID '${id}' not found.` });
    }

    return res.json({ success: true, template: fallback });
  } catch (error) {
    console.error('Error retrieving template:', error);
    return res.status(500).json({ success: false, message: 'Server error retrieving template', error: error.message });
  }
};

/**
 * Create or save a new template
 */
const createTemplate = async (req, res) => {
  try {
    const { id, name, description, orientation, pageSize, fields, sampleData, htmlContent } = req.body;

    if (!name || !htmlContent) {
      return res.status(400).json({ success: false, message: 'Template name and HTML content are required.' });
    }

    const templateId = id || `tpl-${Date.now()}`;
    const newTemplate = {
      id: templateId,
      name,
      description: description || '',
      orientation: orientation || 'portrait',
      pageSize: pageSize || 'A4',
      fields: fields || ['name', 'email', 'phone', 'amount', 'address'],
      sampleData: sampleData || {},
      htmlContent,
      isDefault: false
    };

    if (getDBStatus()) {
      await Template.findOneAndUpdate(
        { templateId },
        { ...newTemplate, templateId },
        { upsert: true, new: true }
      );
    }

    // Always update in-memory array
    const existingIndex = memoryTemplates.findIndex(t => t.id === templateId);
    if (existingIndex >= 0) {
      memoryTemplates[existingIndex] = newTemplate;
    } else {
      memoryTemplates.unshift(newTemplate);
    }

    return res.status(201).json({ success: true, message: 'Template saved successfully', template: newTemplate });
  } catch (error) {
    console.error('Error saving template:', error);
    return res.status(500).json({ success: false, message: 'Failed to save template', error: error.message });
  }
};

/**
 * Delete a custom template
 */
const deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if trying to delete default template
    if (defaultTemplates.some(d => d.id === id)) {
      return res.status(400).json({ success: false, message: 'Default templates cannot be deleted.' });
    }

    if (getDBStatus()) {
      await Template.deleteOne({ templateId: id });
    }

    memoryTemplates = memoryTemplates.filter(t => t.id !== id);

    return res.json({ success: true, message: 'Template deleted successfully' });
  } catch (error) {
    console.error('Error deleting template:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete template', error: error.message });
  }
};

module.exports = {
  getAllTemplates,
  getTemplateById,
  createTemplate,
  deleteTemplate
};

