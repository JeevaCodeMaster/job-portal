const {addCompany,deleteCom,getCompanies,getDetail,updateDetail} = require("../controller/companyController");
const {Protect}=require("../middleware/authMiddleware");
const express= require("express");
const upload = require("../utils/Multer");
const comPanyRouter=express.Router();



comPanyRouter.get("/get-company/:id",Protect,getDetail);
comPanyRouter.get("/get-companies",Protect,getCompanies);
comPanyRouter.post("/add-company",upload.single("logo"),addCompany);
comPanyRouter.put("/update-company/:id",Protect,updateDetail)
comPanyRouter.delete("/del-company/:id",Protect,deleteCom);



module.exports=comPanyRouter;

