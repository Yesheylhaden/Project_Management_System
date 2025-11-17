export default function ProjectTable() {
  const data = [
    { name: "Website Redesign", manager: "John Smith", budget: "$53,000", cost: "$42,300", variance: "+$7,700", status: "On Budget" },
    { name: "Mobile App Launch", manager: "Alice Johnson", budget: "$120,000", cost: "$98,500", variance: "+$21,500", status: "On Budget" },
    { name: "Apollo", manager: "Robert Brown", budget: "$75,000", cost: "$86,250", variance: "-$11,250", status: "Over Budget" },
    { name: "Data Migration", manager: "Emily Davis", budget: "$65,000", cost: "$63,800", variance: "+$1,200", status: "At Risk" },
  ];
  return (
    <div className="bg-white rounded-xl shadow-sm mt-6 p-4">
      <h3 className="text-lg font-semibold mb-2">Project Financial Summary</h3>
      <table className="w-full text-sm">
        <thead className="text-gray-600 border-b">
          <tr>
            <th className="text-left py-2">Project Name</th>
            <th>Manager</th>
            <th>Budget</th>
            <th>Actual Cost</th>
            <th>Variance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p,i)=>(
            <tr key={i} className="border-b">
              <td className="py-2">{p.name}</td>
              <td>{p.manager}</td>
              <td>{p.budget}</td>
              <td>{p.cost}</td>
              <td>{p.variance}</td>
              <td>
                <span className={`px-2 py-1 rounded text-xs ${
                  p.status==="On Budget"?"bg-green-100 text-green-700":
                  p.status==="Over Budget"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-700"
                }`}>{p.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
