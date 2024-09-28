const express = require("express");
const router = express.Router();
const clientController = require("../../controllers/client.controller");

router.route("/create").post(clientController.createClient);

router.route("/").get(clientController.getAllClient);

router
    .route("/:id")
    .delete(clientController.deleteClient)
    .put(clientController.updateClient);

module.exports = router;
