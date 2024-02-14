// src/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/', eventController.createEvent);

// Define other event routes as needed

module.exports = router;
