const {addUser,deleteUser,getUser,updateUser,getUsers}= require("../controller/userController");

const upload= require("../utils/Multer");
const express = require("express");

const userRoute= express.Router();

userRoute.get("/get-users",getUsers);
userRoute.get("/get-user/:id",getUser);
userRoute.post("/add-user",upload.fields([{name:"profileImage",maxCount:1},{name:"resume",maxCount:1}]),addUser);
userRoute.put("/update-user/:id",upload.fields([{name:"profileImage",maxCount:1},{name:"resume",maxCount:1}]),updateUser);
userRoute.delete("/delete-user/:id",deleteUser);

module.exports= userRoute;