const mongoose = require("mongoose");

//Schema for appreciation
const appreciationSchema = new mongoose.Schema(
  {
    summary: {
      type: String,
      required: [true, "Please provide a summary of your appreciation"],
      trim: true,
      maxLength: [150, "Please sumary cannot exceed 65 characters"],
    },
    story: {
      type: String,
      required: [true, "Please write your appreciation"],
      maxLength: [3000, "Please summary cannot exceed 3000 characters"],
    },
    hero: {
      type: mongoose.Types.ObjectId,
      ref: "Hero",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    audio: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    video: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    tags: [
      {
        type: String,
      },
    ],
    likeCount: {
      type: Number,
      default: 0,
    },
    yearOfAppreciation: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appreciation", appreciationSchema);
