import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts/umd/Recharts";

type SalaryBarChartProps = {
  data: Array<{ field: string; minimum: number; maximum: number }>;
};

const SalaryBarChart = ({ data }: SalaryBarChartProps) => (
  <div className="chart-box">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis dataKey="field" tick={{ fill: "#64748b", fontSize: 12 }} />
        <YAxis tick={{ fill: "#64748b", fontSize: 12 }} tickFormatter={(value) => `$${Number(value) / 1000}K`} />
        <Tooltip formatter={(value) => `$${Number(value).toLocaleString("en-US")}`} />
        <Legend />
        <Bar dataKey="minimum" name="Average Minimum" fill="#2563eb" radius={[6, 6, 0, 0]} />
        <Bar dataKey="maximum" name="Average Maximum" fill="#38bdf8" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SalaryBarChart;
