import React from "react";

function RecruiterHome() {
  return (
    <>
      <h2 className="h2">Dashboard Overview</h2>

      <div className="row g-4">
        {/* Total Applications */}
        <div className="col-md-4 ">
          <div className="card shadow-sm p-4">
            <h5 className="text">Total Applications</h5>
            <h2 className="text-primary">128</h2>
          </div>
        </div>

        {/* Active Jobs */}
        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h5 className="text">Active Jobs</h5>
            <h2 className="text-success">6</h2>
          </div>
        </div>

        {/* Closed Jobs */}
        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h5 className="text"> Closed Jobs</h5>
            <h2 className="text-danger">2</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruiterHome;
