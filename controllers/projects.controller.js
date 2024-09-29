const {
  singleProjectDetial,
  DeleteProjectFromdb,
  updateProjectsFromDb,
  createProject,
  findAllProjects,
} = require("../services/projects.service");



exports.getAllProjects = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const result = await findAllProjects(page, limit);
    res.status(200).json({
      status: "success",
      message: "Successfully get all Projects",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  find any Projects",
      error: error.message,
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const result = await createProject(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// find single Project
exports.getSingleProject = async (req, res, next) => {
  try {
    const { ProjectId } = req.params;

    const result = await singleProjectDetial(ProjectId);
    res.status(200).json({
      status: "success",
      message: "Successfully find the Project ",
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

// update Projects
// exports.updateSingleProject = async (req, res) => {
//   try {
//     const { ProjectId } = req.params;
//     const result = await updateProjectsFromDb(ProjectId, req.body);
//     res.status(200).json({
//       status: "success",
//       message: "Successfully Updated the Project",
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: "Couldn't find",
//       error: error.message,
//     });
//   }
// };

// delete single Project
// exports.DeleteSingleProject = async (req, res, next) => {
//   try {
//     const { ProjectId } = req.params;

//     const result = await DeleteProjectFromdb(ProjectId);

//     res.status(200).json({
//       status: "success",
//       message: "Successfully deleted Project",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: "Couldn't  find",
//       error: error.message,
//     });
//   }
// };
