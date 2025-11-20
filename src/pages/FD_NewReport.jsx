import React from "react";
import Sidebar from "../components/FD_Sidebar";

export default function NewReport() {
  return (
    <div className="flex min-h-screen bg-[#E6F3FF]">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2">Generate New Report</h1>
        <p className="text-gray-600 mb-6">
          Create custom financial reports based on your criteria.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Report Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-blue-700">
              Report Configuration
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Report Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Q3 Budget Variance Analysis"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Report Type *
                </label>
                <input
                  type="text"
                  placeholder="Report Type"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Description (Optional)
              </label>
              <textarea
                placeholder="Describe the purpose of this project..."
                className="w-full mt-1 p-2 border rounded-md focus:outline-blue-500"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* Data Selection */}
          <div className="mb-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Data Selection</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Last Week"
                className="p-2 border rounded-md focus:outline-blue-500"
              />
              <input
                type="text"
                placeholder="Projects"
                className="p-2 border rounded-md focus:outline-blue-500"
              />
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Include Data</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {[
                  "Budget Information",
                  "Actual Costs",
                  "Variance Analysis",
                  "Forecast Data",
                  "Invoice Details",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-blue-600"
                      defaultChecked={[
                        "Budget Information",
                        "Actual Costs",
                        "Variance Analysis",
                      ].includes(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Format and Delivery */}
          <div className="mb-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Format and Delivery</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="PDF Document"
                className="p-2 border rounded-md focus:outline-blue-500"
              />
              <input
                type="text"
                placeholder="Group By: Projects"
                className="p-2 border rounded-md focus:outline-blue-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Cancel
            </button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">
              👁️ Preview
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Generate Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
