const express = require("express");
const router = express.Router();
const teamMemberController = require("../../controllers/teamMember.controller");

// Create a new team member
router.post("/", teamMemberController.createTeamMember);

// Get all team members
router.get("/", teamMemberController.getAllTeamMembers);

// Get a single team member by ID
router.get("/:id", teamMemberController.getTeamMemberById);

// Update a team member
router.put("/:id", teamMemberController.updateTeamMember);

// Delete a team member
router.delete("/:id", teamMemberController.deleteTeamMember);

module.exports = router;
