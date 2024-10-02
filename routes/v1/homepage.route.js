const express = require("express");
const router = express.Router();
const homepageController = require("../../controllers/homepage.controller");
// user create
router.route("/summary").get(homepageController.createUser);

module.exports = router;
