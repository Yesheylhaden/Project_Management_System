import { useNavigate } from "react-router-dom";

export default function ExportButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/export")}
      className="px-6 py-2 sm:px-5 sm:py-2 text-base sm:text-sm font-medium text-black border border-gray-300 rounded-xl 
                 bg-white hover:bg-gray-100 active:scale-95 transition-all duration-200 
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      Export
    </button>
  );
}
