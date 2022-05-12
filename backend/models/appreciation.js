const mongoose = require("mongoose");

const appreciationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    trim: true,
    maxLength: [65, "Please title cannot exceed 65 characters"],
  },
  message: {
      type: String,
      required: [true, "Please write your appreciation"],
      trim: true,
      maxLength: [1000, "At the moment messages"]
  }
});

module.exports = mongoose.model("Appreciation", appreciationSchema);
