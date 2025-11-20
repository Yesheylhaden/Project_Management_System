import React from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/FD_Sidebar";
import SummaryCard from "../components/FD_SummaryCard";
import ProjectTable from "../components/FD_ProjectTable";
import BudgetChart from "../components/FD_BudgetChart";

export default function FinanceDashboard() {
  const navigate = useNavigate();

  // CSV Export Function
  const handleExport = () => {
    const data = [
      {
        Project: "Website Redesign",
        Budget: 50000,
        Cost: 45000,
        Status: "Active",
      },
      {
        Project: "Mobile App",
        Budget: 80000,
        Cost: 78000,
        Status: "Completed",
      },
      {
        Project: "Marketing Campaign",
        Budget: 40000,
        Cost: 36000,
        Status: "Active",
      },
    ];

    const headers = ["Project", "Budget", "Cost", "Status"];
    const csvRows = [
      headers.join(","),
      ...data.map(
        (d) => `"${d.Project}","${d.Budget}","${d.Cost}","${d.Status}"`
      ),
    ];

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "financial_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-[#E6F3FF]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Financial Dashboard
          </h1>

          <div className="flex gap-3">
            <button
              onClick={handleExport}
              className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Export CSV
            </button>

            <button
              onClick={() => navigate("/new-report")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              + New Report
            </button>
          </div>
        </div>

        {/* Alerts (same as DeveloperDashboard style) */}
        <div className="space-y-3 mt-4">
          <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
            <p className="text-red-700 font-medium">
              ⚠️ Budget Breach: Project “Apollo” is currently 15% over its
              allocated budget.
              <span className="underline cursor-pointer"> Review</span>
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
            <p className="text-yellow-700 font-medium">
              ⏰ Overdue Invoices: 3 invoices are past their due date.
              <span className="underline cursor-pointer"> View List</span>
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <SummaryCard
            title="TOTAL PORTFOLIO BUDGET"
            value="$485,750"
            note="↑ 5.2% from last quarter"
            color="green"
          />
          <SummaryCard
            title="ACTUAL COST"
            value="$328,450"
            note="As of today"
            color="yellow"
          />
          <SummaryCard
            title="VARIANCE"
            value="+$157,300"
            note="Favorable"
            color="green"
          />
        </div>

        {/* Overdue */}
        <div className="mt-4">
          <SummaryCard
            title="OVERDUE INVOICES"
            value="3"
            note="Totaling $24,500"
            color="red"
          />
        </div>

        {/* Project Summary Table */}
        <div className="mt-6">
          <ProjectTable />
        </div>

        {/* Chart */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            Budget vs Actual Spending
          </h3>
          <BudgetChart />
        </div>
      </div>
    </div>
  );
}
