import React, { useState } from "react";
import "./ManagerDashboard.css";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ManagerDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Dummy Data
  const taskData = [
    { name: "Completed", value: 60 },
    { name: "Pending", value: 30 },
    { name: "Delayed", value: 10 },
  ];

  const progressData = [
    { stage: "Planning", progress: 80 },
    { stage: "Design", progress: 65 },
    { stage: "Development", progress: 50 },
    { stage: "Testing", progress: 30 },
  ];

  const costData = [
    { project: "A", cost: 4000 },
    { project: "B", cost: 3200 },
    { project: "C", cost: 5200 },
  ];

  const workloadData = [
    { team: "Team 1", dev: 4, design: 2, qa: 1 },
    { team: "Team 2", dev: 6, design: 3, qa: 2 },
    { team: "Team 3", dev: 5, design: 4, qa: 3 },
  ];

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

      {/* Stats Row */}
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

      {/* Charts Section */}
      <div className="charts-wrapper">

        {/* Row 1 */}
        <div className="charts-row">
          {/* Donut Chart */}
<div className="chart-half">
  <h3>Tasks (Donut Chart)</h3>

  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={taskData}
        dataKey="value"
        innerRadius={60}
        outerRadius={85}
        paddingAngle={4}
      >
        <Cell fill="#4b7bec" />  {/* Completed */}
        <Cell fill="#fd9644" />  {/* Pending */}
        <Cell fill="#2ecc71" />  {/* Delayed */}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>

  {/* LEGEND */}
  <div className="donut-legend">
    <div><span className="legend-color blue"></span> Completed</div>
    <div><span className="legend-color orange"></span> Pending</div>
    <div><span className="legend-color green"></span> Delayed</div>
  </div>
</div>

          {/* Progress Bar */}
          <div className="chart-half">
            <h3>Progress</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={progressData} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="stage" type="category" />
                <Bar dataKey="progress" fill="#22a6b3" />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 2 */}
        <div className="charts-row">
          {/* Cost Chart */}
          <div className="chart-half">
            <h3>Cost Chart</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={costData}>
                <XAxis dataKey="project" />
                <YAxis />
                <Bar dataKey="cost" fill="#e84393" />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Workload */}
          <div className="chart-half">
            <h3>Workload</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={workloadData}>
                <XAxis dataKey="team" />
                <YAxis />
                <Legend />
                <Tooltip />
                <Bar dataKey="dev" stackId="a" fill="#4834d4" />
                <Bar dataKey="design" stackId="a" fill="#f9ca24" />
                <Bar dataKey="qa" stackId="a" fill="#6ab04c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
