// src/controllers/adminController.js
const Admin = require('../../models/admin');

exports.createAdmin = async (req, res) => {
    try {
        const newAdmin = await Admin.create(req.body);
        res.json(newAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Implement other admin controller methods like login if needed
