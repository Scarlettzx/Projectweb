const User = require('../models/login');
const bcrypt = require('bcrypt');

exports.getregister = (req, res, next) => {
  res.render('../views/layouts/register', {
    title: 'Register -',
  });
};

exports.postregister = async (req, res, next) => {
  try {
    const data = req.body;
    const hasedPassword = await bcrypt.hash(data.password, 10);
    User.insertMany({
      username: data.username,
      password: hasedPassword,
    });
    res.redirect('/admin');
  } catch (error) {
    console.log(error);
  }
};
