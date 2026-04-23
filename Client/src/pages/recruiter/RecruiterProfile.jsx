import React, { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { RecruitApi } from "../../API/authApi";

function RecruiterProfile() {
    const { user,loading, company,islogged} = useAuth();
  // const [updateCom ,setUpdateCom]=useState();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!user || !islogged) {
      navigate("/");
      return;
    }

    document.title="Profile"
  }, [navigate, user]);

 


    if (loading) return <h2>Loading profile...</h2>;

return(
  <div className="container  rounded border mt-5 p-4">
      <h2 className="mb-4">Recruiter Profile</h2>

      {company ? (
        <>
          <p><strong className="text-white">Company:</strong> {company.companyName}</p>
          <p><strong className="text-white">Email:</strong> {company.email}</p>
          <p><strong className="text-white">Industry:</strong> {company.industry}</p>
          <p><strong className="text-white">Phone:</strong> {company.phone}</p>
          <p><strong className="text-white">Location:</strong> {company.location}</p>
          <p><strong className="text-white">Website:</strong> {company.website}</p>
        </>
      ) : (
        <p>No company details found</p>
      )}
    </div>
  );
}

export default RecruiterProfile;
