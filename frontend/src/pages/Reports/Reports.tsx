import { useMemo, useState } from "react";
import { FiActivity, FiBarChart2, FiFileText, FiUsers } from "react-icons/fi";
import { RecentReportsTable, ReportTable } from "../../components/ReportTable";
import StatCard from "../../components/StatCard";
import {
  availabilityOptions,
  fieldOptions,
  recentReports as initialRecentReports,
  reportCandidates,
  reportDefinitions,
  reportTypeOptions,
  statusOptions,
  type RecentReport,
} from "../../data/reportsData";
import { exportCandidateReport } from "../../utils/exportReports";
import "./Reports.css";

const summaryCards = [
  { title: "Total Candidates", value: "2,458", icon: <FiUsers /> },
  { title: "Actively Looking", value: "1,245", icon: <FiActivity /> },
  { title: "Open to Opportunities", value: "1,213", icon: <FiBarChart2 /> },
  { title: "Available Immediately", value: "798", icon: <FiUsers /> },
];

const formatDateTime = () =>
  new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(new Date())
    .replace(",", "");

const isDateRangeValid = (fromDate: string, toDate: string) => Boolean(fromDate && toDate && toDate >= fromDate);

const Reports = () => {
  const [reportType, setReportType] = useState("All Reports");
  const [field, setField] = useState("All Fields");
  const [status, setStatus] = useState("All Statuses");
  const [availability, setAvailability] = useState("All Availability");
  const [fromDate, setFromDate] = useState("2026-04-01");
  const [toDate, setToDate] = useState("2026-05-19");
  const [showDateError, setShowDateError] = useState(false);
  const [recentReports, setRecentReports] = useState<RecentReport[]>(initialRecentReports);

  const dateRangeValid = isDateRangeValid(fromDate, toDate);

  const filteredReports = useMemo(
    () => reportDefinitions.filter((report) => reportType === "All Reports" || report.name === reportType),
    [reportType],
  );

  const filteredCandidates = useMemo(
    () =>
      reportCandidates.filter((candidate) => {
        const updatedTime = new Date(candidate.updatedAt).getTime();
        const fromTime = fromDate ? new Date(fromDate).getTime() : Number.NEGATIVE_INFINITY;
        const toTime = toDate ? new Date(toDate).getTime() : Number.POSITIVE_INFINITY;

        return (
          (field === "All Fields" || candidate.field === field) &&
          (status === "All Statuses" || candidate.status === status) &&
          (availability === "All Availability" || candidate.availability === availability) &&
          updatedTime >= fromTime &&
          updatedTime <= toTime
        );
      }),
    [availability, field, fromDate, status, toDate],
  );

  const updateFromDate = (value: string) => {
    setFromDate(value);

    if (value && toDate && toDate < value) {
      setToDate("");
      setShowDateError(true);
      return;
    }

    setShowDateError(false);
  };

  const updateToDate = (value: string) => {
    if (fromDate && value && value < fromDate) {
      setToDate("");
      setShowDateError(true);
      return;
    }

    setToDate(value);
    setShowDateError(false);
  };

  const generateReport = () => {
    if (!dateRangeValid) {
      return;
    }

    const selectedReport = filteredReports[0] ?? reportDefinitions[0];
    const newReport: RecentReport = {
      id: `RPT-${Date.now()}`,
      name: selectedReport.name,
      type: selectedReport.category,
      format: "PDF",
      generatedAt: formatDateTime(),
      generatedBy: "Admin",
      records: 2458,
    };

    setRecentReports((currentReports) => [newReport, ...currentReports]);
    exportCandidateReport(selectedReport, "PDF", filteredCandidates);
  };

  return (
    <div className="page-stack">
      <div className="page-title-block">
        <h1>Reports</h1>
        <p>Generate and view reports</p>
      </div>

      <section className="admin-panel filter-panel">
        <div className="reports-filter-grid">
          <label className="admin-field">
            <span className="admin-label">Report Type</span>
            <select className="admin-input" value={reportType} onChange={(event) => setReportType(event.target.value)}>
              {reportTypeOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="admin-field">
            <span className="admin-label">Field</span>
            <select className="admin-input" value={field} onChange={(event) => setField(event.target.value)}>
              {fieldOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="admin-field">
            <span className="admin-label">Status</span>
            <select className="admin-input" value={status} onChange={(event) => setStatus(event.target.value)}>
              {statusOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="admin-field">
            <span className="admin-label">Availability</span>
            <select className="admin-input" value={availability} onChange={(event) => setAvailability(event.target.value)}>
              {availabilityOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <div>
            <div className="admin-date-grid">
              <label className="admin-field">
                <span className="admin-label">From Date</span>
                <input className="admin-input" type="date" value={fromDate} onChange={(event) => updateFromDate(event.target.value)} />
              </label>
              <label className="admin-field">
                <span className="admin-label">To Date</span>
                <input className="admin-input" type="date" value={toDate} min={fromDate} onChange={(event) => updateToDate(event.target.value)} />
              </label>
            </div>
            {showDateError ? <p className="admin-validation">To Date cannot be earlier than From Date.</p> : null}
          </div>
          <button type="button" className="admin-button admin-button-primary" onClick={generateReport} disabled={!dateRangeValid}>
            <FiFileText />
            Generate Report
          </button>
        </div>
      </section>

      <section className="stats-grid">
        {summaryCards.map((card) => (
          <StatCard key={card.title} title={card.title} value={card.value} icon={card.icon} />
        ))}
      </section>

      <ReportTable
        reports={filteredReports}
        records={2458}
        onDownload={(report, format) => exportCandidateReport(report, format, filteredCandidates)}
      />
      <RecentReportsTable
        reports={recentReports}
        candidates={filteredCandidates}
        onDownload={(report, candidates) => exportCandidateReport(report, report.format, candidates)}
      />
    </div>
  );
};

export default Reports;
