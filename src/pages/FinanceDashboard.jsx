import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../assets/FD_logo.png"; // Your logo
import SummaryCard from "../components/FD_SummaryCard";
import ProjectTable from "../components/FD_ProjectTable";
import BudgetChart from "../components/FD_BudgetChart";
import ProfileLogoModal from "../pages/DD_ProfileLogoModal"; // Profile modal

export default function FinanceDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // CSV Export Function
  const handleExport = () => {
    const data = [
      { Project: "Website Redesign", Budget: 50000, Cost: 45000, Status: "Active" },
      { Project: "Mobile App", Budget: 80000, Cost: 78000, Status: "Completed" },
      { Project: "Marketing Campaign", Budget: 40000, Cost: 36000, Status: "Active" },
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

  // Navbar menu items
  const menuItems = [
    { label: "Finance Dashboard", path: "/FinanceDashboard" },
    { label: "Invoice and Bills", path: "/InvoiceBills" },
    { label: "Report", path: "/NewReport" },
    { label: "Table View", path: "/TableView" },
    { label: "Profile", path: "/Profile" },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm flex justify-between items-center px-8 py-3 sticky top-0 z-50">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-10 w-10 object-cover rounded-md" />
          <div>
            <p className="text-sm font-semibold text-gray-700">Thimphu TechPark</p>
            <p className="text-xs text-gray-500">BHUTAN’S FIRST IT PARK</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center font-medium text-gray-700">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`
                relative px-2 py-1 transition-all duration-200
                ${location.pathname === item.path ? "text-blue-600 font-semibold" : "hover:text-blue-600"}
              `}
            >
              {item.label}
              {/* Animated underline */}
              <span
                className={`
                  absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-200
                  ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </Link>
          ))}

          {/* Profile Modal */}
          <ProfileLogoModal />
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-900 h-23 border   px-4 py-6 rounded-lg">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-white">
              Financial Dashboard
            </h1>
            <p className="text-white text-sm mt-1">
              View budgets, costs, and project spending at a glance.
            </p>
          </div>
          <div className="flex gap-3 mb-10">
            <button
              onClick={handleExport}
              className="border px-4 py-2 rounded-lg bg-red-500 text-black hover:bg-red-600 transition "
            >
              Export CSV
            </button>

            <button
              onClick={() => navigate("/NewReport")}
              className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600"
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
        <div className="flex gap-10 mt-6 ">
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
            color="pink"
          />
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
