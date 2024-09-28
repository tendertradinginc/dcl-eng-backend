const {
  createBlog,
  singleBlogDetial,
  findAllBlogs,
  DeleteBlogFromdb,
  updateBlogsFromDb,
} = require("../services/blogs.service");
  
exports.getAllBlogs = async (req, res) => {
    try {
      const { page, limit } = req.query;
      const result = await findAllBlogs(page, limit);
      res.status(200).json({
        status: "success",
        message: "Successfully get all Blogs",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "Couldn't  find any blogs",
        error: error.message,
      });
    }
  };


  exports.createBlog = async (req, res) => {
    try {
      const result = await createBlog(req.body);
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
 
  
  // find single blog
  exports.getSingleBlog = async (req, res, next) => {
    try {
      const { blogId } = req.params;
  
      const result = await singleBlogDetial(blogId);
      res.status(200).json({
        status: "success",
        message: "Successfully find the blog ",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "Couldn't find",
        error: error.message,
      });
    }
  };
  
  // update blogs
  exports.updateSingleBlog = async (req, res) => {
    try {
      const { blogId } = req.params;
      const result = await updateBlogsFromDb(blogId, req.body);
      res.status(200).json({
        status: "success",
        message: "Successfully Updated the Blog",
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "Couldn't find",
        error: error.message,
      });
    }
  };
  
  // delete single blog
  exports.DeleteSingleBlog = async (req, res, next) => {
    try {
      const { blogId } = req.params;
  
      const result = await DeleteBlogFromdb(blogId);
  
      res.status(200).json({
        status: "success",
        message: "Successfully deleted blog",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "Couldn't  find",
        error: error.message,
      });
    }
  };