const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const session = require('express-session');
const multer = require('multer');
let flash = require('express-flash');
const homepage = require('./routes/homepage');
const courseslist = require('./routes/courses');
const adminRoutes = require('./routes/admin');
const staffRoute = require('./routes/staff');
const errorControllers = require('./controllers/404');
app.use(morgan('tiny'));

app.set('view engine', 'ejs');
app.set('views', 'views');
// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('./public'));

app.use(
  session({
    secret: 'secretmew',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());
const dbUrl = 'mongodb://localhost:27017/projectweb';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connect to database'));
// app.use(express.static('./public'));

global.loggedIn = null;
app.use('*', (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

app.use(homepage);
app.use(courseslist);
app.use('/admin', adminRoutes);
app.use('/staff', staffRoute);
app.use(errorControllers.get404);

const PORT = process.env.PORT | 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
