// src/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/', adminController.createAdmin);

// Define other admin routes as needed

module.exports = router;
