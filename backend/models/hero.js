const mongoose = require("mongoose");

//Schema for Hero
const heroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your hero's name"],
      trim: true,
      maxLength: [100, "Please your hero's name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a summary of Hero personality"],
      maxLength: [1000, "Please summary cannot exceed 1000 characters"],
    },
    profilePicture: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    gender: {
      type: String,
      required: [true, "Please select a gender type for your Hero"],
      enum: {
        values: ["Male", "Female", "Others"],
        message: "Please select a gender",
      },
    },
    country: {
      type: String,
      default: "Nigeria",
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

    appreciationsCount: {
      type: Number,
      default: 0,
    },
    appreciations: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Appreciation",
      },
    ],
    linkedinUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: false,
    },
    twitterUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: false,
    },
    instagramUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: false,
    },
    facebookUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

//remaining schemas
//ability create new url

module.exports = mongoose.model("Hero", heroSchema);
