// src/routes/parentRoutes.js
const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parentController');

router.post('/parent', parentController.createParent);
router.put('/parent/:id', parentController.updateParent);
router.get('/parent', parentController.getStudents);
router.get('/parent/:id', parentController.getParent);
router.delete('/parent/:id', parentController.destroyParent);

// Define other parent routes as needed

module.exports = router;
