import React from "react";
import Navbar from "../components/DD_Navbar";

const tasks = [
  {
    title: "Implement user authentication API",
    project: "Website Redesign",
    due: "Tomorrow",
    // priority: "High",
    statusColor: "text-red-600",
  },
  {
    title: "Fix database connection pooling",
    project: "Mobile App",
    due: "Oct 12",
    // priority: "Medium",
    statusColor: "text-yellow-600",
  },
  {
    title: "Code review for payment module",
    project: "E-commerce",
    due: "Oct 5",
    // priority: "Completed",
    statusColor: "text-green-600",
  },
  {
    title: "Design new UI for Admin Dashboard",
    project: "Website Redesign",
    due: "Nov 3",
    // priority: "Low",
    statusColor: "text-blue-600",
  },
];
// mb-6 bg-blue-800 text-white rounded-lg mx-0 p-6 shadow-md h-16 flex items-center

export default function AllTasks() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 bg-blue-900 text-white rounded-lg mx-0 p-6 shadow-md h-16 flex items-center">All Tasks</h1>
      <div className="">
        <table className="min-w-full border-collapse bg-white">
          <thead>
            <tr className="text-left bg-blue-800 text-white">
              <th className="p-3 font-semibold">Task</th>
              <th className="p-3 font-semibold">Project</th>
              <th className="p-3 font-semibold">Due Date</th>
              {/* <th className="p-3 font-semibold">Priority</th> */}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="p-3 font-medium text-gray-800">{task.title}</td>
                <td className="p-3 text-gray-600">{task.project}</td>
                <td className="p-3 text-gray-600">{task.due}</td>
                {/* <td className={`p-3 font-semibold ${task.statusColor}`}>
                  {task.priority}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
