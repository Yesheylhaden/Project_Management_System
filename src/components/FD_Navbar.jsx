import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/FD_logo.png"; 
import ProfileLogoModal from "../pages/DD_ProfileLogoModal"; // Profile modal component

export default function FinanceNavbar() {
  const location = useLocation();

  const navItems = [
    { name: "Finance Dashboard", path: "/FinanceDashboard" },
    { name: "Invoice and Bills", path: "/InvoiceBills" },
    { name: "Report", path: "/NewReport" },
    { name: "Table View", path: "/TableView" },
    { name: "Profile", path: "/Profile" },
  ];

  return (
    <nav className="bg-white shadow-sm flex justify-between items-center px-8 py-3 sticky top-0 z-50">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="logo"
          className="h-10 w-10 object-cover rounded-md"
        />
        <div>
          <p className="text-sm font-semibold text-gray-700">Thimphu TechPark</p>
          <p className="text-xs text-gray-500">BHUTAN’S FIRST IT PARK</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 items-center font-medium text-gray-700">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`
              relative px-2 py-1 transition-all duration-200
              ${location.pathname === item.path ? "text-blue-600 font-semibold" : "hover:text-blue-600"}
            `}
          >
            {item.name}
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
  );
}
