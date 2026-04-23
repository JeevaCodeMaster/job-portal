const {login,register,recruitregister,logout, googleLogin, googleCallback} = require("../controller/authController");
const express =require("express");
const {Protect}= require("../middleware/authMiddleware");
const router= express.Router();

router.post("/register",register);
router.post("/recruiter/register",recruitregister);
router.post("/login",login);
router.post("/logout",logout);


router.get("/google-login",googleLogin);
router.post("/google/callback",googleCallback);

router.get("/me",Protect,(req,res)=>{
    
res.status(200).json({authenticated:true,user:req.user})
});

module.exports =router;

