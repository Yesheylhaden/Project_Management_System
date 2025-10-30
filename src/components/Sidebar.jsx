import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const menuItems = [
    { label: "Finance Dashboard", path: "/" },
    { label: "Invoice and Bills", path: "/invoice-bills" },
    { label: "Report", path: "/new-report" },
    { label: "Table View", path: "/table-view" },
    { label: "My Profile", path: "/profile" },
  ];

  return (
    <aside className="w-60 bg-white border-r p-4 flex flex-col items-center shadow-md">
      {/* Logo and Title */}
      <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
      <h2 className="font-bold text-center text-gray-700 mb-6">
        Thimphu TechPark
        <br />
        <span className="text-xs text-gray-500 font-medium">
          BHUTAN’S FIRST IT PARK
        </span>
      </h2>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-3 w-full">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="w-full bg-gray-100 hover:bg-blue-100 text-gray-700 font-medium py-2 rounded-lg text-center transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
