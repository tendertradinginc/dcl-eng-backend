const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controller");
// user create
router.route("/createuser").post(userController.createUser);
// http://localhost:5000/api/v1/users/createuser
//body:
// {
//     "fullName":"admin",
// "email":"admin@admin.com",
// "password":"123456"
// }
router.route("/login").post(userController.getUserforlogin);
// http://localhost:5000/api/v1/users/login

//body:
// {
//     "email":"admin@admin.com",
//     "password":"123456"
//     }

module.exports = router;
