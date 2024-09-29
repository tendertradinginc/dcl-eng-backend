const express = require("express");
const router = express.Router();
const projectController = require("../../controllers/projects.controller");

router.route("/").get(projectController.getAllProjects)
router.route("/create-project").post(projectController.createProject);
// http://localhost:5000/api/v1/Projects/create-Project


router
  .route("/:id")
  .get(projectController.getSingleProject)
  .delete(projectController.DeleteSingleProject)
  // .put(projectController.updateSingleProject);

module.exports = router;