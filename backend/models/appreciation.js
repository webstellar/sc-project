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
      maxLength: [1000, "Please summary cannot exceed 1000 characters"],
    },
    hero: {
      type: mongoose.Types.ObjectId,
      ref: "Hero",
    },
    audio: [
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
    video: [
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
    tags: {
      type: String,
    },
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
