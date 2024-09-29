const express = require("express");
const router = express.Router();
const clientFeedbackController = require("../../controllers/clientFeedback.controller");

router.route("/create").post(clientFeedbackController.createClientFeedback);

router.route("/").get(clientFeedbackController.getAllClientFeedback);

router
    .route("/:id")
    .delete(clientFeedbackController.deleteClientFeedback)
    .put(clientFeedbackController.updateClientFeedback);

module.exports = router;
