import React from "react";
import { useAuth } from "../auth/AuthContext";

function Index() {

  const {islogged} =useAuth()
  if(islogged==false){
  return (
    <div className="row mx-auto ">
      <h1 className=" text-white  mb-3 d-flex w-75 justify-content-center mx-auto h1" style={{ marginTop: "30px" , fontWeight: "bold" }}>
        Welcome to JobShore
      </h1>
      <div className="row mx-auto ">
        <div  className="container  mb-3   text-white mt-5 rounded d-none d-xl-block d-xxl-block  col-md-8 col-xl-5 col-xxl-6" style={{   textAlign: "center" }}>
      <h3 className=" text-start mt-1 h3 "> Start your career journey with JobShore today!</h3>
      <p  className=" mt-3 shadow  p-5 border-white border-start text-start rounded text">
        JobShore is your trusted job portal to explore thousands of job
        opportunities across IT, Software, Finance, Marketing, and more.
      </p>

      <p className="text mt-3 shadow p-5 border-white border-end text-start rounded">
        Whether you are a fresher looking for your first job or an experienced
        professional aiming for career growth, JobShore connects you with top
        companies and recruiters.
      </p>

      
    </div>


    <div className=" col-12  col-xl-6 col-xxl-6 d-flex  justify-content-center align-items-center mx-auto position-relative rounded mb-5">
      <img src="indexjob.png" alt=""  className="w-100 rounded-5 h-100 "/>
      <div className="d-flex position-absolute gap-4 bottom-0 py-5">
        <button className="btn btn-info  py-2 px-4 fw-bold fs-5" ><a className="text-white" href="/login">Login</a></button>
      <button className="btn btn-info text-white py-2 px-4 fw-bold fs-5"><a className="text-white" href="/login">Sign up</a></button>
      </div>
    </div>


      </div>
      <div className="row mx-auto mt-4 mb-3">
        <div className="col-12 col-md-10 col-xl-8 col-xxl-9 mx-auto bg-white  mb-4 rounded p-5 shadow">
          <h2 className="mb-3 text-center h2">About Us</h2>
          <p className="text"   >
            JobShore is a modern job portal designed to bridge the gap between
            talented job seekers and trusted employers. Our mission is to make
            job searching simple, transparent, and accessible for everyone.
          </p>
          <p className="text" >
            We focus on providing verified job listings, role-based access for
            job seekers and recruiters, and a secure platform that helps users
            grow professionally with confidence.
          </p>
        </div>
      </div>
      <div className="mt-3 mx-auto  text-white"><h3 className="h3">Why Choose JobShore?</h3><hr />
        <ul className="text text-center  " style={{ listStyle: "none",lineHeight:"50px"}}>
          <li >✔ Verified job listings</li>
          <li>✔ Easy job search and application</li>
          <li>✔ Direct connection with recruiters</li>
          <li>✔ Career guidance and job alerts</li>
        </ul><div >
        
      </div>

      </div>
    </div>
  );}
}

export default Index;
