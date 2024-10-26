const mongoose = require("mongoose");

const frontendSkillSchema = new mongoose.Schema(
  {
    frontendSkillName: {
      type: String,
      required: true,
      index: true,
    },
    frontendSkillIcon: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const frontendSkill = mongoose.model("FrontendSkills", frontendSkillSchema);
module.exports = frontendSkill;
