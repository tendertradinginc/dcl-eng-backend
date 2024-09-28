const Blog = require("../models/Blog");

exports.createBlog = async (details) => {
  const result = await Blog.create(details);
  return result;
};

exports.findAllBlogs = async (page, limit) => {
  const allBlogs = await Blog.find()
    .sort({ name: "asc" })
    .limit(parseInt(limit))
    .skip((parseInt(page) - 1) * parseInt(limit));
  const totlaBlogs = await Blog.countDocuments();
  return { allBlogs, totlaBlogs };
};

// get single blog for details

exports.singleBlogDetial = async (blogId) => {
  const result = await Blog.findOne({ _id: blogId });
  return result;
};

// update blogs
exports.updateBlogsFromDb = async (blogId, data) => {
  const result = await Blog.updateOne({ _id: blogId }, { $set: data });
  return result;
};

// delete blogs
exports.DeleteBlogFromdb = async (blogId) => {
  const result = await Blog.deleteOne({ _id: blogId });
  return result;
};