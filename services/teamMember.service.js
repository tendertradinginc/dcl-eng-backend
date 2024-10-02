const TeamMember = require("../models/TeamMember");

exports.createTeamMemberDb = async (teamMemberData) => {
  const newTeamMember = new TeamMember(teamMemberData);
  return await newTeamMember.save();
};

exports.getAllTeamMembersFromDb = async (page, limit, search) => {
  const skip = (page - 1) * limit;
  let query = {};

  if (search) {
    query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { designation: { $regex: search, $options: "i" } },
      ],
    };
  }

  const result = await TeamMember.find(query)
    .skip(skip)
    .limit(parseInt(limit))
    .sort({ createdAt: -1 });

  const total = await TeamMember.countDocuments(query);

  return {
    result,
    metadata: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

exports.getSingleTeamMemberFromDb = async (id) => {
  return await TeamMember.findById(id);
};

exports.updateTeamMemberFromDb = async (id, updateData) => {
  return await TeamMember.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

exports.deleteTeamMemberFromDb = async (id) => {
  return await TeamMember.findByIdAndDelete(id);
};

exports.changeTeamMemberFeaturedStatus = async ({ id }) => {
  const teamMember = await TeamMember.findById(id);
  if (!teamMember) {
    throw new Error("Team member not found");
  }
  teamMember.featuredStatus = !teamMember.featuredStatus;
  return await teamMember.save();
};
