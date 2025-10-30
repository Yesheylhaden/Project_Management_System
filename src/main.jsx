import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./AdminDashboard.css";
import "./AdminProfile.css";

import AdminDashboard from "./AdminDashboard.jsx";
import AdminProfile from "./AdminProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Default route shows AdminProfile */}
        <Route path="/" element={<AdminProfile />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);
