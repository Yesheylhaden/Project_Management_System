import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeveloperEditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Yeshey Lhaden");
  const [email, setEmail] = useState("yeshey@example.com");

  const handleSave = () => {
    alert("Profile saved!");
    navigate("/profile");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Profile</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSave} style={{ padding: "10px 20px" }}>
        Save
      </button>
      <button
        onClick={() => navigate("/profile")}
        style={{ padding: "10px 20px", marginLeft: "10px" }}
      >
        Cancel
      </button>
    </div>
  );
};

export default DeveloperEditProfile;
