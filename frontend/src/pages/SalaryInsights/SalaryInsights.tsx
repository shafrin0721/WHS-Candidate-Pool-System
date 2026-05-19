import { useMemo, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { SalaryBarChart, SalaryDonutChart } from "../../components/SalaryChart";
import { fieldOptions } from "../../data/reportsData";
import { experienceOptions, salaryRangeData } from "../../data/salaryData";
import "./SalaryInsights.css";

type SalaryFilters = {
  field: string;
  experience: string;
  fromDate: string;
  toDate: string;
};

const initialFilters: SalaryFilters = {
  field: "All Fields",
  experience: "All Experience",
  fromDate: "2026-04-01",
  toDate: "2026-05-19",
};

const money = (value: number) => `$${Math.round(value).toLocaleString("en-US")}`;
const isDateRangeValid = (fromDate: string, toDate: string) => Boolean(fromDate && toDate && toDate >= fromDate);

const salaryDistribution = [
  { field: "0 - 40K", candidates: 96 },
  { field: "40K - 60K", candidates: 246 },
  { field: "60K - 80K", candidates: 412 },
  { field: "80K - 100K", candidates: 568 },
  { field: "100K - 150K", candidates: 674 },
  { field: "150K - 200K", candidates: 352 },
  { field: "200K+", candidates: 188 },
];

const experienceRows = [
  { experience: "0 - 2 Years", minimum: 47500, maximum: 72300 },
  { experience: "2 - 4 Years", minimum: 60300, maximum: 95400 },
  { experience: "4 - 6 Years", minimum: 80200, maximum: 132600 },
  { experience: "6+ Years", minimum: 110500, maximum: 185700 },
];

const overviewRows = [
  { label: "Average Minimum Salary", value: "$72,500" },
  { label: "Average Maximum Salary", value: "$125,300" },
  { label: "Highest Salary Range", value: "$200K+" },
  { label: "Total Candidates", value: "2,458" },
];

const SalaryInsights = () => {
  const [draftFilters, setDraftFilters] = useState<SalaryFilters>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<SalaryFilters>(initialFilters);
  const [showDateError, setShowDateError] = useState(false);
  const dateRangeValid = isDateRangeValid(draftFilters.fromDate, draftFilters.toDate);

  const filterMultiplier = useMemo(() => {
    if (appliedFilters.field === "All Fields" && appliedFilters.experience === "All Experience") {
      return 1;
    }

    if (appliedFilters.field !== "All Fields" && appliedFilters.experience !== "All Experience") {
      return 0.46;
    }

    return 0.72;
  }, [appliedFilters]);

  const filteredSalaryDistribution = useMemo(
    () =>
      salaryDistribution.map((item) => ({
        ...item,
        candidates: Math.round(item.candidates * filterMultiplier),
      })),
    [filterMultiplier],
  );

  const filteredExperienceRows = useMemo(
    () =>
      experienceRows.map((row) => ({
        ...row,
        minimum: Math.round(row.minimum * filterMultiplier),
        maximum: Math.round(row.maximum * filterMultiplier),
      })),
    [filterMultiplier],
  );

  const updateFromDate = (value: string) => {
    setDraftFilters((filters) => {
      if (value && filters.toDate && filters.toDate < value) {
        setShowDateError(true);
        return { ...filters, fromDate: value, toDate: "" };
      }

      setShowDateError(false);
      return { ...filters, fromDate: value };
    });
  };

  const updateToDate = (value: string) => {
    if (draftFilters.fromDate && value && value < draftFilters.fromDate) {
      setShowDateError(true);
      setDraftFilters((filters) => ({ ...filters, toDate: "" }));
      return;
    }

    setShowDateError(false);
    setDraftFilters((filters) => ({ ...filters, toDate: value }));
  };

  return (
    <div className="page-stack salary-insights-page">
      <div className="page-title-block">
        <h1>Salary Insights</h1>
        <p>Insights about salary ranges</p>
      </div>

      <section className="admin-panel filter-panel">
        <div className="salary-filter-grid">
          <label className="admin-field">
            <span className="admin-label">Field</span>
            <select
              className="admin-input"
              value={draftFilters.field}
              onChange={(event) => setDraftFilters((filters) => ({ ...filters, field: event.target.value }))}
            >
              {fieldOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="admin-field">
            <span className="admin-label">Experience</span>
            <select
              className="admin-input"
              value={draftFilters.experience}
              onChange={(event) => setDraftFilters((filters) => ({ ...filters, experience: event.target.value }))}
            >
              {experienceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <div>
            <div className="admin-date-grid">
              <label className="admin-field">
                <span className="admin-label">From Date</span>
                <input className="admin-input" type="date" value={draftFilters.fromDate} onChange={(event) => updateFromDate(event.target.value)} />
              </label>
              <label className="admin-field">
                <span className="admin-label">To Date</span>
                <input
                  className="admin-input"
                  type="date"
                  value={draftFilters.toDate}
                  min={draftFilters.fromDate}
                  onChange={(event) => updateToDate(event.target.value)}
                />
              </label>
            </div>
            {showDateError ? <p className="admin-validation">To Date cannot be earlier than From Date.</p> : null}
          </div>
          <button
            type="button"
            className="admin-button admin-button-primary"
            onClick={() => setAppliedFilters(draftFilters)}
            disabled={!dateRangeValid}
          >
            <FiFilter />
            Apply
          </button>
        </div>
      </section>

      <section className="salary-top-grid">
        <div className="admin-panel chart-panel salary-distribution-card">
          <h2>Salary Distribution <span>(Next 7 Years)</span></h2>
          <p>Distribution by salary</p>
          <SalaryBarChart data={filteredSalaryDistribution} />
        </div>

        <section className="admin-panel salary-overview-card">
          <h2>Overview</h2>
          <div className="salary-overview-list">
            {overviewRows.map((row) => (
              <div className="salary-overview-row" key={row.label}>
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="salary-bottom-grid">
        <div className="admin-panel chart-panel salary-donut-card">
          <h2>Candidates by Salary Range</h2>
          <SalaryDonutChart data={salaryRangeData} />
        </div>

        <section className="admin-panel table-panel salary-table-card">
          <div className="panel-header">
            <h2>Salary Range by Experience</h2>
          </div>
          <div className="table-scroll">
            <table className="admin-table salary-experience-table">
              <thead>
                <tr>
                  <th>Experience</th>
                  <th>Avg. Min Salary</th>
                  <th>Avg. Max Salary</th>
                </tr>
              </thead>
              <tbody>
                {filteredExperienceRows.map((row) => (
                  <tr key={row.experience}>
                    <td className="table-primary">{row.experience}</td>
                    <td>{money(row.minimum)}</td>
                    <td className="table-strong">{money(row.maximum)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SalaryInsights;
