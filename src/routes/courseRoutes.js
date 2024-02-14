// src/routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/', courseController.createCourse);

// Define other course routes as needed

module.exports = router;
