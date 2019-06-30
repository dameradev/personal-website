const express = require("express");
const router = express.Router();

const blogController = require('../controllers/blog');

router.get('/', blogController.getBlogpage);
router.post('/create-post', blogController.postCreateBlogpost)

module.exports = router;