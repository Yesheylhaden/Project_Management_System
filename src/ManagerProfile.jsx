import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";
import "./ManagerProfile.css";

export default function ManagerProfile() {
  return (
    <div className="manager-profile-page">
      {/* Header */}
      <header className="mp-header">
        <div className="mp-logo-section">
          <img src="/logo.png" alt="Thimphu TechPark" className="mp-logo" />
          <div className="mp-logo-text">
            <h4>Thimphu TechPark</h4>
            <p>BHUTAN'S FIRST IT PARK</p>
          </div>
        </div>

        <nav className="mp-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/project">Project</a>
          <a href="/manager-profile" className="active">
            Profile
          </a>
        </nav>

        <div className="mp-user-icon">P</div>
      </header>

      {/* Profile Body */}
      <main className="mp-main">
        {/* Left Panel */}
        <section className="mp-left-panel">
          <div className="mp-profile-card">
            <div className="mp-avatar">
              <FaUser size={50} color="#007bff" />
            </div>
            <h2 className="mp-name">Pika</h2>
            <p className="mp-role">Senior Project Manager</p>

            <div className="mp-contact">
              <p>
                <FaEnvelope /> Pika@gmail.com
              </p>
              <p>
                <FaPhone /> +97517332418
              </p>
              <p>
                <FaBuilding /> Thimphu Tech-park Limited
              </p>
            </div>

            <button className="mp-edit-btn">Edit Profile</button>
          </div>
        </section>

        {/* Right Panel */}
        <section className="mp-right-panel">
          <div className="mp-about">
            <h3>About Me</h3>
            <p>
              Experienced project manager with over 8 years of expertise in
              leading cross-functional teams to deliver complex projects on time
              and within budget. Specialized in agile methodologies and
              stakeholder management.
            </p>
          </div>

          <div className="mp-skills">
            <h3>Skill</h3>
            <div className="mp-skill-list">
              <span>Project Planning</span>
              <span>Budgeting</span>
              <span>Risk Management</span>
            </div>
          </div>

          <div className="mp-projects">
            <h3>Current Projects</h3>
            <div className="mp-project-grid">
              <div className="mp-project-box">
                <h4>Website Redesign</h4>
                <p>Due: Oct 15, 2023</p>
                <p>Team: 5</p>
                <div className="mp-progress-bar">
                  <div className="mp-progress" style={{ width: "65%" }}></div>
                </div>
                <p className="mp-progress-text">Progress: 65%</p>
              </div>

              <div className="mp-project-box">
                <h4>Mobile App Development</h4>
                <p>Due: Nov 1, 2023</p>
                <p>Team: 8</p>
                <div className="mp-progress-bar">
                  <div className="mp-progress" style={{ width: "42%" }}></div>
                </div>
                <p className="mp-progress-text">Progress: 42%</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
