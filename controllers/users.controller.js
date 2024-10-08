const User = require("../models/User");
const {
  register,
  getUserInDB,
  getAllUserFromDb,
  updateUserfromDb,
  deleteUserfromDb,
} = require("../services/users.service");
const { generateToken } = require("../utils/token");

// create user
exports.createUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (user?.email === email) throw new Error("User already exists");
    const newUser = await register(req.body);
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// for login system
exports.getUserforlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "please provide your credentials",
      });
    }
    const result = await getUserInDB(email, password);

    if (!result) {
      return res.status(401).json({
        status: "fail",
        error: "No user found, please create an account",
      });
    }
    const token = generateToken(result);
    const { password: pwd, ...findUser } = result.toObject();

    res
      .cookie("accessToken", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true, data: token });
  } catch (error) {
    res.status(500).json({
      status: "fail",

      message: error.message,
    });
  }
};

// get all user for dashbaord
exports.getAllUser = async (req, res) => {
  try {
    const { page, limit, search } = req.query;
    const result = await getAllUserFromDb(page, limit, search);
    res.status(200).json({
      status: "success",
      message: "Successfully get ",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  find ",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateUserfromDb(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully Updated ",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't find",
      error: error.message,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteUserfromDb(id);
    res.status(200).json({
      status: "success",
      message: "Successfully Updated ",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't find",
      error: error.message,
    });
  }
};
