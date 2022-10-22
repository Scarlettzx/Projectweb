const User = require('../models/login');
const bcrypt = require('bcrypt');

exports.getlogin = (req, res, next) => {
  res.render('../views/layouts/login', {
    title: 'Login -',
  });
};

exports.postlogin = async (req, res, next) => {
  const data = req.body;

  const user = await User.findOne({
    username: data.username,
  });
  if (user) {
    const iscorrect = bcrypt.compareSync(data.password, user.password);
    if (iscorrect) {
      req.session.userId = user._id;
      return res.redirect('/');
    } else {
      return res.redirect('/admin');
    }
  } else {
    return res.redirect('/admin');
  }
};
