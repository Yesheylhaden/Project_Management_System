import React from "react";

const projects = [
  {
    id: 1,
    title: "Website Redesign",
    dueDate: "Oct 15, 2023",
    team: 5,
    progress: 0,
  },
  {
    id: 2,
    title: "Mobile App Development",
    dueDate: "Nov 1, 2023",
    team: 8,
    progress: 42,
  },
  {
    id: 3,
    title: "E-commerce Platform",
    dueDate: "Dec 10, 2023",
    team: 6,
    progress: 68,
  },
  {
    id: 4,
    title: "Portfolio Website",
    dueDate: "Jan 5, 2024",
    team: 3,
    progress: 90,
  },
];

const ViewAllProjects = () => {
  return (
    <div className="p-6 bg-[#f4f8ff] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-500 text-sm">Team: {project.team}</p>
            </div>
            <p className="text-gray-500 text-sm mb-3">Due: {project.dueDate}</p>

            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-gray-700 text-sm font-medium">
              Progress: {project.progress}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllProjects;
