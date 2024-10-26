const mongoose = require("mongoose");
const toolSchema = new mongoose.Schema(
  {
    toolName: {
      type: String,
      required: false,
    },
    toolIcon: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const tools = mongoose.model("Tools", toolSchema);
module.exports = tools;
