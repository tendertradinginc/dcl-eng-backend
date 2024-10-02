const mongoose = require("mongoose");
const validator = require("validator");

const ClientSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    authorDesignation: {
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
    feedback: {
      type: String,
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

const ClientFeedback = mongoose.model("ClientFeedback", ClientSchema);
module.exports = ClientFeedback;
