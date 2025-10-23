import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Finance Dashboard", path: "/" },
    { label: "Projects", path: "#" },
    { label: "Invoice and Bills", path: "#" },
    { label: "Report", path: "/new-report" },
    { label: "Table View", path: "#" },
    { label: "My Profile", path: "#" },
  ];

  return (
    <aside className="w-60 bg-white border-r p-4 flex flex-col items-center">
      <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
      <h2 className="font-bold text-center text-gray-700 mb-6">
        Thimphu TechPark<br />
        <span className="text-xs text-gray-500">BHUTAN’S FIRST IT PARK</span>
      </h2>
      <nav className="flex flex-col gap-3 w-full">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="w-full bg-gray-100 hover:bg-blue-100 text-gray-700 font-medium py-2 rounded-lg"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
