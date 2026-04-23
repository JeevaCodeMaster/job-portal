import React, { useState } from "react";
import AuthAPI from "../../API/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate()

  const [data,setData] = useState({
name:"",
password:"",
phone:"",
email:"",
role:"seeker"
  })


  const handleData=(e)=>{
    const{name,value}=e.target;
    setData({...data,[name]:value});
  }

  const submitData=(e)=>{
    e.preventDefault();
    try {
      const res = AuthAPI.post("/register",data);
      if(res){
        alert("Registered Successfully !")
        console.log(res.data.msg);
        navigate("/login")
      }
      else{
        alert("Registration Failed !")

      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    document.title="Register"
  })

  return (
    <div className="container p-4 mt-4">
      <div className="row  d-flex justify-content-evenly  ">
        <div className=" d-none d-lg-block col-lg-7 col-lg-7 bg-white rounded"><img className="w-100 h-100" src="registrationImage.png" alt="" /></div>
        <form onSubmit={submitData}
          className="shadow-lg col-12 col-md-8 col-lg-5 bg-white rounded text-start  p-5"
          style={{ boxShadow: "0 10px 25px rgba(255, 255, 255, 0.35)" }}
        >
          <h3 className="text-center">Create Your Profile</h3>
          <label className="form-label fw-medium fs-5  mt-2">
            {" "}
            Name <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="text"
            name="name"
            value={data.name}
            onChange={handleData}
            required
            placeholder="Full Name"
          ></input>
          <label className="form-label  fw-medium fs-5  mt-4">
            {" "}
            Email <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="email"
            required
            onChange={handleData}
            name="email"
            value={data.email}
            placeholder="Email ID"
          ></input>
          <label className="form-label fw-medium fs-5  mt-4">
            {" "}
            Phone <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="number"
            required
            onChange={handleData}
            name="phone"
            value={data.phone}
            placeholder="Enter your Mobile "
          ></input>
          <label className="form-label fw-medium fs-5 mt-4 ">
            {" "}
            Password <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="password"
            required
            onChange={handleData}
            name="password"
            value={data.password}
            placeholder="(Minimum 8 Characters)"
          ></input>
          <button
            type="submit"
            className="btn btn-primary fw-bold mt-4 fs-5 px-4 py-2"
          >
            Create now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
