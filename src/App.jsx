import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import DeveloperProfile from "./pages/DeveloperProfile";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<DeveloperDashboard />} />
          <Route path="/profile" element={<DeveloperProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
