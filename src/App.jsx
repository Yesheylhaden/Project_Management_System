import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Developer pages
import DeveloperDashboard from "./pages/DeveloperDashboard";
import DeveloperProfile from "./pages/DD_Profile";
import ViewAllProjects from "./pages/DD_ViewAllProjects";
import ViewAllTasks from "./pages/DD_ViewAllTasks";
import ViewAllActivities from "./pages/DD_ViewAllActivities";
import DeveloperEditProfile from "./pages/DD_EditProfile";

// Admin & Manager pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminProfile from "./pages/AdminProfile";
import ManagerDashboard from "./pages/ManagerDashboard";
import ManagerProfile from "./pages/ManagerProfile";

// Auth
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotPassword";
import Login from "./pages/login";

// Finance pages
import FinanceDashboard from "./pages/FinanceDashboard";
import NewReport from "./pages/FD_NewReport";
import Projects from "./pages/FD_TableView";
import InvoiceAndBills from "./pages/FD_InvoiceAndBills";
import TableView from "./pages/FD_TableView";
import MyProfile from "./pages/FD_MyProfile";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Signup & ForgotPassword */}
        <Route path="/" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        {/* Login/Register toggle */}
        <Route path="/login" element={<Login />} />

        {/* Manager */}
        <Route path="/managerDashboard" element={<ManagerDashboard />} />
        <Route path="/managerProfile" element={<ManagerProfile />} />

        {/* Admin */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/adminProfile" element={<AdminProfile />} />

        {/* Developer routes */}
        <Route path="DeveloperDashboard" element={<DeveloperDashboard />} />
        <Route path="DeveloperProfile" element={<DeveloperProfile />} />
        <Route path="DeveloperProjects" element={<ViewAllProjects />} />
        <Route path="Developertasks" element={<ViewAllTasks />} />
        <Route path="DeveloperActivities" element={<ViewAllActivities />} />
        <Route path="DeveloperEdit-Profile" element={<DeveloperEditProfile />} />

        {/* Finance routes */}
        <Route path="/FinanceDashboard" element={<FinanceDashboard />} />
        <Route path="/NewReport" element={<NewReport />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/TableView" element={<TableView />} />
        <Route path="/InvoiceBills" element={<InvoiceAndBills />} />
        <Route path="/Profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}