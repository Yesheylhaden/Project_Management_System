import React from "react";

const activities = [
  {
    user: "Pema",
    action: "Added as Developer",
    time: "2 hours ago",
  },
  {
    user: "Sonam",
    action: "Appointed as Project Manager",
    time: "1 day ago",
  },
  {
    user: "Karma",
    action: "Updated task 'UI Redesign'",
    time: "2 days ago",
  },
  {
    user: "Choki",
    action: "Commented on 'API Integration'",
    time: "3 days ago",
  },
];

export default function AllActivities() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Recent Activity</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-gray-800">
                  <span className="font-semibold">{activity.user}</span> —{" "}
                  {activity.action}
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
