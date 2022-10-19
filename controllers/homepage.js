exports.gethomepage = (req, res, next) => {
  res.render('../views/layouts/home-page', {
    title: '',
    path: '/',
  });
};
