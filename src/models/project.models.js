const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectInfo: {
      type: String,
      required: true,
    },
    projectTechnologyIcons: [
      {
        type: String,
        required: true,
      },
    ],
    projectImg: {
      type: String,
      required: true,
    },

    projectGithubLink: {
      type: String,
      required: true,
    },
    projectLiveLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const project = mongoose.model("project", projectSchema);
module.exports = project;
