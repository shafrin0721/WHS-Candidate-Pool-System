import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts/umd/Recharts";

type SalaryBarChartProps = {
  data: Array<{ field: string; candidates: number }>;
};

type SalaryDonutChartProps = {
  data: Array<{ name: string; value: number }>;
};

const colors = ["#2563eb", "#38bdf8", "#22c55e", "#f59e0b", "#8b5cf6"];

export const SalaryBarChart = ({ data }: SalaryBarChartProps) => (
  <div className="chart-box salary-bar-chart-box">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 18, right: 8, left: 0, bottom: 2 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis dataKey="field" tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
        <Tooltip formatter={(value) => `${Number(value).toLocaleString("en-US")} candidates`} />
        <Bar dataKey="candidates" name="Candidates" fill="#6b8cff" radius={[5, 5, 0, 0]} maxBarSize={42}>
          <LabelList dataKey="candidates" position="top" fill="#4f6ddf" fontSize={10} fontWeight={700} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const SalaryDonutChart = ({ data }: SalaryDonutChartProps) => (
  <div className="salary-donut-wrap">
    <div className="chart-box salary-donut-chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={42} outerRadius={78} paddingAngle={2}>
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="salary-donut-legend">
      {data.map((entry, index) => (
        <div className="salary-donut-legend-row" key={entry.name}>
          <span className="salary-donut-dot" style={{ backgroundColor: colors[index % colors.length] }} />
          <span>{entry.name}</span>
          <strong>{entry.value.toLocaleString("en-US")}</strong>
        </div>
      ))}
    </div>
  </div>
);
