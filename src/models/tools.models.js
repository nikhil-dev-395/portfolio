const mongoose = require("mongoose");
const toolSchema = new mongoose.Schema(
  {
    toolName: {
      type: String,
      required: true,
    },
    toolIcon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const tools = mongoose.model("Tools", toolSchema);
module.exports = tools;
