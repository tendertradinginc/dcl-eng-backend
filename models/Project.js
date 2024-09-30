const mongoose = require("mongoose");
const validator = require("validator");

const ProjectSchema = mongoose.Schema(
  {
    name: {
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
    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default:false
    },
    location: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
