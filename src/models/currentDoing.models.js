const mongoose = require("mongoose");
const whatAreDoingNowSchema = new mongoose.Schema(
  {
    whatAreDoingNow: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const whatAreDoingNow = mongoose.model("WhatAreDoingNow", whatAreDoingNowSchema);
module.exports = whatAreDoingNow;
