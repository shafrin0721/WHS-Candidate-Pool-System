import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts/umd/Recharts";

type SalaryDonutChartProps = {
  data: Array<{ name: string; value: number }>;
};

const colors = ["#2563eb", "#38bdf8", "#22c55e", "#f59e0b", "#8b5cf6"];

const SalaryDonutChart = ({ data }: SalaryDonutChartProps) => (
  <div className="chart-box">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={62} outerRadius={108} paddingAngle={3} label>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default SalaryDonutChart;
