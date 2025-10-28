import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import DeveloperProfile from "./pages/DeveloperProfile";
import ViewAllProjects from "./pages/ViewAllProjects";
import ViewAllTasks from "./pages/ViewAllTasks";      
import ViewAllActivities from "./pages/ViewAllActivities";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<DeveloperDashboard />} />
          <Route path="/profile" element={<DeveloperProfile />} />
          <Route path="/projects" element={<ViewAllProjects />} />
          <Route path="/tasks" element={<ViewAllTasks />} />          {/* ✅ new route */}
          <Route path="/activities" element={<ViewAllActivities />} /> {/* ✅ new route */}
        </Routes>
      </div>
    </Router>
  );
}
