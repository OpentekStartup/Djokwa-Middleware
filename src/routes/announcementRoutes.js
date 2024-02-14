// src/routes/announcementRoutes.js
const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');

router.post('/', announcementController.createAnnouncement);

// Define other announcement routes as needed

module.exports = router;
