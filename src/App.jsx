import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />
      <Dashboard />
    </div>
  );
}
