import React from "react";

function Footer() {

  
  

  return (
    <div className="conatiner mt-4   bg-white p-4  ">
        <div className=" row d-flex  justify-content-center align-items-stretch gap-4 text-start mb-5">
      <div className="col-12  col-md-10 col-xl-3 shadow p-5 border border-info border-start-0 border-bottom-0 rounded">
       <p className="h3">Jobs</p>
       <hr />
       <div>
<p className="text-sm">Explore opportunities across various employment categories tailored to your career goals.
</p>
<ul className="list-unstyled p-3 lh-lg text-sm">
  <li>• Full-Time Jobs</li>
  <li>• Part-Time Jobs</li>
  <li>• Internship Programs</li>
  <li>• Freelance & Contract Jobs</li>
  <li>• Remote / Work-From-Home Jobs</li>
  <li>• Freshers & Experienced Jobs</li>
</ul>
 

<p className="text-sm">Find jobs that match your skills, experience, and preferred work style.</p>
       </div>
      </div>
      <div className="col-12  col-md-10 col-xl-3 shadow p-5 border border-info border-start-0 border-bottom-0 rounded">
       <p className="h3">Information</p>
       <hr /> 
       <div className="lh-lg text-sm">
Our job portal connects talented professionals with trusted employers across multiple industries. 
We aim to simplify the hiring process by providing verified job listings, secure applications, 
and role-based access for job seekers, recruiters, and administrators. 
Build your career with confidence through a transparent and reliable platform.
       </div>
      </div>
      <div className="col-12  col-md-10 col-xl-3 shadow p-5 border border-info border-start-0 border-bottom-0 rounded  ">
       <p className="h3">Contact </p>

       <hr />
       <div  >
<p className="text-sm">Need help or have questions? Our support team is here to assist you.
</p>
<ul className="lh-lg text-sm" style={{listStyle:"none"}}><li>📧 Email: jobShoreHelp@gmail.com  
</li>
<li>📞 Phone: +91 98765 43210  
</li>
<li>📍 Location: Trichy, Tamil Nadu, India 
</li></ul>


<p className="text-sm">We are committed to responding promptly and supporting your job search journey.
</p>       </div>
      </div>
    </div>
    <div className="mb-5  "><p className="h3 border border-info p-4 border-top-0 border-start-0 border-end-0">All rights reserved © {new Date().getFullYear()}</p> 
    </div>
    </div>
  );
}

export default Footer;
