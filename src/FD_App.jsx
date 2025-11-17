import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./components/FD_Sidebar";
import Header from "./components/FD_Header";
import SummaryCard from "./components/FD_SummaryCard";
import ProjectTable from "./components/FD_ProjectTable";
import BudgetChart from "./components/FD_BudgetChart";
import NewReport from "./pages/NewReport";
import Projects from "./pages/TableView";
import InvoiceAndBills from "./pages/InvoiceAndBills";
import TableView from "./pages/TableView";
import MyProfile from "./pages/MyProfile";
import Dashboard from "./pages/Dashboard";

// ✅ App Routes
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-report" element={<NewReport />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/invoice-bills" element={<InvoiceAndBills />} />
        <Route path="/table-view" element={<TableView />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}
