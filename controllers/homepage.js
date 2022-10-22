exports.gethomepage = (req, res, next) => {
  console.log(req.session);
  res.render('../views/layouts/home-page', {
    title: '',
    path: '/',
  });
};
