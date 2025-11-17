import React from "react";

export default function ProgressBar({ label, progress, team, due }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex-1">
      <div className="flex justify-between text-gray-600 text-sm">
        <p>{label}</p>
        <p>Team: {team}</p>
      </div>
      <p className="text-sm text-gray-500 mt-1">Due: {due}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mt-1">Progress: {progress}%</p>
    </div>
  );
}
