const Applied = require("../model/appliedJob");
const Job = require("../model/Job");

exports.userAppliedJob = async (req, res) => {
  try {
    const jobs = await Applied.find({ applicant: req.params.id }).select(" job")
    if (jobs) {
        const appliedExists= await Job.findOne(jobs.job)
        console.log(appliedExists)
        return res.status(200).json({ appliedExists });
    }
    else{
        return res.status(400).json({ msg: "please apply for job" });
    }

  
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};




exports.addApplyingJob=async(req,res)=>{
    


    const{job,applicant,company,resume,status}= req.body;

    try{
const addJob = await Applied.create({job,applicant,company,resume,status})

if(addJob){
    return res.status(200).json({msg:"job Applied"})
}
return res.status(400).json({msg:"try again"})

    }catch(error){
return res.status(500).json({msg:error.message})
    }
}