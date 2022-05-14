const mongoose = require("mongoose");

//Schema for Hero
const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your hero's name"],
    trim: true,
    maxLength: [40, "Please your hero's name cannot exceed 40 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide a summary of Hero personality"],
    maxLength: [100, "Please summary cannot exceed 100 characters"],
  },
  profilePicture: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  gender: {
    type: String,
    required: [true, "Please select a gender type for your Hero"],
    enum: {
      values: ["Male", "Female", "Others"],
    },
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  numOfApprecations: {
    type: Number,
    default: 0,
  },
  appreciation: {
    type: mongoose.Schema.ObjectId,
    ref: "Appreciation",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hero", heroSchema);
