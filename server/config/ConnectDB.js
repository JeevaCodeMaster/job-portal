const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to DB");
  } catch (err) {
    throw new Error("Check your connection !");
    process.exit(1);
  }
};

module.exports = ConnectDB;
