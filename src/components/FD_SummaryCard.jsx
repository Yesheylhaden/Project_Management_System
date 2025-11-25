import React from "react";

export default function SummaryCard({ title, value, note, color }) {
  // Define full theme (border color, text color, icon background)
  const themeMap = {
    green: {
      border: "border-l-green-500",
      text: "text-green-600",
      iconBg: "bg-green-100",
      icon: "📈",
    },
    red: {
      border: "border-l-red-500",
      text: "text-red-600",
      iconBg: "bg-red-100",
      icon: "⚠️",
    },
    yellow: {
      border: "border-l-yellow-500",
      text: "text-yellow-600",
      iconBg: "bg-yellow-100",
      icon: "⏱️",
    },
    pink: {
      border: "border-l-pink-500",
      text: "text-pink-600",
      iconBg: "bg-pink-100",
      icon: "👤",
    }
  };

  const currentTheme = themeMap[color] || themeMap.blue;

  // ⬇️ Added max-w to reduce width
  const cardClasses = `bg-white rounded-xl shadow-sm p-5 border border-l-4 ${currentTheme.border} w-64 h-45 flex-shrink-0 flex flex-col justify-between`;

  return (
    <div className={cardClasses}>
      <div className="flex justify-between items-start">
        {/* Title + Value */}
        <div>
          <h3 className="text-sm text-gray-500 mb-1 font-semibold">{title}</h3>
          <p className={`text-2xl font-bold ${currentTheme.text}`}>{value}</p>
        </div>

        {/* Icon */}
        <div className={`p-2 rounded-full ${currentTheme.iconBg} text-xl`}>
          {currentTheme.icon}
        </div>
      </div>

      {/* Note */}
      <p className={`${currentTheme.text} text-sm`}>{note}</p>
    </div>
  );
}
