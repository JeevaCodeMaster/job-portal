import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobApi } from "../../API/authApi";
import {useAuth}from "../auth/AuthContext"
function PostJob() {
  const navigate = useNavigate();
  const {user,company}=useAuth();
  
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    location: "",
    salary: "",
    jobLevel:"",
    experience: "",
    skills: "",
    description: "",
    status: "",
    createdBy:company._id,
    companyLogo:company.logo
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

 if (name === "skills" ) {
    setFormData({
      ...formData,
      skills: value
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "")
    });
  } else {
    setFormData({
      ...formData,
      [name]: value
    });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await JobApi.post("/add-job", formData, {
        withCredentials: true,
      });

      alert("Job posted successfully ✅");
      navigate("/recruiter/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to post job ❌");
    }
  };


  useEffect(()=>{
    if (!user) navigate("/")
      document.title="Post Job"
  })

  return (
    <div className="container my-5 ">
      <div className="card col-12 col-md-9 col-lg-6 shadow p-4  mx-auto">
        <h3 className="mb-4">Post New Job</h3>

        <form onSubmit={handleSubmit} className=" text text-start w-100">
          {/* Job Title */}
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              className="form-control p-3"
              name="jobTitle"
              required
              onChange={handleChange}
            />
          </div>

          {/* Job Type */}
          <div className="mb-3">
            <label className="form-label">Job Type</label>
            <select
              className="form-select"
              name="jobType"
              required
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          

          {/* Location */}
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control p-3"
              name="location"
              required
              onChange={handleChange}
            />
          </div>

          {/* Salary */}
          <div className="mb-3">
            <label className="form-label">Salary Range</label>
            <input
              type="number"
              className="form-control p-3"
              name="salary"
              placeholder="₹4–6 LPA / $50k–70k"
              onChange={handleChange}
            />
          </div>

          {/* Experience */}
          <div className="mb-3">
            <label className="form-label">Experience</label>
            <input
            type="number"
              className="form-control p-3"
              name="experience"
              onChange={handleChange}
              
            />
              
          </div>

          <div className="mb-3">
            <label className="form-label">Job Level</label>
            <select
              className="form-select"
              name="jobLevel"
              required
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option>Fresher</option>
              <option>Junior</option>
              <option>Mid</option>
              <option>Senior</option>
            </select>
          </div>

          {/* Skills */}
          <div className="mb-3">
            <label className="form-label">Skills</label>
            <input
              type=""
              className="form-control p-3"
              name="skills"
              placeholder="React, Node, MongoDB"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Job Description</label>
            <textarea
              className="form-control"
              rows="5"
              name="description"
              required
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="form-label">Job Status</label>
            <select
              className="form-select"
              name="status"
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button type="submit" className="btn btn-primary">
              Post Job
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
