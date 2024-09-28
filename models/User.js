const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      maxLength: [100, "Name is too large"],
      default: "N/A",
    },

    email: {
      type: String,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid email address",
      },
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
