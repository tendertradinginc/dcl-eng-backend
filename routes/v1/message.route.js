const express = require("express");
const contactUsController = require("../../controllers/message.controller");
const router = express.Router();

router
  .route("/")
  //   http://localhost:5000/api/v1/contactus
  .post(contactUsController.postContactUsMsg)
  //   http://localhost:5000/api/v1/contactus
  .get(contactUsController.getAllContactUsMsg);

router
  .route("/:id")
  .patch(contactUsController.updateMsgStatus)
  //   http://localhost:5000/api/v1/contactus?66694212733e7c138a2a6f54
  .delete(contactUsController.deleteContactUsMsg);

module.exports = router;
