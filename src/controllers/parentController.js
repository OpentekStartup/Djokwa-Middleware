// src/controllers/teacherController.js
const parent = require('../models/parent');

exports.createParent = async (req, res) => {
    try {
        const newParent = await parent.create(req.body);
        res.json(newParent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Implement other parent controller methods like list, display by ID, delete if needed
