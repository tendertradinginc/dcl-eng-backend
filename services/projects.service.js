const Project = require("../models/Project");

exports.findAllProjects = async (page, limit, searchQueryValue) => {
  const searchValue = searchQueryValue == "undefined" ? "" : searchQueryValue;
  const regexSearch = new RegExp(searchValue, "i");
  const query = {
    $or: [
      { name: { $regex: regexSearch } },
      { description: { $regex: regexSearch } },
      { shortDescription: { $regex: regexSearch } },
    ],
  };
  const allProjects = await Project.find(query)
    .sort({ name: "asc" })
    .limit(parseInt(limit))
    .skip((parseInt(page) - 1) * parseInt(limit));
  const totlaProjects = await Project.countDocuments();
  return { allProjects, totlaProjects };
};

exports.createProject = async (details) => {
  const result = await Project.create(details);
  return result;
};

// get single Project for details

exports.singleProjectDetial = async (ProjectId) => {
  const result = await Project.findOne({ _id: ProjectId });
  return result;
};

// update Projects
exports.updateProjectsFromDb = async (ProjectId, data) => {
  const result = await Project.updateOne({ _id: ProjectId }, { $set: data });

  return result;
};

// delete Projects
exports.DeleteProjectFromdb = async (ProjectId) => {
  const result = await Project.deleteOne({ _id: ProjectId });
  return result;
};
