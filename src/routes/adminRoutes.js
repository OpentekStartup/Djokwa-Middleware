// src/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/admin', adminController.createAdmin);
router.put('/admin/:id', adminController.updateAdmin);
router.get('/admin', adminController.getAdmins);
router.get('/admin/:id', adminController.getAdmin);
router.delete('/admin/:id', adminController.destroyAdmin);

// Define other admin routes as needed

module.exports = router;
