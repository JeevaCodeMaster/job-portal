import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { JobApi } from "../../API/authApi";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function JobList() {
  const { islogged } = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(null);

  const getJob = async () => {
    try {
      const res = await JobApi.get("/get-jobs", { withCredentials: true });
      if (!res) {
        alert(` No Jobs found `);
      }
      setJobs(res.data.jobs);
    } catch (error) {
      alert(`error : ${error.message}`);
    }
  };
  getJob();
  useEffect(() => {
    if (!islogged) {
      navigate("/");
    }
    

  },[]);




  return (
   <div>
    <div><input type="text" className="form-control w-50 my-5 mx-auto p-3 rounded-pill" placeholder="Search job" /></div>
     <div className="container mx-auto  gap-2 d-flex flex-wrap my-5">
      {jobs?.map((job)=>{
        return(
          <JobCard jobs={job} />
        )
      }
        
      )}
      
    </div>
   </div>
  );
}

export default JobList;
