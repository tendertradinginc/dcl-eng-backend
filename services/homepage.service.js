const Client = require("../models/Client");

exports.getAllSummaryfromDb = async () => {
  const totalClient = await Client.countDocuments({});
  return result;
};
