const mongoose = require("mongoose");
const validator = require("validator");

const SuccessStorySchema = mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientDesignation: {
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
    companyName: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    handoverDate: {
      type: Date,
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

const SuccessStory = mongoose.model("SuccessStory", SuccessStorySchema);
module.exports = SuccessStory;
