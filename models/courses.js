const mongoose = require('mongoose');
const mongo = require('mongodb');
const dbUrl = 'mongodb://localhost:27017/projectweb';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connect to database'));
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
