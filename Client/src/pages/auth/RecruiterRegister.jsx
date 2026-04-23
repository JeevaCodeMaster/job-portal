import React, {  useState } from "react";
import AuthAPI from "../../API/authApi";
import { useEffect } from "react";

function RecruiterRegister() {
  const [data, setData] = useState({
    name: "",
    companyName: "",
    email: "",
    password: "",
    phone: "",
    role: "recruiter",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submitData =async(e) => {
    e.preventDefault();

    try {
      const res = await AuthAPI.post("/recruiter/register", data);
      if (!res) {
          alert("Registration Failed !");
        }
        alert("registered");
    } catch (error) {}
  };

   useEffect(()=>{
      document.title="Recruiter Registration"
    })

  return (
    <div className="container p-4 mt-4">
      <div className="row  d-flex justify-content-evenly ">
        <form
          onSubmit={submitData}
          className="shadow-lg col-12 col-md-8 col-lg-5 bg-white rounded text-start  p-5"
          style={{ boxShadow: "0 10px 25px rgba(255, 255, 255, 0.35)" }}
        >
          <h3 className="text-center">Create New Opportuinty</h3>
          <hr />
          <label className="form-label fw-medium fs-5  mt-2">
            {" "}
            Name <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="text"
            placeholder="Recruiter Name"
            name="name"
            value={data.name}
            onChange={handleData}
            required
          ></input>
          <label className="form-label fw-medium fs-5  mt-2">
            {" "}
            Company Name <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={data.companyName}
            onChange={handleData}
            required
          ></input>
          <label className="form-label  fw-medium fs-5  mt-4">
            {" "}
            Company Email <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="email"
            name="email"
            value={data.email}
            onChange={handleData}
            placeholder="Enter your Email"
            required
          ></input>
          <label className="form-label fw-medium fs-5  mt-4">
            {" "}
            Mobile Number <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="number"
            required
            name="phone"
            value={data.phone}
            onChange={handleData}
            placeholder="Enter your Number"
          ></input>
          <label className="form-label fw-medium fs-5 mt-4 ">
            {" "}
            Password <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded p-3"
            type="password"
            name="password"
            value={data.password}
            onChange={handleData}
            placeholder="Enter your Password"
            required
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

export default RecruiterRegister;
