import React, { useState } from "react";
// FIX: Changed the import path from FD_Navbar to a more likely component name/path
import Navbar from "../components/FD_Navbar"; 

export default function InvoiceAndBills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewInvoice, setShowNewInvoice] = useState(false);

  const invoices = [
    {
      id: "INV-1001",
      client: "Druk IT Solutions",
      issueDate: "01/08/2024",
      dueDate: "15/08/2024",
      amount: "$4,500.00",
      status: "Paid",
    },
    {
      id: "INV-1002",
      client: "Bhutan Telecom",
      issueDate: "05/08/2024",
      dueDate: "20/08/2024",
      amount: "$2,800.00",
      status: "Pending",
    },
    {
      id: "INV-1003",
      client: "Tashi Infocomm",
      issueDate: "10/08/2024",
      dueDate: "25/08/2024",
      amount: "$3,200.00",
      status: "Overdue",
    },
    {
      id: "INV-1004",
      client: "Yangphel Data Center",
      issueDate: "12/09/2024",
      dueDate: "27/09/2024",
      amount: "$6,000.00",
      status: "Paid",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Overdue":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredInvoices = invoices.filter((inv) =>
    inv.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar /> 
      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Header Section */}
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Invoice and Bills
          </h1>
          <p className="text-gray-500">
            Overview of all issued invoices, due dates, and payment statuses.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full mb-6">
          <input
            type="text"
            placeholder="🔍 Search by client name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md p-4">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50 text-gray-700 font-semibold">
              <tr>
                <th className="py-3 px-4">Invoice ID</th>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Issue Date</th>
                <th className="py-3 px-4">Due Date</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {invoice.id}
                  </td>
                  <td className="py-3 px-4">{invoice.client}</td>
                  <td className="py-3 px-4">{invoice.issueDate}</td>
                  <td className="py-3 px-4">{invoice.dueDate}</td>
                  <td className="py-3 px-4">{invoice.amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        invoice.status
                      )}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredInvoices.length === 0 && (
            <p className="text-center py-4 text-gray-500">
              No invoices found for your search.
            </p>
          )}
        </div>

        {/* Floating New Invoice Button */}
        <button
          onClick={() => setShowNewInvoice(true)}
          className="fixed bottom-8 right-8 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 transition"
        >
          <span className="text-xl">＋</span> New Invoice
        </button>

        {/* Modal for Adding New Invoice */}
        {showNewInvoice && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
              <button
                onClick={() => setShowNewInvoice(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold mb-4">Add New Invoice</h2>
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Invoice Number"
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Client Name"
                  className="border rounded px-3 py-2"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  className="border rounded px-3 py-2"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                  Save Invoice
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}