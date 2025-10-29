import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ManagerDashboard from "./ManagerDashboard.jsx";
import ManagerProfile from "./ManagerProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Default route shows ManagerProfile */}
        <Route path="/" element={<ManagerProfile />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<ManagerDashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);
