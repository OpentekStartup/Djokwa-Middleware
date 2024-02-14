// src/routes/launch_menuRoutes.js
const express = require('express');
const router = express.Router();
const launch_menuController = require('../controllers/launch_menuController');

router.post('/', launch_menuController.createLaunch_menu);

// Define other launch_menu routes as needed

module.exports = router;
