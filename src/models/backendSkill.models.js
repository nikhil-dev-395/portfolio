const mongoose = require("mongoose");
const backendSkillSchema = new mongoose.Schema(
  {
    backendSkillName: {
      type: String,
      required: true,
    },
    backendSkillIcon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const backendSkill = mongoose.model("BackendSkills", backendSkillSchema);
module.exports = backendSkill;
