import React, { useState } from "react";
import "./ManagerDashboard.css";
import { useNavigate } from "react-router-dom";

export default function ManagerDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">

      {/* Header */}
      <header className="header glass-header">
        <div className="logo-row">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <img src="/logo.png" alt="Thimphu TechPark Logo" className="logo-img" />
          <div className="logo-text">
            <h4>Thimphu TechPark</h4>
            <p>BHUTAN'S FIRST IT PARK</p>
          </div>
        </div>

        <div className="header-right">
          <div className="notification">🔔</div>
          <div className="profile">M</div>
        </div>
      </header>

      {/* Hamburger Dropdown */}
      {menuOpen && (
        <div className="dropdown-menu">
          <p onClick={() => navigate("/managerDashboard/all-projects")}>All Projects</p>
          <p onClick={() => navigate("/managerDashboard/project-list")}>Project List</p>
        </div>
      )}

      {/* Intro */}
      <div className="intro-card">
        <h1>✨ Manager Dashboard</h1>
        <p>Track and manage all your company projects</p>
      </div>

      {/* Stats (Dummy Example — Replace later) */}
      <div className="stats-row">
        <div className="stat-box blue">
          <h3>TO DO LIST</h3>
          <h1>0</h1>
          <p>Projects waiting to start</p>
        </div>
        <div className="stat-box orange">
          <h3>IN PROGRESS</h3>
          <h1>0</h1>
          <p>Active Projects</p>
        </div>
        <div className="stat-box cyan">
          <h3>INVOICE</h3>
          <h1>0</h1>
          <p>Pending Invoice</p>
        </div>
        <div className="stat-box green">
          <h3>DONE</h3>
          <h1>0</h1>
          <p>Completed Projects</p>
        </div>
      </div>

    </div>
  );
}
