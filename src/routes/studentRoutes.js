// src/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/student', studentController.createStudent);
router.put('/student/:id', studentController.updateStudent);
router.get('/student', studentController.getStudents);
router.get('/student/:id', studentController.getStudent);
router.delete('/student/:id', studentController.destroyStudent);

// Define other student routes as needed

module.exports = router;
