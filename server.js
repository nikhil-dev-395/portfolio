const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

// files
const { webRouter } = require("./src/routes/web.routes.js");
const connectDB = require("./src/db/connect.db.js");
const userInfo = require("./src/models/userInfo.models.js");
const whatAreDoingNow = require("./src/models/currentDoing.models.js");
const tools = require("./src/models/tools.models.js");
const backendSkill = require("./src/models/backendSkill.models.js");
const frontendSkill = require("./src/models/frontendSkills.models.js");
const project = require("./src/models/project.models.js");
const port = process.env.PORT || 4909;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", webRouter);

/* i write this rest api code because i want to clean code & simple code*/

app.post("/userInfo", async (req, res) => {
  try {
    const {
      userName,
      userLogoIcon,
      userTwitterLink,
      userLinkedinLink,
      userGithubLink,
      userEmail,
    } = req.body;

    const createUserInfo = await userInfo.create({
      userName,
      userLogoIcon,
      userTwitterLink,
      userLinkedinLink,
      userGithubLink,
      userEmail,
    });
    const user = await res.json({ createUserInfo });
    return user.save();
  } catch (error) {
    console.log(error);
  }
});

app.post("/tools", async (req, res) => {
  try {
    const skillData = req.body;

    // Validate that skillData is an array and not empty
    if (!Array.isArray(skillData) || skillData.length === 0) {
      return res
        .status(400)
        .json({ message: "Invalid input, expected an array of tools." });
    }

    // Use insertMany to create multiple tools at once
    const createTools = await tools.insertMany(skillData);

    // Return the created tools with a success response
    return res.status(201).json({ createTools });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Internal server error." }); // Return a 500 error
  }
});

// Route to insert multiple frontend skills
app.post("/frontendSkills", async (req, res) => {
  try {
    // Get the skills from the request body
    const skillsData = req.body;

    // Validate that the input is an array
    if (!Array.isArray(skillsData) || skillsData.length === 0) {
      return res
        .status(400)
        .json({ message: "Invalid input, expected an array of skills." });
    }

    // Use insertMany to create multiple skills at once
    const createSkills = await frontendSkill.insertMany(skillsData);

    // Return the created skills
    return res.status(201).json({ createSkills });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/backendSkills", async (req, res) => {
  try {
    // Get the skill data from the request body
    const skillData = req.body;

    // Validate that the input is an array
    if (!Array.isArray(skillData) || skillData.length === 0) {
      return res
        .status(400)
        .json({ message: "Invalid input, expected an array of skills." });
    }

    // Use insertMany to create multiple skills at once
    const createSkills = await backendSkill.insertMany(skillData);

    // Return the created skills
    return res.status(201).json({ createSkills });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route to create current activity

app.post("/whatAreDoingNow", async (req, res) => {
  try {
    const { whatAreDoingNowDays } = req.body;

    if (!whatAreDoingNow) {
      return res.status(400).json({ message: "whatAreDoingNow is required." });
    }

    const createDo = await whatAreDoingNow.create({ whatAreDoingNowDays });
    return res.status(201).json({ createDo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// route for showing project info

// Create a new project
app.post("/projects", async (req, res) => {
  try {
    const {
      projectName,
      projectInfo,
      projectTechnologyIcons,
      projectImg,
      projectGithubLink,
      projectLiveLink,
    } = req.body;

    const newProject = new project({
      projectName,
      projectInfo,
      projectTechnologyIcons,
      projectImg,
      projectGithubLink,
      projectLiveLink,
    });

    const savedProject = await newProject.save();
    return res.status(201).json({ savedProject });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.get("/userInfo", async (req, res) => {
  try {
    // const { userEmail } = req.body;

    const showUserInfo = await userInfo.find();
    return res.json({ showUserInfo });
  } catch (error) {
    console.log(error);
  }
});

app.get("/tools", async (req, res) => {
  try {
    // Use insertMany to create multiple tools at once
    const createTools = await tools.find({});

    // Return the created tools with a success response
    return res.status(201).json({ createTools });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Internal server error." }); // Return a 500 error
  }
});

// Route to insert multiple frontend skills
app.get("/frontendSkills", async (req, res) => {
  try {
    // Use insertMany to create multiple skills at once
    const findFrontendSkills = await frontendSkill.find();
    // Return the created skills
    return res.status(201).json({ findFrontendSkills });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.get("/backendSkills", async (req, res) => {
  try {
    // Use insertMany to create multiple skills at once
    const showSkills = await backendSkill.find();

    // Return the created skills
    return res.status(201).json({ showSkills });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route to create current activity

app.get("/whatAreDoingNow", async (req, res) => {
  try {
    const findDo = await whatAreDoingNow.find({});
    return res.status(201).json({ findDo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// route for showing project info

// Create a new project
app.get("/projects", async (req, res) => {
  try {
    const savedProject = await project.find();
    return res.status(201).json({ savedProject });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

(async () => {
  await connectDB();
  await app.listen(port, () => {
    console.log("server is listening on port " + port);
  });
})();
