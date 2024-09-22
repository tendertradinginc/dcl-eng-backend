const {

    findAllBlogs,
 
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