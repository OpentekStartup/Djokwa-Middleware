// src/controllers/studentController.js
const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Implement other Student controller methods like list, display by ID, delete if needed
