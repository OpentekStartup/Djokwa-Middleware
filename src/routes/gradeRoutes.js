// src/routes/gradeRoutes.js
const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.post('/', gradeController.createGrade);

// Define other grade routes as needed

module.exports = router;
