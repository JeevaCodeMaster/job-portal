import React from "react";

function EditPostedJob() {
  return (
    <div className="col-12 col-md-9 col-lg-10 p-4">
      <h3>Posted Jobs</h3>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Status</th>
            <th>Applications</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend Developer</td>
            <td>
              <span className="badge bg-success">Active</span>
            </td>
            <td>42</td>
            <td>
              <button className="btn btn-warning btn-sm">
                Close Job
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EditPostedJob;
