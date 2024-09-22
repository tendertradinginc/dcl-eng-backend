const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blogs.controller");

router.route("/").get(blogController.getAllBlogs)

module.exports = router;