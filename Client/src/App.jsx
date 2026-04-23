import "./App.css";
import Login from "./pages/auth/Login";
import Index from "./pages/common/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/common/Navbar";
import Register from "./pages/auth/Register";
import Footer from "./pages/common/Footer";
import RecruiterRegister from "./pages/auth/RecruiterRegister";
import Common from "./pages/common/Common";
import GoogleCallback from "./pages/auth/GoogleCallback";
import ProtectRoute from "./pages/auth/ProtectRoute";
import UserDashboard from "./pages/user/UserDashboard";
import RecruitDashboard from "./pages/recruiter/RecruitDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";
import EditPostedJob from "./pages/recruiter/EditPostedJob";
import PostJob from "./pages/recruiter/PostJob";
import JobList from "./pages/user/JobList";
import UserProfile from "./pages/user/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/common" element={<Common></Common>}></Route>

          <Route
            path="/recruiter/register"
            element={<RecruiterRegister></RecruiterRegister>}
          ></Route>
          <Route
            path="/google/callback"
            element={<GoogleCallback></GoogleCallback>}
          ></Route>

          <Route
            path="/user/dashboard"
            element={
              <ProtectRoute role="seeker">
                <UserDashboard></UserDashboard>
              </ProtectRoute>
            }
          ></Route>
          <Route path="/user/my-profile"  element={<UserProfile/>}></Route>
          <Route
            path="/recruiter/dashboard"
            element={
              <ProtectRoute role="recruiter">
                <RecruitDashboard></RecruitDashboard>
              </ProtectRoute>
            }
          ></Route>

          <Route
            path="/admin/bashboard"
            element={
              <ProtectRoute role="admin">
                <AdminDashboard></AdminDashboard>
              </ProtectRoute>
            }
          ></Route>
          <Route path="/r/profile" element={<RecruiterProfile/>}></Route>
        <Route path="/update-job" element={<EditPostedJob/>}></Route>
        <Route path="/postjob" element={<PostJob/>}></Route>
        <Route path="jobs" element={<JobList/>}></Route>
          <Route path="/footer" element={<Footer></Footer>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
