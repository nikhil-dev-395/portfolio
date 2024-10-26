const mongoose = require("mongoose");
const frontendSkillSchema = new mongoose.Schema(
  {
    frontendSkillName: {
      type: String,
      required: true,
    },
    frontendSkillIcon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const frontendSkill = mongoose.model("FrontendSkills", frontendSkillSchema);
module.exports = frontendSkill;
