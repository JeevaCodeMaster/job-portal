import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import AuthAPI from "../../API/authApi";

function UserProfile() {
  const { user } = useAuth();

  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    gender: "",
    age: "",
    skills: [],
    location: {
      city: "",
      state: "",
      country: "",
    },
  });

  // Load user data
  useEffect(() => {
    if (user) {
    //   setFormData({
    //     name: user.name || "",
    //     email: user.email || "",
    //     phone: user.phone || "",
    //     qualification: user.qualification || "",
    //     gender: user.gender || "",
    //     age: user.age || "",
    //     skills: user.skills || [],
    //     location: user.location || {
    //       city: "",
    //       state: "",
    //       country: "",
    //     },
    //   });
    }
  }, [user]);

  // Handle normal input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle skills
  const handleSkills = (e) => {
    setFormData({
      ...formData,
      skills: e.target.value.split(",").map((s) => s.trim()),
    });
  };

  // Handle location
  const handleLocation = (e) => {
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Update profile
  const handleUpdate = async () => {
    try {
      await AuthAPI.put("/update-profile", formData, {
        withCredentials: true,
      });
      alert("Profile updated successfully");
      setEdit(false);
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <div className="container my-5">
        
      <div className="card shadow p-4">
        <h3 className="mb-4">User Profile</h3>
<div className="mt-4 text-end">
          {!edit ? (
            <button className="btn btn-primary" onClick={() => setEdit(true)}>
              Edit Profile
            </button>
          ) : (
            <>
              <button
                className="btn btn-success me-2"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        {/* Basic Info */}
        <div className="row g-3">
          <div className="col-md-6">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              disabled={!edit}
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input
              className="form-control"
              disabled
              value={formData.email}
            />
          </div>

          <div className="col-md-6">
            <label>Phone</label>
            <input
              className="form-control"
              name="phone"
              disabled={!edit}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Qualification</label>
            <input
              className="form-control"
              name="qualification"
              disabled={!edit}
              value={formData.qualification}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label>Gender</label>
            <select
              className="form-control"
              name="gender"
              disabled={!edit}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-md-4">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              disabled={!edit}
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          {/* Skills */}
          <div className="col-md-12">
            <label>Skills (comma separated)</label>
            <input
              className="form-control"
              disabled={!edit}
              value={formData.skills.join(", ")}
              onChange={handleSkills}
            />
          </div>

          {/* Location */}
          <div className="col-md-4">
            <label>City</label>
            <input
              className="form-control"
              name="city"
              disabled={!edit}
              value={formData.location.city}
              onChange={handleLocation}
            />
          </div>

          <div className="col-md-4">
            <label>State</label>
            <input
              className="form-control"
              name="state"
              disabled={!edit}
              value={formData.location.state}
              onChange={handleLocation}
            />
          </div>

          <div className="col-md-4">
            <label>Country</label>
            <input
              className="form-control"
              name="country"
              disabled={!edit}
              value={formData.location.country}
              onChange={handleLocation}
            />
          </div>
        </div>

        {/* Buttons */}
        
      </div>
    </div>
  );
}

export default UserProfile;
