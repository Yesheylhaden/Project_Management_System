import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import BudgetChart from "../components/BudgetChart";
import ProjectTable from "../components/ProjectTable";
import { useNavigate } from "react-router-dom";

export default function FinanceDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Financial Dashboard</h1>
          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
              Export
            </button>
            <button
              onClick={() => navigate("/new-report")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              + New Report
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <SummaryCard
            title="Total Budget"
            value="$310,000"
            note="+8% from last quarter"
            color="green"
          />
          <SummaryCard
            title="Total Cost"
            value="$290,000"
            note="–5% under budget"
            color="red"
          />
          <SummaryCard
            title="Projects"
            value="4 Active"
            note="2 new this month"
            color="yellow"
          />
          <SummaryCard
            title="Variance"
            value="+$12,950"
            note="Positive trend"
            color="green"
          />
        </div>

        {/* Chart */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Budget vs Actual</h2>
          <BudgetChart />
        </div>

        {/* Project Table */}
        <ProjectTable />
      </main>
    </div>
  );
}
