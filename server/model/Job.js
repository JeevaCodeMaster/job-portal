const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      required: true,
    },

    jobType: {
      type: String,
      enum: [
        "Full-Time",
        "Part-Time",
        "Internship",
        "Contract",
        "Remote",
      ],
      required: true,
    },

    experience: {
      type: Number, // years
      min: 0,
      max: 30,
    },

    salary: {
      
        type: Number,
        
    },

    location: {
      type: String,
      
    },
companyName:{
  type:String
},
    jobLevel: {
      type: String,
      enum: ["Fresher", "Junior", "Mid", "Senior"],
    },

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },
companyLogo:{
  type:String,
},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
