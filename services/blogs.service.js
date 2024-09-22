const Blog = require("../models/Blog");

exports.findAllBlogs = async (page, limit) => {
    const allBlogs = await Blog.find()
      .sort({ name: "asc" })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    const totlaBlogs = await Blog.countDocuments();
    return { allBlogs, totlaBlogs };
  };