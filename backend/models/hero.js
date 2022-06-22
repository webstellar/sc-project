const mongoose = require("mongoose");
const countries = require("../data/data");

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
      maxLength: [500, "Please summary cannot exceed 500 characters"],
    },
    profilePicture: {
      public_id: {
        type: String,
        //required: true,
      },
      url: {
        type: String,
        //required: true,
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
    gender: {
      type: String,
      enum: {
        values: ["Male", "Female", "Others"],
        message: "Please select a gender",
      },
    },
    country: {
      type: String,
      enum: {
        values: countries,
        message: "Please select a country",
      },
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
      unique: true,
    },
    twitterUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    instagramUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    facebookUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
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

/*


     */
