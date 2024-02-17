// src/routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/teacher', teacherController.createTeacher);
router.put('/teacher/:id', teacherController.updateTeacher);
router.get('/teacher', teacherController.getTeachers);
router.get('/teacher/:id', teacherController.getTeacher);
router.delete('/teacher/:id', teacherController.destroyTeacher);

// Define other teacher routes as needed

module.exports = router;
