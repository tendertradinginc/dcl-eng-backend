const Message = require("../models/Message");

exports.createContactUsMsgsDb = async (details) => {
  const result = await Message.create(details);
  return result;
};

exports.getAllContactUsMsgsDb = async (page, limit) => {
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const result = await Message.find()
    .sort({ createdAt: -1 })
    .limit(parsedLimit)
    .skip((parsedPage - 1) * parsedLimit);

  const messagesCount = await Message.find();
  return { result, messagesCount: messagesCount.length };
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
