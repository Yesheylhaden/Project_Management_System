import React from "react";
import Sidebar from "../components/FD_Sidebar";
import SummaryCard from "../components/FD_SummaryCard";
import BudgetChart from "../components/FD_BudgetChart";
import ProjectTable from "../components/FD_ProjectTable";
import { useNavigate } from "react-router-dom";

export default function FinanceDashboard() {
  const navigate = useNavigate();

  const handleExport = () => {
    alert("clicked");
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
      ), // Wrap in quotes
    ];
    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "financial_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar className="z-10" />

      <main className="flex-1 p-8 relative z-20">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Financial Dashboard
          </h1>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleExport}
              className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
              Export one
            </button>
            <button
              onClick={() => navigate("/new-report")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + New Report
            </button>
          </div>
        </div>

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

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Budget vs Actual</h2>
          <BudgetChart />
        </div>

        {/* Added top margin to separate from chart */}
        <div className="mt-8">
          <ProjectTable />
        </div>
      </main>
    </div>
  );
}
