const Banner = require("../models/Banner");

exports.createBannerinDb = async (details) => {
  const result = await Banner.create(details);
  return result;
};

exports.getAllBannerFromDb = async (page, limit) => {
  const result = await Banner.find()
    .sort({ name: "asc" })
    .limit(parseInt(limit))
    .skip((parseInt(page) - 1) * parseInt(limit));
  const totlaResult = await Banner.countDocuments();
  return { result, totlaResult };
};

exports.getSingleBannerFromDb = async (bannerId) => {
  const result = await Banner.findOne({ _id: bannerId });
  return result;
};

exports.updateSingleBannerinDb = async (bannerId, data) => {
  const result = await Banner.updateOne({ _id: bannerId }, { $set: data });
  return result;
};

exports.DeleteSingleBannerFromDb = async (bannerId) => {
  const result = await Banner.deleteOne({ _id: bannerId });
  return result;
};
