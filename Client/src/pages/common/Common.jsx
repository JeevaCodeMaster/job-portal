import React from "react";
import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";

import { useNavigate } from "react-router-dom";
function Common() {
  const { user, islogged } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "JobShore || Home";
    if (!user || !islogged) {
      navigate("/");
    }
    if (!user || !islogged) return <h1>Loading...</h1>;
    switch (user?.role) {
      case "seeker":
        navigate("/user/dashboard");

        break;
      case "recruiter":
        navigate("/recruiter/dashboard");

        break;

      case "admin":
        navigate("/admin/bashboard");
        break;
      default:
        navigate("/");
    }
  }, [navigate, user, islogged]);

  return null;
}

export default Common;
