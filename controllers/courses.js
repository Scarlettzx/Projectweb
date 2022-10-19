const Course = require('../models/courses');

exports.getcourses = (req, res, next) => {
  Course.getAllcourse((err, courses) => {
    if (err) throw err;
    res.render('../views/layouts/courselist', {
      title: 'รายวิชาที่เปิดสอน',
      path: '/courses',
      courses: courses,
    });
  });
};
