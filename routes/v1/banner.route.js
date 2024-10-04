const express = require("express");
const router = express.Router();
const bannerController = require("../../controllers/banner.controller");

router
  .route("/")
  .get(bannerController.getAllBanner)
  .post(bannerController.createBanner);

router
  .route("/:bannerId")
  .get(bannerController.getSingleBanner)
  .delete(bannerController.DeleteSingleBanner)
  .put(bannerController.updateSingleBanner);

module.exports = router;
