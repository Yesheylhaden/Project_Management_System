import React from "react";
import logo from '../assets/logo.png'; 

export default function Navbar() {
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
      <div className="flex space-x-6 text-gray-700 font-medium items-center">
        <a href="#" className="hover:text-blue-600">
          Dashboard
        </a>
        <a href="#" className="hover:text-blue-600">
          Profile
        </a>
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
          T
        </div>
      </div>
    </nav>
  );
}
