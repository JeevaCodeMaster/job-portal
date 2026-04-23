const Job = require("../model/Job");


exports.getJobs=async(req,res)=>{

    try{
        const jobs = await Job.find();
        if(!jobs){
            return res.status(404).json({msg:"No jobs"});
        }
        return res.status(200).json({jobs});
    }
    catch(error){

        return res.status(500).json({msg:error.message})

    }

}

exports.addJob=async(req,res)=>{


    const {jobTitle,description,companyName,skills,jobType,experience,salary,location,jobLevel,companyLogo,status,createdBy} =req.body;
    try{
        
        const exists= await Job.findOne({jobTitle,createdBy,location})
        if(!exists){
            const createJob = await Job.create({jobTitle,companyName,description,skills,jobType,experience,companyLogo,salary,location,jobLevel,status,createdBy})
            return res.status(200).json({msg:"job added"});
        }
        return res.status(400).json({msg:"job alredy created "})

    }catch(error){

        return res.status(500).json({msg:error.message});
    }
}

exports.deleteJob=async(req,res)=>{
    try{
        const deleted = await Job.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({msg:"Job not found"});
        }
        return res.status(200).json({msg:"deleted successfully"})
    }catch(error){
        return res.status(500).json({msg:error.message})
    }

}

exports.getJobByCom =async(req,res)=>{
    try {
        const jobs= await Job.findOne({createdBy:req.params.id})
        if(!jobs){
            return res.status(404).json({msg:"job are not posted"})
        }
        return res.status(200).json({jobs})
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }

}



exports.updateJob= async(req,res)=>{
    try{

        const updatedJob= await Job.findByIdAndUpdate(req.params.id,{$set:req.body})

        if(!updatedJob){
            return res.status(404).json({msg:"Not able to updated try again!"})
        }
        return res.status(200).json({msg:"updated Successfully"})

    }catch(error){
                return res.status(500).json({msg:error.message})

    }
}