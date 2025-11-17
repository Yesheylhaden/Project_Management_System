import React from "react";

export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-50 rounded-2xl shadow-sm flex flex-col justify-center items-center w-72 h-52">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
