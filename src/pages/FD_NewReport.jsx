import React, { useState } from "react";
import FinanceNavbar from "../components/FD_Navbar"; // Restoring the original import as requested

// MOCK COMPONENT definition has been removed.

export default function NewReport() {
  const initialFormState = {
    reportName: "",
    reportType: "",
    description: "",
    dataRange: "Last Week",
    groupBy: "Projects",
    includeData: [
      "Budget Information",
      "Actual Costs",
      "Variance Analysis",
    ],
  };

  const [formData, setFormData] = useState(initialFormState);
  const [message, setMessage] = useState(null); // For showing confirmation messages

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        includeData: checked
          ? [...prev.includeData, value]
          : prev.includeData.filter(item => item !== value),
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setMessage({ type: 'info', text: 'Form has been cleared (Cancelled).' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handlePreview = () => {
    console.log("Previewing Report with data:", formData);
    setMessage({ type: 'preview', text: `Preparing preview for report: ${formData.reportName || 'Untitled Report'}` });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleGenerateReport = (e) => {
    e.preventDefault();
    if (!formData.reportName || !formData.reportType) {
      setMessage({ type: 'error', text: 'Please fill out Report Name and Report Type.' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    
    // Simulate report generation process
    console.log("Generating Report with data:", formData);
    setMessage({ type: 'success', text: `Report '${formData.reportName}' generation initiated successfully!` });
    
    // Optional: clear form after successful generation
    // setFormData(initialFormState); 
    
    setTimeout(() => setMessage(null), 4000);
  };

  const dataOptions = [
    "Budget Information",
    "Actual Costs",
    "Variance Analysis",
    "Forecast Data",
    "Invoice Details",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <FinanceNavbar /> {/* Using the imported component, which may cause an error */}

      {/* Message Modal/Toast */}
      {message && (
        <div className="fixed top-4 right-4 z-50">
          <div 
            className={`px-4 py-3 rounded-lg shadow-xl text-white font-semibold transition-all duration-300 transform ${
              message.type === 'success' ? 'bg-green-600' : 
              message.type === 'error' ? 'bg-red-600' : 
              message.type === 'preview' ? 'bg-yellow-600' : 'bg-blue-600'
            }`}
          >
            {message.text}
          </div>
        </div>
      )}

      {/* Main Content Area (Below the Navbar) */}
      <main className="flex-1 p-8">
        <div className="bg-blue-900 p-6 rounded-lg mb-8 text-white">
            <h1 className="text-2xl font-bold mb-2">Generate New Report</h1>
            <p className="text-gray-200">
              Create custom financial reports based on your criteria.
            </p>
        </div>

        <form onSubmit={handleGenerateReport} className="bg-white rounded-xl shadow-sm p-6">
          {/* Report Details */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6 text-blue-900">
              Report Configuration
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-black">
                  Report Name *
                </label>
                <input
                  type="text"
                  name="reportName"
                  placeholder="e.g., Q3 Budget Variance Analysis"
                  value={formData.reportName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-500 placeholder-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Report Type *
                </label>
                <input
                  type="text"
                  name="reportType"
                  placeholder="Report Type"
                  value={formData.reportType}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-black">
                Description (Optional)
              </label>
              <textarea
                name="description"
                placeholder="Describe the purpose of this project..."
                value={formData.description}
                onChange={handleChange}
                // FIX: Corrected typo 'placeholde-xs' to 'placeholder-xs'
                className="w-full mt-1 p-2 border rounded-md focus:outline-blue-500 placeholder-xs"
                rows="5"
              ></textarea>
            </div>
          </div>

          {/* Data Selection */}
          <div className="mb-6 border-t pt-4">
            <h3 className="text-xl font-bold mb-6 text-blue-900">Data Selection</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="dataRange"
                placeholder="Last Week"
                value={formData.dataRange}
                onChange={handleChange}
                className="p-2 border rounded-md focus:outline-blue-500"
              />
              <input
                type="text"
                name="groupBy"
                placeholder="Projects"
                value={formData.groupBy}
                onChange={handleChange}
                className="p-2 border rounded-md focus:outline-blue-500"
              />
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-sm">Include Data</h4>
            
              <div className="grid md:grid-cols-3  text-sm">
                {dataOptions.map((item) => (
                  <div className="flex items-center gap-1 ">
                     <div className="flex items-start">
                  <label 
                    key={item} 
                    className=" cursor-pointer hover:bg-gray-50 p-1 rounded transition duration-150"
                  >
                    {/* <h5>{item}</h5> */}
                     
                    <input
                      type="checkbox"
                      name="includeData"
                      value={item}
                      checked={formData.includeData.includes(item)}
                      onChange={handleChange}
                      className="accent-blue-600 mr-2 flex-5" 
                    />
                   
                  </label>
                  </div>
                  <h5>  {item} </h5>
                 
                 
                  </div>
                 
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
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button 
              type="button" // Important for preventing form submission
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
            >
              Cancel
            </button>
            <button 
              type="button" // Important for preventing form submission
              onClick={handlePreview}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 transition shadow-sm"
            >
              👁️ Preview
            </button>
            <button 
              type="submit" // Will trigger handleGenerateReport via form onSubmit
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Generate Report
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}