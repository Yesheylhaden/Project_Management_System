import React from "react";
import "./AdminProfile.css";
import { FaTableCellsLarge } from "react-icons/fa6";
import { BsPower } from "react-icons/bs";

export default function AdminProfile() {
  return (
    <div className="admin-profile-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-pic">
          <div className="avatar-icon">👤</div>
        </div>
        <div className="sidebar-buttons">
          <button className="btn">Admin Name</button>
          <button className="btn">About</button>
          <button className="btn">Email</button>
          <button className="btn">Settings</button>
        
        </div>
        <div className="logout">
          <BsPower className="logout-icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <img
            src="/logo.png"
            alt="Thimphu TechPark Logo"
            className="logo"
          />
          <div className="header-text">
            <h2>Thimphu TechPark</h2>
            <p>BHUTAN'S FIRST IT PARK</p>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">About</h2>

          {/* Search bar */}
          <div className="search-bar">
            <input type="text" placeholder="🔍 Search" />
          </div>

          {/* About Section */}
          <div className="content-box">
            <h3>About</h3>
            <textarea placeholder="Write about admin here..." />
          </div>

          {/* Work Assign Section */}
          <div className="content-box">
            <h3>Work Assign</h3>
            <textarea placeholder="Add assigned work details..." />
          </div>
        </div>
      </div>
    </div>
  );
}



