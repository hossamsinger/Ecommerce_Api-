// reset dependencies
const express = require('express');
const testController = require('../controllers/testController');

// reset router
const router = express.Router();

// Routes GET | UPDATE | DELETE | POST
router.get('/test-user', testController);

// Export router
module.exports = router;