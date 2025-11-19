import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Developer pages
import DeveloperDashboard from "./pages/DeveloperDashboard";
import DeveloperProfile from "./pages/DD_Profile";
import ViewAllProjects from "./pages/DD_ViewAllProjects";
import ViewAllTasks from "./pages/DD_ViewAllTasks";
import ViewAllActivities from "./pages/DD_ViewAllActivities";
import DeveloperEditProfile from "./pages/DD_EditProfile";

// Admin & Manager pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminProfile from "./pages/AdminProfile";
import ManagerDashboard from "./pages/ManagerDashboard";
import ManagerProfile from "./pages/ManagerProfile";

// Auth
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotPassword";
import Login from "./pages/login";
import Register from "./pages/L_Register";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Signup & ForgotPassword */}
        <Route path="/" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        {/* Login/Register toggle */}
        <Route path="/login" element={<LoginRegisterWrapper />} />

        {/* Manager */}
        <Route path="/managerDashboard" element={<ManagerDashboard />} />
        <Route path="/managerProfile" element={<ManagerProfile />} />

        {/* Admin */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/adminProfile" element={<AdminProfile />} />

        {/* Developer routes */}
          <Route path="DeveloperDashboard" element={<DeveloperDashboard />} />
          <Route path="DeveloperProfile" element={<DeveloperProfile />} />
          <Route path="DeveloperProjects" element={<ViewAllProjects />} />
          <Route path="Developertasks" element={<ViewAllTasks />} />
          <Route path="DeveloperActivities" element={<ViewAllActivities />} />
          <Route path="DeveloperEdit-Profile" element={<DeveloperEditProfile />} />

      </Routes>
    </Router>
  );
}

function LoginRegisterWrapper() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Login />
    </div>
  );
}
