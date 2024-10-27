const express = require("express");
const router = express.Router();
const WhatAreDoingNow = require("../models/currentDoing.models.js");
const UserInfo = require("../models/userInfo.models.js");
const frontendSkill = require("../models/frontendSkills.models.js");
const backendSkill = require("../models/backendSkill.models.js");
const tools = require("../models/tools.models.js");
const project = require("../models/project.models.js");
const techStack = require("../models/techStack.models.js");
router.get("/", async (req, res) => {
  try {
    // Fetch `whatAreDoingNowDays` field
    const activity = await WhatAreDoingNow.findOne({}, "whatAreDoingNowDays");

    const skills = await frontendSkill.find(
      {},
      "frontendSkillName frontendSkillIcon"
    );

    const backend = await backendSkill.find(
      {},
      "backendSkillIcon backendSkillName"
    );

    const tool = await tools.find({}, "toolIcon toolName");

    // Fetch all required user information in one query
    const user = await UserInfo.findOne(
      {},
      "userEmail userGithubLink userLinkedinLink userTwitterLink userName"
    );

    const myProject = await project.find(
      {},
      "projectLiveLink projectGithubLink projectImg projectTechnologyIcons projectInfo projectName"
    );

    const myTechStack = await techStack.find({}, "techIcon techName");

    // Render the index view with the fetched data
    res.render("index", {
      whatAreDoingNowDays: activity.whatAreDoingNowDays,
      myEmail: user.userEmail,
      myName: user.userName,
      myGithubLink: user.userGithubLink,
      myLinkedinLink: user.userLinkedinLink,
      myTwitterLink: user.userTwitterLink,
      skills,
      backend,
      tool,
      myProject,
      myTechStack,
    });
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { webRouter: router };
