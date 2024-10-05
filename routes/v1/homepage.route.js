const express = require("express");
const router = express.Router();
const homepageController = require("../../controllers/homepage.controller");

router.route("/summary").get(homepageController.getAllSummary);
router.route("/banner").get(homepageController.getAllBanner);

module.exports = router;
