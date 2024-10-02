const express = require("express");
const router = express.Router();
const successStoryController = require("../../controllers/successStory.controller");

router.route("/create").post(successStoryController.createSuccessStory);

router.route("/").get(successStoryController.getAllSuccessStory);

router
  .route("/:id")
  .delete(successStoryController.deleteSuccessStory)
  .put(successStoryController.updateSuccessStory);

module.exports = router;
