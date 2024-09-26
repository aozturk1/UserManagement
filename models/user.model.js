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
      required: true,
      default: 0,
    },

    password: {
      type: String,
      required: true,
      default: 0,
    },

    isAdmin: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", UserSchema);

module.exports = User;