import React, { useEffect } from "react";

import RecruiterHome from "./RecruiterHome";


function RecruiterDashboard() {
  
useEffect(()=>{
  document.title="Company || Dashboard"
})
  return (
    <div className="d-flex min-vh-100">
     

      {/* Main content */}
      <div className="col-12 col-md-9 col-lg-10 p-4 mx-auto">
        <RecruiterHome />

        
      </div>
    </div>
  );
}

export default RecruiterDashboard;
