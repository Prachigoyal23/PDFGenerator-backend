const express = require('express');
const router = express.Router();
const {
  getAllTemplates,
  getTemplateById,
  createTemplate,
  deleteTemplate,
} = require('../controllers/templateController');

router.get('/', getAllTemplates);
router.get('/:id', getTemplateById);
router.post('/', createTemplate);
router.delete('/:id', deleteTemplate);

module.exports = router;

