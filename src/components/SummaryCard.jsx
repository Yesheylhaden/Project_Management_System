export default function SummaryCard({ title, value, note, color }) {
  const colorMap = { green: "text-green-600", red: "text-red-600", yellow: "text-yellow-600" };
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border">
      <h3 className="text-sm text-gray-500 mb-1 font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`${colorMap[color]} text-sm mt-1`}>{note}</p>
    </div>
  );
}
