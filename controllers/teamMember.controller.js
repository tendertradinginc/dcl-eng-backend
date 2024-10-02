const {
  createTeamMemberDb,
  getAllTeamMembersFromDb,
  getSingleTeamMemberFromDb,
  updateTeamMemberFromDb,
  deleteTeamMemberFromDb,
} = require("../services/teamMember.service");

exports.createTeamMember = async (req, res) => {
  try {
    const result = await createTeamMemberDb(req.body);
    res.status(201).json({
      status: "success",
      message: "Successfully created team member",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create team member",
      error: error.message,
    });
  }
};

exports.getAllTeamMembers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const { result, metadata } = await getAllTeamMembersFromDb(
      page,
      limit,
      search
    );
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved team members",
      data: result,
      metadata,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't retrieve team members",
      error: error.message,
    });
  }
};

exports.getTeamMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleTeamMemberFromDb(id);
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved team member",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't retrieve team member",
      error: error.message,
    });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateTeamMemberFromDb(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully updated team member",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't update team member",
      error: error.message,
    });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTeamMemberFromDb(id);
    res.status(200).json({
      status: "success",
      message: "Successfully deleted team member",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't delete team member",
      error: error.message,
    });
  }
};
