import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import DeveloperProfile from "./pages/DeveloperProfile";
import ViewAllProjects from "./pages/ViewAllProjects";
import ViewAllTasks from "./pages/ViewAllTasks";
import ViewAllActivities from "./pages/ViewAllActivities";
import DeveloperEditProfile from "./pages/DeveloperEditProfile"; 
import ProfileLogoModal from "./pages/ProfileLogoModal";

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
