const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    phone: {
      type: String,
    },

    website: {
      type: String,
    },

    location: {
      type: String,
    },

    industry: {
      type: String,
    },

    companySize: {
      type: String, // e.g. "1-10", "11-50", "50-200"
    },

    description: {
      type: String,
    },

    logo: {
      type: String, // image URL
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // recruiter / employer
      required: true,
    },

    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);
