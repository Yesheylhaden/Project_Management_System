import React from "react";
import { Mail, Phone, Building } from "lucide-react";

const DeveloperProfile = () => {
  const projects = [
    { title: "Website Redesign", due: "Dec 15, 2023", team: 5, progress: 65 },
    { title: "Mobile App Development", due: "Nov 1, 2023", team: 8, progress: 42 },
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

  return (
    <div className="min-h-screen bg-[#f5f8fc] p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-400">
            👤
          </div>
          <h2 className="mt-3 text-lg font-semibold">Tandin Yuzer</h2>
          <p className="text-blue-600 text-sm">System Admin</p>

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
              <Mail size={16} /> tandin123@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +975 1783567
            </p>
            <p className="flex items-center gap-2">
              <Building size={16} /> Thimphu Tech Park Limited
            </p>
          </div>

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            Edit Profile
          </button>
        </div>

        {/* Main Profile Content */}
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
            <h3 className="text-lg font-semibold mb-4">Current Projects</h3>
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
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">My Tasks</h3>
              <button className="text-blue-600 text-sm hover:underline">
                View All
              </button>
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
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <button className="text-blue-600 text-sm hover:underline">
                View All
              </button>
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
    </div>
  );
};

export default DeveloperProfile;
