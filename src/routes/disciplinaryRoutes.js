// src/routes/disciplinary_actionRoutes.js
const express = require('express');
const router = express.Router();
const disciplinary_actionController = require('../controllers/disciplinary_actionController');

router.post('/', disciplinary_actionController.createDisciplinary_action);

// Define other disciplinary_action routes as needed

module.exports = router;
