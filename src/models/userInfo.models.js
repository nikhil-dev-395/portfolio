const mongoose = require("mongoose");
const userInfoSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userLogoIcon: {
      type: String,
      required: false,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userGithubLink: {
      type: String,
      required: true,
    },
    userLinkedinLink: {
      type: String,
      required: true,
    },

    userTwitterLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userInfo = mongoose.model("userInfo", userInfoSchema);
module.exports = userInfo;
