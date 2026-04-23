import React, { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "/cricleicon.png"
import SeekerMenu from "../user/SeekerMenu";
import RecruiterMenu from "../recruiter/RecruiterMenu";
import AdminMenu from "../admin/AdminMenu";

function Navbar() {

  const {user,islogged,logout}=useAuth()

const navigate=useNavigate()

 
   
      
      useEffect(()=>{
        
      })
    
  

  return (
    <header className="sticky-top   top-0">
      <nav className="navbar navbar-expand-lg bg-white p-4">
        <div className="container-fluid">

          {/* Brand */}
          <div className="d-flex align-items-center">
          <img src={logo} alt="" className=" me-3" style={{width:"60px"}} />
            <Link className="navbar-brand fs-2" href="#">
             JobShore
          </Link></div>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className="collapse mx-auto navbar-collapse " id="navbarSupportedContent">

            {/* Search */}
          

            {/* Auth Links */}
            {!user && <ul className="navbar-nav mx-auto me-5 gap-4 mb-2 mb-lg-0 text-start">
              <li className="nav-item">
                <Link className="nav-link fs-3  nav-hover " to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-3 nav-hover " to={"/register"}>
                  Sign up
                </Link>
              </li>
              <li className="nav-item nav-hover">
                <div className=" dropdown">
                  <Link className="  btn fs-3   dropdown-toggle btn-lg nav-link text-start  "  data-bs-toggle="dropdown" aria-expanded="false">Recruiter</Link>

                  <ul className="dropdown-menu mt-3 mx-auto w-100  ">
                    <li className="fs-3 rounded  text-center mb-2"><Link className="dropdown-item border-bottom" to={"/login"}>Login</Link> </li>
                    <li className="fs-3 rounded  text-center"><Link className="dropdown-item" to={"/recruiter/register"}>Register</Link></li>
                  </ul>
                </div>
              </li>
             
              
            </ul>}

            
              
              
             
              
            {user?.role=="seeker"  && islogged && <SeekerMenu />}
             {user?.role=="recruiter"  && islogged && <RecruiterMenu/>}
             {user?.role=="admin"  && islogged && <AdminMenu/>}
           

          </div>
        </div>
      </nav>
    
    </header>
  );
}

export default Navbar;
