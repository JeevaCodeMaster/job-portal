const {addApplyingJob,userAppliedJob}= require("../controller/appliedJobController");
const express= require("express");
const appliedRoute =express.Router();



appliedRoute.get("/myapplication/:id",userAppliedJob)

appliedRoute.post("/add-application",addApplyingJob)

module.exports=appliedRoute;
