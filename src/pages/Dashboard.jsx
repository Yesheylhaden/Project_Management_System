import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import ProjectTable from "../components/ProjectTable";
import BudgetChart from "../components/BudgetChart";
import ExportButton from "./Export";

export default function Dashboard() {
  const navigate = useNavigate();

  // Example placeholder for export functionality
  const handleExport = () => {
    console.log("Exporting data...");
  };

  return (
    <div className="flex min-h-screen bg-[#E6F3FF]">
      <Sidebar />

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Financial Dashboard
          </h1>
          <div className="flex gap-3">
            <ExportButton />
            <button
              onClick={() => navigate("/new-report")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              + New Report
            </button>
          </div>
        </div>

        {/* Alerts */}
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

        {/* Project Summary */}
        <ProjectTable />

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
