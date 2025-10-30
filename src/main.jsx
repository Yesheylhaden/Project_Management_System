import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./AdminDashboard.css";
import "./AdminProfile.css";
import "./signup.jsx"
import "./signup.css"

import AdminDashboard from "./AdminDashboard.jsx";
import AdminProfile from "./AdminProfile.jsx";
import Signup from "./signup.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Default route shows AdminProfile */}
        <Route path="/" element={<AdminProfile />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  </StrictMode>
);
