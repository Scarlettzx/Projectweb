const express = require('express');
const router = express.Router();
const path = require('path');
// const Couses = require('../models');
const courseController = require('../controllers/courses');
router.get('/courses', courseController.getcourses);

module.exports = router;

router.get('/courses/cs:id', (req, res) => {
  res.render('../views/courselist/cs01418113');
});
