exports.get404 = (req, res, next) => {
  res.status(404).render('../views/layouts/404', { title: 'Page Not Found' });
};
