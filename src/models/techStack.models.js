const mongoose = require("mongoose");

const techStackSchema = new mongoose.Schema(
  {
    techName: {
      type: String,
      required: false,
    },
    techIcon: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const techStack = mongoose.model("TechStack", techStackSchema);
module.exports = techStack;
