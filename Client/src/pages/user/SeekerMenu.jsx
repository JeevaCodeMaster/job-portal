import React from 'react'
import { Link } from 'react-router-dom'

import "../../Style/navStyle.css"
import { useAuth } from '../auth/AuthContext'
function SeekerMenu() {
    const {logout}=useAuth();
    
  return (
    <ul className="navbar-nav ms-auto mt-3 me-5 gap-5 mb-2 mb-lg-0 text-start">
        <li className="nav-item">
                 
                <Link className="   fs-4  nav-link nav-hover " to="/user/dashboard">Home</Link>
              </li>
              <li className="nav-item">
                 
                <Link className=" fs-4  nav-link nav-hover  " to="/jobs">Find Job</Link>
              </li>
              <li className="nav-item">
                 
                <Link className="  fs-4  nav-link nav-hover " to="/profile">Applied Job</Link>
              </li>
              <li className="nav-item">
                 
                <Link className="  fs-4  nav-link nav-hover  " to="/user/my-profile">Profile</Link>
              </li>
              <li className="nav-item">
                 
                <Link className="  fs-4  nav-link nav-hover  " to="/" onClick={async()=>{
                    await logout();
                    


                }}>Logout</Link>
              </li>
    </ul>
  )
}

export default SeekerMenu
