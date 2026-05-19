import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  icon?: ReactNode;
};

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="stat-card">
    <div className="stat-card-top">
      <div>
        <p className="stat-card-title">{title}</p>
        <p className="stat-card-value">{value}</p>
      </div>
      {icon ? <div className="stat-card-icon">{icon}</div> : null}
    </div>
  </div>
);

export default StatCard;
