const User = require("../model/User")
const mongoose= require("mongoose")

exports.addUser = async (req, res) => {
  const {
    email,
    qualification,
    gender,
    age,
    Dob,
    profileImage,
    resume,
    location,
    
  } = req.body;

  try {

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    
    if (findUser.profileImage || findUser.resume) {
      return res
        .status(400)
        .json({ msg: "User profile already updated" });
    }

  
    const updatedUser = await User.findByIdAndUpdate(
      findUser._id,
      {
        qualification,
        gender,
        age,
        Dob,
        profileImage,
        resume,
        location,
       
      },
      { new: true }
    );

    return res.status(200).json({
      msg: "User data updated successfully",
      
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    await User.findByIdAndDelete(id);

    return res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    return res.status(200).json({
      count: users.length,
      users,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


exports.getUser = async (req, res) => {
  try {


    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ msg: "Invalid User ID" });

    }


    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};




exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({
      msg: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


