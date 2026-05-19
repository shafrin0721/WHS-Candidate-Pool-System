import { FiDownload } from "react-icons/fi";
import type { ReportDefinition } from "../../data/adminInsights";

type ReportRowProps = {
  report: ReportDefinition;
  records: number;
  onDownload: (format: "PDF" | "Excel") => void;
};

const ReportRow = ({ report, records, onDownload }: ReportRowProps) => (
  <tr>
    <td>
      <p className="table-primary">{report.name}</p>
      <p className="table-secondary">{report.description}</p>
    </td>
    <td>{report.category}</td>
    <td className="table-strong">{records.toLocaleString("en-US")}</td>
    <td>
      <div className="table-actions">
        <button
          type="button"
          onClick={() => onDownload("PDF")}
          className="admin-button admin-button-primary admin-button-small"
        >
          <FiDownload />
          PDF
        </button>
        <button
          type="button"
          onClick={() => onDownload("Excel")}
          className="admin-button admin-button-secondary admin-button-small"
        >
          <FiDownload />
          Excel
        </button>
      </div>
    </td>
  </tr>
);

export default ReportRow;
