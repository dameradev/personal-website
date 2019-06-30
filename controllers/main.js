exports.getHomepage = (req, res, next) => {
  res.render('main/homepage', {
    pageTitle: 'Home',
    path: '/homepage'
  })
}