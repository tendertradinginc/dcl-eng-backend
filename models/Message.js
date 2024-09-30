const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
