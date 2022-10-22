exports.getlogout = (req, res, next) => {
  req.session.destroy(() => {
    console.log(loggedIn);
    res.redirect('/');
  });
};
