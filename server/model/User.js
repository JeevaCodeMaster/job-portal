const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    
    unique: true,
    lowercase: true,
  },
  password: { type: String },

  role: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  qualification:{
    type:String,
  },
  age:{
    type:Number,
    min:18,
    max:60
  },
  gender:{
    type:String,
      enum: ["male", "female", "other"],
  },
  location:{city: String,
      state: String,
      country: String},
  Dob:{
    type:Date
  },
  googleId: {
    type: String,
  },
 
  companyName:{
    type:String,
  }
  
  ,profileImage:{
    type:String
  },
  resume:{
    type:String
  }
});

module.exports = mongoose.model("User", userSchema);
