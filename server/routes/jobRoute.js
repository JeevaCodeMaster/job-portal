const {getJobs, getJobByCom,addJob,deleteJob,updateJob}=require("../controller/jobController");
const express= require("express");
const jobRoute=express.Router();


jobRoute.get("/get-jobs",getJobs);
jobRoute.get("/get-Com-job/:id",getJobByCom);
jobRoute.post("/add-job",addJob);
jobRoute.put("/update-job/:id",updateJob);

jobRoute.delete("/del-job/:id",deleteJob)

module.exports= jobRoute