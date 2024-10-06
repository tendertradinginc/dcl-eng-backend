const mongoose = require("mongoose");
const validator = require("validator");

const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    shortDescription: {
      type: String,
    },

    img: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https"],
            require_tld: true,
            require_protocol: true,
          }),

        message: "Invalid image URL",
      },
      required: true,
    },

    featuredStatus: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
