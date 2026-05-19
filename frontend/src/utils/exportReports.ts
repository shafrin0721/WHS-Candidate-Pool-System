import type { AdminCandidate, RecentReport, ReportDefinition } from "../data/adminInsights";

type ExportFormat = "PDF" | "Excel";

const money = (value: number) => `LKR ${value.toLocaleString("en-US")}`;

const downloadBlob = (content: BlobPart, fileName: string, type: string) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const escapeCsvValue = (value: string | number) => {
  const stringValue = String(value);
  return stringValue.includes(",") ? `"${stringValue.replace(/"/g, '""')}"` : stringValue;
};

const createCsv = (candidates: AdminCandidate[]) => {
  const headers = [
    "Candidate ID",
    "Name",
    "Field",
    "Status",
    "Availability",
    "Experience",
    "Minimum Salary",
    "Maximum Salary",
    "Skills",
    "Updated At",
  ];
  const rows = candidates.map((candidate) => [
    candidate.id,
    candidate.name,
    candidate.field,
    candidate.status,
    candidate.availability,
    candidate.experienceYears,
    candidate.minSalary,
    candidate.maxSalary,
    candidate.skills.join(" | "),
    candidate.updatedAt,
  ]);

  return [headers, ...rows].map((row) => row.map(escapeCsvValue).join(",")).join("\n");
};

const createPdfText = (title: string, candidates: AdminCandidate[]) => {
  const lines = [
    title,
    `Generated: ${new Date().toLocaleString()}`,
    `Records: ${candidates.length}`,
    "",
    ...candidates.map(
      (candidate) =>
        `${candidate.id} | ${candidate.name} | ${candidate.field} | ${candidate.status} | ${money(candidate.minSalary)} - ${money(candidate.maxSalary)}`,
    ),
  ];

  return `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${lines.join("\\n").length + 80} >>
stream
BT
/F1 10 Tf
50 750 Td
14 TL
${lines.map((line) => `(${line.replace(/[()]/g, "")}) Tj T*`).join("\n")}
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000059 00000 n 
0000000116 00000 n 
0000000274 00000 n 
0000000000 00000 n 
trailer
<< /Root 1 0 R /Size 6 >>
startxref
0
%%EOF`;
};

export const exportCandidateReport = (
  report: ReportDefinition | RecentReport,
  format: ExportFormat,
  candidates: AdminCandidate[],
) => {
  const safeName = report.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  if (format === "PDF") {
    downloadBlob(createPdfText(report.name, candidates), `${safeName}.pdf`, "application/pdf");
    return;
  }

  downloadBlob(createCsv(candidates), `${safeName}.csv`, "text/csv;charset=utf-8");
};
