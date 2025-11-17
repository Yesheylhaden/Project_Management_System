import React from "react";

export default function TaskItem({ task, project, due, status }) {
  const color =
    status === "High Priority"
      ? "text-red-600"
      : status === "Medium Priority"
      ? "text-yellow-600"
      : status === "Completed"
      ? "text-green-600"
      : "text-gray-600";

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border mb-3">
      <h4 className="font-semibold">{task}</h4>
      <p className="text-sm text-gray-500">
        Project: {project} • Due: {due}
      </p>
      <span className={`text-sm font-medium ${color}`}>{status}</span>
    </div>
  );
}
