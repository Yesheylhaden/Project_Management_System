import React from "react";

export default function DashboardCard({ title, value }) {
  const colorStyles = {
    "Active Projects": {
      bar: "bg-green-500",
      text: "text-green-600",
    },
    "Team Members": {
      bar: "bg-pink-500",
      text: "text-pink-600",
    },
    "Completed Tasks": {
      bar: "bg-yellow-500",
      text: "text-yellow-600",
    },
    "Overdue Tasks": {
      bar: "bg-red-500",
      text: "text-red-600",
    },
    Default: {
      bar: "bg-gray-500",
      text: "text-gray-600",
    },
  };

  const styles = colorStyles[title] || colorStyles.Default;

  return (
    <div className="relative w-[288px] h-40 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-5">
      {/* Left Color Bar */}
      <div className={`absolute left-0 top-0 h-full w-3 rounded-l-2xl ${styles.bar}`}></div>

      {/* Value */}
      <p className={`text-4xl font-bold ${styles.text}`}>{value}</p>

      {/* Title */}
      <h3 className="text-gray-600 text-sm mt-2">{title}</h3>
    </div>
  );
}
