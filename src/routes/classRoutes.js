// src/routes/classRoutes.js
const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

router.post('/class', classController.createClass);

// Define other class routes as needed

module.exports = router;
