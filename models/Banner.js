const mongoose = require("mongoose");
const validator = require("validator");

const BannerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    colorWord: {
      type: String,
      default: "",
    },
    lastTitle: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    backgroundImage: {
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
    buttonText: {
      type: String,
      default: "View Details",
    },
    buttonLink: {
      type: String,
      default: "/services",
    },
    location: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", BannerSchema);
module.exports = Banner;
