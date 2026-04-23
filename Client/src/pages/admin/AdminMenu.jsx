import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

import "../../Style/navStyle.css"

function AdminMenu() {

   const {logout}= useAuth()
  return (
        <ul className="navbar-nav ms-auto me-5 gap-4 mb-2 mb-lg-0  text-start ">
      <li className="nav-item">
        <Link className="  fs-4  nav-link  nav-hover ">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="fs-4  nav-link  nav-hover "
          to="/profile"
        >
         Jobs
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="  fs-4  nav-link  nav-hover "
          to="/profile"
        >
          Applicants
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="  fs-4  nav-link  nav-hover  "
          to="/profile"
        >
         Manage Recruiter
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="  fs-4  nav-link  nav-hover "
          to="/profile"
        >
         Setting
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="  fs-4 fs-4  nav-link  nav-hover "
          to="/"
          onClick={async () => {
            await logout();
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  )
}

export default AdminMenu
