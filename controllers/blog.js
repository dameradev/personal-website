const Post = require('../models/post');

exports.getBlogpage = (req, res, next) => {
  res.render('blog/blogpage', {
    pageTitle: 'Blog',
    path: '/blog'
  })
}

exports.postCreateBlogpost = async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  await post.save();
  res.redirect('/blog')
}