import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "January", Budget: 50000, Actual: 48000 },
  { name: "February", Budget: 60000, Actual: 62000 },
  { name: "March", Budget: 55000, Actual: 50000 },
  { name: "April", Budget: 70000, Actual: 68000 },
  { name: "May", Budget: 80000, Actual: 85000 },
];

export default function BudgetChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Budget" stroke="#2563eb" />
          <Line type="monotone" dataKey="Actual" stroke="#f97316" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
