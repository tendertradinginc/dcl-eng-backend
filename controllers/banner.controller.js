const {
  createBannerinDb,
  getSingleBannerFromDb,
  getAllBannerFromDb,
  DeleteSingleBannerFromDb,
  updateSingleBannerinDb,
} = require("../services/banner.service");

exports.getAllBanner = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const result = await getAllBannerFromDb(page, limit);
    res.status(200).json({
      status: "success",
      message: "Successfully get",
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

exports.createBanner = async (req, res) => {
  try {
    const result = await createBannerinDb(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getSingleBanner = async (req, res, next) => {
  try {
    const { bannerId } = req.params;

    const result = await getSingleBannerFromDb(bannerId);
    res.status(200).json({
      status: "success",
      message: "Successfully find  ",
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
exports.updateSingleBanner = async (req, res) => {
  try {
    const { bannerId } = req.params;
    const result = await updateSingleBannerinDb(bannerId, req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully Updated ",
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
exports.DeleteSingleBanner = async (req, res, next) => {
  try {
    const { bannerId } = req.params;

    const result = await DeleteSingleBannerFromDb(bannerId);

    res.status(200).json({
      status: "success",
      message: "Successfully deleted ",
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
