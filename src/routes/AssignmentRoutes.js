// src/routes/assignmentRoutes.js
const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.post('/', assignmentController.createAssignment);

// Define other assignment routes as needed

module.exports = router;
