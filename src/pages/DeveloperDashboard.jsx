import { Link } from "react-router-dom";
import React from "react";
import DashboardCard from "../components/DD_DashboardCard";
import ProgressBar from "../components/DD_ProgressBar";
import TaskItem from "../components/DD_TaskItem";
import Navbar from "../components/DD_Navbar";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-blue-50 text-gray-800">

      {/* Navbar (Fixed Top Component) */}
      <Navbar />

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto px-8 pb-10">

        {/* Welcome Banner */}
        <section className="bg-blue-900 text-white rounded-lg my-6 p-6 shadow-md h-32">
          <h1 className="text-2xl font-semibold">Welcome back, Tandin!</h1>
          <p className="text-sm mt-2">
            You have 7 projects in progress and 5 tasks due this week.
          </p>
        </section>

        {/* Summary Cards */}
        <div className="flex flex-wrap gap-5">
          <DashboardCard title="Active Projects" value="7" />
          <DashboardCard title="Team Members" value="12" />
          <DashboardCard title="Completed Tasks" value="23" />
          <DashboardCard title="Overdue Tasks" value="5" />
        </div>

        {/* My Projects */}
        <section className="mt-8">
          <div className="flex justify-between items-center bg-blue-900 text-white rounded-lg p-6 shadow-md h-16">
            <h2 className="text-lg font-bold">My Projects</h2>
            <Link
              to="/DeveloperProjects"
              className="text-white hover:underline text-sm font-medium"
            >
              View All
            </Link>
          </div>

          <div className="flex gap-6 mt-4">
            <ProgressBar
              label="Website Redesign"
              progress={30}
              team={5}
              due="Oct 15, 2023"
            />

            <ProgressBar
              label="Mobile App Development"
              progress={52}
              team={8}
              due="Nov 1, 2023"
            />
          </div>
        </section>

        {/* My Tasks + Recent Activity */}
        <section className="grid grid-cols-3 gap-6 mt-8">

          {/* My Tasks */}
          <div className="col-span-2">
            <div className="flex justify-between items-center bg-blue-900 text-white rounded-lg p-6 shadow-md h-16">
              <h2 className="text-lg font-semibold">My Tasks</h2>

              <Link
                to="/Developertasks"
                className="text-white text-sm font-medium hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="mt-3">
              <TaskItem
                task="Implement user authentication API"
                project="Website Redesign"
                due="Tomorrow"
              />

              <TaskItem
                task="Fix database connection pooling"
                project="Mobile App"
                due="Oct 12"
              />

              <TaskItem
                task="Code review for payment module"
                project="E-commerce"
                due="Oct 5"
              />
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="flex justify-between items-center bg-blue-900 text-white rounded-lg p-6 shadow-md h-16">
              <h2 className="text-lg font-semibold">Recent Activity</h2>

              <Link
                to="/DeveloperActivities"
                className="text-white text-sm font-medium hover:underline"
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

      </main>
    </div>
  );
}