// src/routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/', attendanceController.createAttendance);

// Define other attendance routes as needed

module.exports = router;
