const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter first name"],
        },

        lastName: {
            type: String,
            required: [true, "Please enter last name"],
        },

        email: {
            type: String,
            required: [true, "Please enter email address"],
        },

        password: {
            type: String,
            required: true,
        },

        isAdmin: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    {
        timestamps: true,
    }
);


const User = mongoose.model("User", UserSchema);

module.exports = User;