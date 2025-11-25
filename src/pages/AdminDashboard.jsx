import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectionProjects, setSelectionProjects] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setProjects([
      { id: 1, name: "Website Redesign", status: "In Progress", progress: 45, invoice: 20 }
    ]);
    setUsers([{ id: 1, name: "Sangay Choden", role: "Admin", status: "Active" }]);
    setSelectionProjects([{ id: 1, name: "ERP Implementation", status: "Pending" }]);
  }, []);

  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <header className="header glass-header">
        <div className="logo-row">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div><div></div><div></div>
          </div>

          <div className="logo-block">
            <img src="/logo.png" alt="Thimphu TechPark Logo" className="logo-img"/>
            <div className="logo-text">
              <h4>Thimphu TechPark</h4>
              <p>BHUTAN'S FIRST IT PARK</p>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="notification">🔔</div>
          <div className="profile">A</div>
        </div>
      </header>

      {menuOpen && (
        <div className="dropdown-menu">
          <p onClick={() => navigate("/adminDashboard/all-projects")}>All Projects</p>
          <p onClick={() => navigate("/adminDashboard/manager-selection")}>Manager Selection</p>
          <p onClick={() => navigate("/adminDashboard/user-management")}>User Management</p>
        </div>
      )}

      {/* WELCOME CARD */}
      <div className="intro-card">
        <h1>✨ Admin Dashboard</h1>
        <p>Track and manage all your company projects</p>
      </div>

      {/* STAT BOXES */}
      <div className="stats-row">
        <div className="stat-box blue"><h3>TO DO</h3><h1>{projects.filter(p=>p.status==="To Do").length}</h1></div>
        <div className="stat-box orange"><h3>IN PROGRESS</h3><h1>{projects.filter(p=>p.status==="In Progress").length}</h1></div>
        <div className="stat-box green"><h3>DONE</h3><h1>{projects.filter(p=>p.status==="Done").length}</h1></div>
        <div className="stat-box cyan"><h3>INVOICE</h3><h1>{projects.filter(p=>p.invoice<100).length}</h1></div>
        
      </div>
    </div>
  );
}
