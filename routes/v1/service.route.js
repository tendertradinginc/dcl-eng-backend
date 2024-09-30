const express = require("express");
const router = express.Router();
const servicesController = require("../../controllers/service.controller");

router
  .route("/")
  .get(servicesController.getAllServices)
  .post(servicesController.createService);

router
  .route("/get-all-dashboard-edition")
  .get(servicesController.getAllServicesDashboard);

router.route("/toggle-featured").get(servicesController.toggleServiceFeatured);

router
  .route("/:id")
  .get(servicesController.getSingleService)
  .put(servicesController.updateSingleService)
  .delete(servicesController.deleteSingleService);

module.exports = router;