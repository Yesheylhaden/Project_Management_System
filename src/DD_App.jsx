import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import DeveloperProfile from "./pages/DD_Profile";
import ViewAllProjects from "./pages/DD_ViewAllProjects";
import ViewAllTasks from "./pages/DD_ViewAllTasks";
import ViewAllActivities from "./pages/DD_ViewAllActivities";
import DeveloperEditProfile from "./pages/DD_EditProfile"; 
import ProfileLogoModal from "./pages/DD_ProfileLogoModal";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#E6F3FF] text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<DeveloperDashboard />} />
          <Route path="/profile" element={<DeveloperProfile />} />
          <Route path="/projects" element={<ViewAllProjects />} />
          <Route path="/tasks" element={<ViewAllTasks />} />
          <Route path="/activities" element={<ViewAllActivities />} />
          <Route path="/edit-profile" element={<DeveloperEditProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
