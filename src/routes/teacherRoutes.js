// src/routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/', teacherController.createTeacher);

// Define other teacher routes as needed

module.exports = router;
