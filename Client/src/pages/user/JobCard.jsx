import React, { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function JobCard({jobs}) {

  const {islogged}=useAuth()
const navigate= useNavigate()

  useEffect(()=>{
if(!islogged){
  navigate("/")
}
  },[jobs])
console.log(jobs)
  return (
    <div className="card col-11 col-md-5  col-lg-5 mx-auto   p-3 container rounded-5 " >
      <div className="card-body row d-flex flex-column p-2 text-start gap-3 ">
        <div className=" col-lg-12 d-flex gap-5 justify-content-between">
          <div className=" d-flex flex-column  justify-content-center align-items-start ">
            <h5 className="card-title h3 text-start">{jobs.jobTitle}</h5>
            <p className="card-text text  ps-0">
              {jobs.companyName}
            </p>
          </div>
          <img
            style={{ width: "5rem" }}
            src={`http://localhost:1080/uploads/company-logos/${jobs.companyLogo}`}
            className=" card-img-top rounded h-auto "
            alt={jobs.companyLogo}
          />
        </div>

        <div className="h-25 ">
          <p className="text">Experience {jobs.experience} years | Location {jobs.location}</p>
          <p>{jobs?.jobType}</p>
          <p className="card-text d-flex   overflow-x-hidden text-sm ">
            {jobs.description}
          </p>
          {jobs?.skills?.map((skill ,index)=>{
            return (
              <ul key={index} className="d-flex gap-5 flex-row text-sm">
            
            <li>{skill}</li>
            
          </ul>
            )
          })}
          
          <p className="text-sm"> {jobs.createdAt.split("T")[0]}
            {}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
