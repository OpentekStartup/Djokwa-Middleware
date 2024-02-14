// src/routes/parentRoutes.js
const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parentController');

router.post('/parent', parentController.createParent);

// Define other parent routes as needed

module.exports = router;
