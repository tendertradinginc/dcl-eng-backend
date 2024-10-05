const {
  getAllSummaryfromDb,
  getAllBannerFromDb,
} = require("../services/homepage.service");

exports.getAllSummary = async (req, res) => {
  try {
    const result = await getAllSummaryfromDb();
    res.status(200).json({
      status: "success",
      message: "Successfully get all",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  find ",
      error: error.message,
    });
  }
};
exports.getAllBanner = async (req, res) => {
  try {
    const result = await getAllBannerFromDb();
    res.status(200).json({
      status: "success",
      message: "Successfully get all",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  find ",
      error: error.message,
    });
  }
};
