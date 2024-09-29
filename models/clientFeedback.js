const mongoose = require("mongoose");
const validator = require("validator");

const clientSchema = mongoose.Schema(
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

const ClientFeedback = mongoose.model("ClientFeedback", clientSchema);
module.exports = ClientFeedback;
