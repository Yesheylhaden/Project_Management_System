export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Financial Dashboard</h1>
      <div className="flex gap-3">
        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">Export</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ New Report</button>
      </div>
    </div>
  );
}
