import React, { useState } from "react";
import { Mail, Phone, Building } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import Navbar from "../components/DD_Navbar";

const DeveloperProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("Tandin Yuzer");
  const [email, setEmail] = useState("tandin123@gmail.com");
  const [position, setPosition] = useState("System Admin");

  const projects = [
    { title: "Website Redesign", due: "Dec 15, 2023", team: 5, progress: 0 },
    {
      title: "Mobile App Development",
      due: "Nov 1, 2023",
      team: 8,
      progress: 42,
    },
  ];

  const tasks = [
    {
      title: "Implement user authentication API",
      project: "Website Redesign",
      priority: "High",
      status: "In Progress",
    },
    {
      title: "Fix database connection pooling",
      project: "Mobile App Development",
      priority: "Medium",
      status: "Pending",
    },
    {
      title: "Code review for payment module",
      project: "E-commerce",
      priority: "Low",
      status: "Completed",
    },
  ];

  const activities = [
    "Added new user 'Pemal' as Developer",
    "Appointed 'Sonam' as Project Manager",
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const handleSave = () => {
    alert("Profile updated!");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#E6F3FF] ">
      <Navbar />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 p-6">
        {/* Sidebar */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="../profile.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold">{name}</h2>
          <p className="text-blue-600 text-sm">{position}</p>

          <div className="flex justify-between w-full mt-5 text-center">
            <div>
              <p className="text-xl font-bold">18</p>
              <p className="text-xs text-gray-500">Tasks Completed</p>
            </div>
            <div>
              <p className="text-xl font-bold">7</p>
              <p className="text-xs text-gray-500">Active Projects</p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm w-full">
            <p className="flex items-center gap-2">
              <Mail size={16} /> {email}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +975 1783567
            </p>
            <p className="flex items-center gap-2">
              <Building size={16} /> Thimphu Tech Park Limited
            </p>
          </div>

          {/* Edit Profile Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Edit Profile
          </button>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* About Me */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-gray-600 text-sm">
              Experienced project manager with over 8 years of expertise in
              leading cross-functional teams to deliver complex projects on time
              and within budget. Specialized in agile methodologies and
              stakeholder management.
            </p>

            <h4 className="mt-4 font-semibold text-sm mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {["Project Planning", "Budgeting", "Risk Management"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Current Projects */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Current Projects</h3>
              {/* ✅ Linked to /projects */}
              <Link
                to="/Developerprojects"
                className="text-blue-600 text-sm hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {projects.map((p, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <p>{p.title}</p>
                    <p>{p.progress}%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Due: {p.due} | Team: {p.team}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* My Tasks */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">My Tasks</h3>
              {/* ✅ Linked to /tasks */}
              <Link
                to="/Developertasks"
                className="text-blue-600 text-sm hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {tasks.map((t, i) => (
                <div
                  key={i}
                  className="border p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <p className="text-sm font-medium">{t.title}</p>
                  <p className="text-xs text-gray-500">
                    Project: {t.project} —{" "}
                    <span className={getPriorityColor(t.priority)}>
                      {t.priority} Priority
                    </span>
                  </p>
                  <p className="text-xs text-gray-400">{t.status}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              {/* ✅ Linked to /activities */}
              <Link
                to="/Developeractivities"
                className="text-blue-600 text-sm hover:underline"
              >
                View All
              </Link>
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
              {activities.map((a, i) => (
                <li key={i} className="border-b pb-2">
                  {a}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 relative shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2 mb-3"
            />

            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2 mb-3"
            />

            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full border rounded p-2 mb-3"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperProfile;
