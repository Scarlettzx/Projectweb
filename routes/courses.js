const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courses');

// ! courseslist
router.get('/courses', courseController.getcourses);

// !courses-info
router.get('/courses/cs:id', courseController.getecourses_info);

module.exports = router;
