const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controller");
// user create
router.route("/createuser").post(userController.createUser);

router.route("/login").post(userController.getUserforlogin);

// get all user for dashboard
router.route("/dashboard_all_user").get(userController.getAllUser);
router
  .route("/:id")
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
