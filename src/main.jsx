import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./AdminDashboard.jsx";
import AdminProfile from "./AdminProfile.jsx";
import ManagerDashboard from "./ManagerDashboard.jsx";
import ManagerProfile from "./ManagerProfile.jsx";
import Signup from "./signup.jsx";
import forgotPassword from "./forgotPassword.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Default route shows Profile */}
        <Route path="/" element={<Signup />} />
        <Route path="managerProfile" element={<ManagerProfile />} />
        <Route path="adminProfile" element={<AdminProfile />} />
        <Route path="forgotPassword" element={<forgotPassword />} />
        
        {/* Dashboard route */}
        <Route path="/managerDashboard" element={<ManagerDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        
      </Routes>
    </Router>
  </StrictMode>
);