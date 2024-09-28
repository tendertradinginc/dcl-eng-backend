const User = require("../models/User");

exports.register = async (details) => {
  const result = await User.create(details);
  return result;
};

// get single user for login
exports.getUserInDB = async (email, password) => {
  const result = await User.findOne({
    email: email,
    password: password,
  });

  if (!result) {
    throw new Error("No user found, please create an account");
  }

  return result;
};
