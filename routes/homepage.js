const express = require('express');
const router = express.Router();
const homepageController = require('../controllers/homepage');
router.get('/', homepageController.gethomepage);

module.exports = router;
