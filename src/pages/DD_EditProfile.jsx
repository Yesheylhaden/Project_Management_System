import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeveloperEditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Tandin Yuzer");
  const [email, setEmail] = useState("yeshey@example.com");

  const handleSave = () => {
    alert("Profile saved!");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeveloperEditProfile;
