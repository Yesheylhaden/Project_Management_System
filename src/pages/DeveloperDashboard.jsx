import { Link } from "react-router-dom";
import React from "react";
import DashboardCard from "../components/DD_DashboardCard";
import ProgressBar from "../components/DD_ProgressBar";
import TaskItem from "../components/DD_TaskItem";

export default function Dashboard() {
  return (
    <div>
      {/* Welcome Banner */}
      <section className="bg-blue-800 text-white rounded-lg mx-8 my-6 p-6 shadow-md">
        <h1 className="text-2xl font-semibold">Welcome back, Tandin!</h1>
        <p className="text-sm mt-2">
          You have 3 projects in progress and 12 tasks due this week.
        </p>
      </section>

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-5 px-8">
        <DashboardCard title="Active Projects" value="7" />
        <DashboardCard title="Team Members" value="12" />
        <DashboardCard title="Completed Tasks" value="23" />
        <DashboardCard title="Overdue Tasks" value="5" />
      </div>

      {/* My Projects */}
      <section className="mx-8 mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">My Projects</h2>
          <Link
            to="/projects"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            View All
          </Link>
        </div>
        <div className="flex gap-6 mt-4">
          <ProgressBar
            label="Website Redesign"
            progress={0}
            team={5}
            due="Oct 15, 2023"
          />
          <ProgressBar
            label="Mobile App Development"
            progress={42}
            team={8}
            due="Nov 1, 2023"
          />
        </div>
      </section>

      {/* My Tasks + Recent Activity */}
      <section className="grid grid-cols-3 gap-6 mx-8 my-8">
        {/* My Tasks */}
        <div className="col-span-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">My Tasks</h2>
            {/* ✅ Updated Link to go to /tasks */}
            <Link
              to="/tasks"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="mt-3">
            <TaskItem
              task="Implement user authentication API"
              project="Website Redesign"
              due="Tomorrow"
              status="High Priority"
            />
            <TaskItem
              task="Fix database connection pooling"
              project="Mobile App"
              due="Oct 12"
              status="Medium Priority"
            />
            <TaskItem
              task="Code review for payment module"
              project="E-commerce"
              due="Oct 5"
              status="Completed"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            {/* ✅ Updated Link to go to /activities */}
            <Link
              to="/activities"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="bg-white mt-3 p-4 rounded-xl shadow-sm">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>👤 Added new user “Pema” as Developer</li>
              <li>👥 Appointed “Sonam” as Project Manager</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
