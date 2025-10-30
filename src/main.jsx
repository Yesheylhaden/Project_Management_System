import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./AdminDashboard.jsx";
import AdminProfile from "./AdminProfile.jsx";
import ManagerDashboard from "./ManagerDashboard.jsx";
import ManagerProfile from "./ManagerProfile.jsx";
import Signup from "./signup.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Default route shows profile */}
        <Route path="/" element={<Signup />} />
         <Route path="/adminProfile" element={<AdminProfile/>} />
         <Route path="/managerProfile" element={<ManagerProfile />} />

        {/* Dashboard route */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/managerDashboard" element={<ManagerDashboard />} />

      </Routes>
    </Router>
  </StrictMode>
);
