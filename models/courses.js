const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  id: String,
  thai: String,
  eng: String,
  credit: String,
  link: String,
});

const Courses = (module.exports = mongoose.model('courselist', courseSchema));
module.exports.getAllcourse = function (data) {
  Courses.find(data);
};
