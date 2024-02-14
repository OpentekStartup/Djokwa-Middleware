// src/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);

// Define other student routes as needed

module.exports = router;
