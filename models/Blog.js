const mongoose = require("mongoose");
const validator = require("validator");

const BlogSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      image: {
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
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        default: "N/A",
      },
    },
    {
      timestamps: true,
    }
  );

  const Blog = mongoose.model("Blog", BlogSchema);
  module.exports = Blog;