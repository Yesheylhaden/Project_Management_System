import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/FinanceDashboard";
import NewReport from "./pages/FD_NewReport";
import Projects from "./pages/FD_TableView";
import InvoiceAndBills from "./pages/FD_InvoiceAndBills";
import TableView from "./pages/FD_TableView";
import MyProfile from "./pages/FD_MyProfile";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Financial Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Create New Report */}
        <Route path="/new-report" element={<NewReport />} />

        {/* Projects / Table View */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/table-view" element={<TableView />} />

        {/* Invoices & Bills */}
        <Route path="/invoice-bills" element={<InvoiceAndBills />} />

        {/* User Profile */}
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}
