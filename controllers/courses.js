const Course = require('../models/courses');

exports.getcourses = (req, res, next) => {
  Course.getAllcourse((err, courses) => {
    if (err) throw err;
    res.render('../views/layouts/courselist', {
      title: 'รายวิชาที่เปิดสอน',
      courses: courses,
    });
  });
};

exports.getecourses_info = (req, res, next) => {
  const course = req.params.id;
  res.render(`../views/courselist/cs${course}`, {
    title: `${course}`,
  });
};
