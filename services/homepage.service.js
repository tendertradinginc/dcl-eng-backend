const Client = require("../models/Client");
const ClientFeedback = require("../models/ClientFeedback");
const Project = require("../models/Project");
const SuccessStory = require("../models/SuccessStory");

exports.getAllSummaryfromDb = async () => {
  const totalClient = await Client.countDocuments({});
  const totalProject = await Project.countDocuments({});
  const totalSuccessStory = await SuccessStory.countDocuments({});
  const totalClientFeedback = await ClientFeedback.countDocuments({});
  return { totalClient, totalProject, totalSuccessStory, totalClientFeedback };
};
