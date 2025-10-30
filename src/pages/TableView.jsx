import React from "react";
import { Search, Plus, Edit, Eye, Trash2, Download } from "lucide-react";
import SideBar from "../components/Sidebar"; 

const projects = [
  {
    name: "Website Redesign",
    status: "Active",
    progress: 65,
    team: ["JE", "SH", "+3"],
    startDate: "2023-09-01",
    deadline: "2023-11-15",
    priority: "High",
  },
  {
    name: "Mobile App Development",
    status: "Delayed",
    progress: 42,
    team: ["MK", "AH", "+2"],
    startDate: "2023-08-15",
    deadline: "2023-10-30",
    priority: "High",
  },
  {
    name: "Marketing Campaign",
    status: "Planning",
    progress: 15,
    team: ["ER", "TH", "+2"],
    startDate: "2023-10-01",
    deadline: "2023-12-31",
    priority: "Medium",
  },
  {
    name: "Product Launch",
    status: "Active",
    progress: 78,
    team: ["SD", "DA", "+4"],
    startDate: "2023-07-10",
    deadline: "2023-11-30",
    priority: "High",
  },
  {
    name: "Client Portal Update",
    status: "Completed",
    progress: 100,
    team: ["MK", "JP"],
    startDate: "2023-06-01",
    deadline: "2023-08-15",
    priority: "Medium",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "text-green-600 bg-green-100";
    case "Delayed":
      return "text-red-600 bg-red-100";
    case "Planning":
      return "text-yellow-600 bg-yellow-100";
    case "Completed":
      return "text-blue-600 bg-blue-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

export default function TableView() {
  return (
    <div className="flex min-h-screen bg-[#E6F3FF]">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Table View</h1>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-gray-700">All Projects</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
                <Download className="w-4 h-4" /> Export
              </button>
              <button className="text-sm text-gray-600 border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
                View Options
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-600 bg-gray-50 border-b">
                <tr>
                  <th className="py-2 px-3">Project Name</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3">Progress</th>
                  <th className="py-2 px-3">Team</th>
                  <th className="py-2 px-3">Start Date</th>
                  <th className="py-2 px-3">Deadline</th>
                  <th className="py-2 px-3">Priority</th>
                  <th className="py-2 px-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-3 font-medium text-gray-700">
                      {project.name}
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              project.progress === 100
                                ? "bg-green-500"
                                : project.progress < 50
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                            }`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span>{project.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 flex gap-1">
                      {project.team.map((member, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full"
                        >
                          {member}
                        </span>
                      ))}
                    </td>
                    <td className="py-3 px-3">{project.startDate}</td>
                    <td className="py-3 px-3">{project.deadline}</td>
                    <td className="py-3 px-3 text-gray-700 font-medium">
                      {project.priority}
                    </td>
                    <td className="py-3 px-3 flex gap-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-500 hover:text-yellow-700">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
