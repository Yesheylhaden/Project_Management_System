import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell
} from "recharts";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setProjects([
      { id: 1, name: "Website Redesign", status: "In Progress", progress: 45, invoice: 20, date: "2025-09-01" },
      { id: 2, name: "ERP Implementation", status: "To Do", progress: 0, invoice: 0, date: "2025-09-05" },
      { id: 3, name: "Mobile App", status: "Done", progress: 100, invoice: 100, date: "2025-09-10" },
      { id: 4, name: "New Portal", status: "In Progress", progress: 60, invoice: 50, date: "2025-09-15" }
    ]);
  }, []);

  // Line Chart data
  const lineData = projects.map(p => ({
    date: p.date,
    "To Do": p.status === "To Do" ? 1 : 0,
    "In Progress": p.status === "In Progress" ? 1 : 0,
    "Done": p.status === "Done" ? 1 : 0
  }));

  // Pie Chart data
  const statusCounts = ["To Do", "In Progress", "Done"].map(status => ({
    name: status,
    value: projects.filter(p => p.status === status).length
  }));
  const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

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
          <p onClick={() => navigate("/adminDashboard/project-list")}>Project List</p>
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

      {/* CHARTS CONTAINER */}
      <div className="charts-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "30px", gap: "20px" }}>
        {/* Line Chart */}
        <div style={{ flex: 1, background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ textAlign: "center" }}>Projects Over Time</h3>
          <LineChart
            width={500}
            height={300}
            data={lineData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="To Do" stroke="#0088FE" />
            <Line type="monotone" dataKey="In Progress" stroke="#FF8042" />
            <Line type="monotone" dataKey="Done" stroke="#00C49F" />
          </LineChart>
        </div>

        {/* Pie Chart */}
        <div style={{ flex: 0.7, background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ textAlign: "center" }}>Project Status Distribution</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={statusCounts}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {statusCounts.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36}/>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
