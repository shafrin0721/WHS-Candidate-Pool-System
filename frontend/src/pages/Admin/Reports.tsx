import { useMemo, useState } from "react";
import { FiActivity, FiBarChart2, FiFileText, FiUsers } from "react-icons/fi";
import { AdminButton, AdminPanel, DateRangeInput, FilterSelect, isDateRangeValid } from "../../components/admin/AdminUi";
import RecentReportsTable from "../../components/admin/RecentReportsTable";
import ReportRow from "../../components/admin/ReportRow";
import StatCard from "../../components/admin/StatCard";
import {
  adminCandidates,
  availabilityOptions,
  fieldOptions,
  initialRecentReports,
  reportDefinitions,
  statusOptions,
  type RecentReport,
} from "../../data/adminInsights";
import { exportCandidateReport } from "../../utils/exportReports";

const reportTypeOptions = [
  "All Reports",
  "Candidates Summary Report",
  "Candidates by Field Report",
  "Candidates by Availability Report",
  "Salary Insights Report",
  "Skills Insights Report",
];

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

const Reports = () => {
  const [reportType, setReportType] = useState("All Reports");
  const [field, setField] = useState("All Fields");
  const [status, setStatus] = useState("All Statuses");
  const [availability, setAvailability] = useState("All Availability");
  const [fromDate, setFromDate] = useState("2026-04-01");
  const [toDate, setToDate] = useState("2026-05-19");
  const [recentReports, setRecentReports] = useState<RecentReport[]>(
    initialRecentReports.map((report) => ({ ...report, records: 2458 })),
  );

  const filteredReports = useMemo(
    () =>
      reportDefinitions.filter((report) => reportType === "All Reports" || report.name === reportType),
    [reportType],
  );

  const dateRangeValid = isDateRangeValid(fromDate, toDate);

  const filteredCandidates = useMemo(
    () =>
      adminCandidates.filter((candidate) => {
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

      <AdminPanel className="filter-panel">
        <div className="reports-filter-grid">
          <FilterSelect label="Report Type" value={reportType} options={reportTypeOptions} onChange={setReportType} />
          <FilterSelect label="Field" value={field} options={fieldOptions} onChange={setField} />
          <FilterSelect label="Status" value={status} options={statusOptions} onChange={setStatus} />
          <FilterSelect
            label="Availability"
            value={availability}
            options={availabilityOptions}
            onChange={setAvailability}
          />
          <DateRangeInput from={fromDate} to={toDate} onFromChange={setFromDate} onToChange={setToDate} />
          <AdminButton icon={<FiFileText />} onClick={generateReport} disabled={!dateRangeValid}>
            Generate Report
          </AdminButton>
        </div>
      </AdminPanel>

      <section className="stats-grid">
        {summaryCards.map((card) => (
          <StatCard key={card.title} title={card.title} value={card.value} icon={card.icon} />
        ))}
      </section>

      <AdminPanel className="table-panel">
        <div className="panel-header">
          <h2>Reports List</h2>
        </div>
        <div className="table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Report</th>
                <th>Category</th>
                <th>Records</th>
                <th className="align-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <ReportRow
                  key={report.id}
                  report={report}
                  records={2458}
                  onDownload={(format) => exportCandidateReport(report, format, filteredCandidates)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>

      <RecentReportsTable reports={recentReports} candidates={filteredCandidates} />
    </div>
  );
};

export default Reports;
