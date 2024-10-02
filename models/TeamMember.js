const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    socialMedia: {
      facebook: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
      whatsapp: {
        type: String,
        default: "",
      },
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

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

module.exports = TeamMember;
