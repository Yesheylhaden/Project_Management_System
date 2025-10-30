import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'; 
import ProfileLogoModal from "../pages/ProfileLogoModal"; // ✅ Import the modal

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-white shadow-sm flex justify-between items-center px-8 py-3">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="logo"
          className="h-8"
        />
        <div>
          <p className="text-sm font-semibold">Thimphu TechPark</p>
          <p className="text-xs text-gray-500">BHUTAN’S FIRST IT PARK</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gray-700 font-medium items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:text-blue-600 ${
              location.pathname === item.path ? "text-blue-600" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* ✅ Replace static avatar with ProfileLogoModal */}
        <ProfileLogoModal />
      </div>
    </nav>
  );
}
