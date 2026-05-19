import { useState, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "admin-button-primary",
  secondary: "admin-button-secondary",
  ghost: "admin-button-ghost",
};

export const AdminButton = ({
  children,
  icon,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`admin-button ${buttonStyles[variant]} ${className}`}
  >
    {icon}
    {children}
  </button>
);

type SelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export const FilterSelect = ({ label, value, options, onChange }: SelectProps) => (
  <label className="admin-field">
    <span className="admin-label">{label}</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="admin-input"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

type DateRangeInputProps = {
  from: string;
  to: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
};

export const isDateRangeValid = (from: string, to: string) => Boolean(from && to && to >= from);

export const DateRangeInput = ({ from, to, onFromChange, onToChange }: DateRangeInputProps) => {
  const [showDateError, setShowDateError] = useState(false);

  const handleFromChange = (value: string) => {
    onFromChange(value);

    if (value && to && to < value) {
      setShowDateError(true);
      onToChange("");
      return;
    }

    setShowDateError(false);
  };

  const handleToChange = (value: string) => {
    if (from && value && value < from) {
      setShowDateError(true);
      onToChange("");
      return;
    }

    setShowDateError(false);
    onToChange(value);
  };

  return (
    <div>
      <div className="admin-date-grid">
        <label className="admin-field">
          <span className="admin-label">From Date</span>
          <input
            type="date"
            value={from}
            onChange={(event) => handleFromChange(event.target.value)}
            className="admin-input"
          />
        </label>
        <label className="admin-field">
          <span className="admin-label">To Date</span>
          <input
            type="date"
            value={to}
            min={from}
            onChange={(event) => handleToChange(event.target.value)}
            className="admin-input"
          />
        </label>
      </div>
      {showDateError ? <p className="admin-validation">To Date cannot be earlier than From Date.</p> : null}
    </div>
  );
};

type MetricCardProps = {
  label: string;
  value: string | number;
  helper?: string;
  icon?: ReactNode;
};

export const MetricCard = ({ label, value, helper, icon }: MetricCardProps) => (
  <div className="stat-card">
    <div className="stat-card-top">
      <div>
        <p className="stat-card-title">{label}</p>
        <p className="stat-card-value">{value}</p>
      </div>
      {icon ? <div className="stat-card-icon">{icon}</div> : null}
    </div>
    {helper ? <p className="stat-card-helper">{helper}</p> : null}
  </div>
);

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export const AdminPanel = ({ children, className = "" }: PanelProps) => (
  <section className={`admin-panel ${className}`}>{children}</section>
);

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => (
  <input
    type="search"
    value={value}
    onChange={(event) => onChange(event.target.value)}
    placeholder={placeholder}
    className="admin-input"
  />
);
