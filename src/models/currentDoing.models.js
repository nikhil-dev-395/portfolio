const mongoose = require("mongoose");
const whatAreDoingNowSchema = new mongoose.Schema(
  {
    whatAreDoingNowDays: {
      type: String,
      required: false,
    },

  },
  { timestamps: true }
);

const whatAreDoingNow = mongoose.model("WhatAreDoingNow", whatAreDoingNowSchema);
module.exports = whatAreDoingNow;
