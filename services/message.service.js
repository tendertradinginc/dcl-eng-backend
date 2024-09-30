const Message = require("../models/Message");

exports.createContactUsMsgsDb = async (details) => {
  const result = await Message.create(details);
  return result;
};

exports.getAllContactUsMsgsDb = async (page, limit, search) => {
  const searchTerm =
    typeof search === "undefined" || search === null ? "" : search;

  const regexSearch = new RegExp(searchTerm, "i");
  let query = {};
  if (searchTerm) {
    query.$or = [
      { name: { $regex: regexSearch } },
      { message: { $regex: regexSearch } },
      { email: { $regex: regexSearch } },
      { phone: { $regex: regexSearch } },
    ];
  }

  const result = await Message.find(query)
    .sort({ fullName: "asc" })
    .limit(parseInt(limit))
    .skip((parseInt(page) - 1) * parseInt(limit));
  const total = await Message.countDocuments(query);
  return { result, total };
};
exports.deleteSingleContactUsMsgsDb = async (id) => {
  const result = await Message.deleteOne({ _id: id });
  return result;
};
exports.updateMsgStatusinDb = async (id) => {
  const result = await Message.updateOne(
    { _id: id },
    { $set: { status: true } }
  );
  return result;
};
