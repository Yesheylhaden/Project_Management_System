import React from "react";
import "./ManagerProfile.css";

const ManagerProfile = () => {
  return (
    <div className="manager-profile">
      {/* ===== Header ===== */}
      <header className="manager-header">
        <div className="logo">
          <h3>Thimphu TechPark</h3>
          <p>Bhutan’s First IT Park</p>
        </div>

        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Project</li>
            <li className="active">Profile</li>
          </ul>
        </nav>

        <div className="icons">
          <span className="bell">🔔</span>
          <div className="user-icon">P</div>
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="manager-main">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="avatar">👤</div>
          <h3>Pika</h3>
          <p className="role">Senior Project Manager</p>

          <div className="contact-info">
            <p>📧 Pika@gmail.com</p>
            <p>📞 +97517332418</p>
            <p>📍 Thimphu Tech-park Limited</p>
          </div>

          <button className="edit-btn">✏️ Edit Profile</button>
        </aside>

        {/* About & Projects */}
        <section className="profile-content">
          <div className="about-section">
            <h3>About Me</h3>
            <p>
              Experienced project manager with over 8 years of expertise in leading
              cross-functional teams to deliver complex projects on time and within
              budget. Specialized in agile methodologies and stakeholder management.
            </p>

            <h4>Skills</h4>
            <div className="skills">
              <button>Project Planning</button>
              <button>Budgeting</button>
              <button>Risk Management</button>
            </div>
          </div>

          <div className="projects-section">
            <h3>Current Projects</h3>
            <div className="project-list">
              <div className="project-card">
                <h4>Website Redesign</h4>
                <p>Due: Oct 15, 2023 | Team: 5</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "65%" }}></div>
                </div>
                <p>Progress: 65%</p>
              </div>

              <div className="project-card">
                <h4>Mobile App Development</h4>
                <p>Due: Nov 1, 2023 | Team: 8</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "42%" }}></div>
                </div>
                <p>Progress: 42%</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManagerProfile;
