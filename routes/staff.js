const express = require('express');
const router = express.Router();
const staffcontrollers = require('../controllers/staff');
router.get('/', staffcontrollers.getstaff);
module.exports = router;
