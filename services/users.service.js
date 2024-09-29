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

exports.getAllUserFromDb = async (page, limit, search) => {
  const searchTerm = search === "undefined" ? "" : search;
  const regexSearch = new RegExp(searchTerm, "i");
  let query = {};

  if (search) {
    query.$or = [
      { role: { $regex: regexSearch } },
      { fullName: { $regex: regexSearch } },
      { email: { $regex: regexSearch } },
    ];
  }

  const result = await User.find(query)
    .sort({ fullName: "asc" })
    .limit(parseInt(limit))
    .skip((parseInt(page) - 1) * parseInt(limit));
  const total = await User.countDocuments();
  return { result, total };
};
