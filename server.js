const express = require('express');
const path = require('path');
const app = express();
const homepage = require('./routes/homepage');
const courseslist = require('./routes/courses');
const bodyparser = require('body-parser');
const morgan = require('morgan');

// app.use(morgan('tiny'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// !connect to mongodb
// mongoose.connect(process.env.MONGODB_URL);
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('connect to database'));
app.use(homepage);
app.use(courseslist);
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './views', 'home-page.html'));
// });
const PORT = process.env.PORT | 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// module.exports = db;
//   , (err) => {
//   if (!err) {
//     console.log('connect to db');
//   } else {
//     console.log('error');
//   }
// });
// const courseSchema = {
//   id: Number,
//   thai: String,
//   eng: String,
//   credit: String,
// };
// const Course = mongoose.model('courselist', courseSchema);

// const uri = 'mongodb://myUserAdmin:myUserAdmin@localhost:27017';

// app.post('/users/create', async (req, res) => {
//   const user = req.body;
//   const client = new mongo(uri);
//   await client.connect();
//   await client
//     .db('projectweb')
//     .collection('courselists')
//     .insertOne({
//       id: parseInt(user.id),
//       thai: user.thai,
//       eng: user.eng,
//       credit: user.credit,
//     });
//   await client.close();
//   res.status(200).send({
//     status: 'ok',
//     message: 'User with ID = ' + user.id + ' is created',
//     user: user,
//   });
// });
// app.get('/users', async (req, res) => {
//   const client = new mongo(uri);
//   await client.connect();
//   const users = await client
//     .db('projectweb')
//     .collection('courselists')
//     .find({})
//     .toArray();
//   await client.close();
//   res.status(200).send(users);
// });
