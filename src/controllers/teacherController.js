// src/controllers/teacherController.js
const teacher = require('../../models/teacher');

exports.createTeacher = async (req, res) => {
    try {
        const newTeacher = await teacher.create(req.body);
        res.json(newTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Implement other teacher controller methods like list, display by ID, delete if needed
