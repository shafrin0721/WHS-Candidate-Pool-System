export type CandidateAvailability = "Immediate" | "2 Weeks" | "1 Month" | "Not Available";
export type CandidateMarketStatus = "Actively Looking" | "Open to Opportunities" | "Not Looking";

export type ReportCandidate = {
  id: string;
  name: string;
  field: string;
  status: CandidateMarketStatus;
  availability: CandidateAvailability;
  experienceYears: number;
  minSalary: number;
  maxSalary: number;
  skills: string[];
  updatedAt: string;
};

export type ReportDefinition = {
  id: string;
  name: string;
  description: string;
  category: string;
};

export type RecentReport = {
  id: string;
  name: string;
  type: string;
  format: "PDF" | "Excel";
  generatedAt: string;
  generatedBy: string;
  records: number;
};

export const reportCandidates: ReportCandidate[] = [
  {
    id: "C-1001",
    name: "Anika Perera",
    field: "Software Engineering",
    status: "Actively Looking",
    availability: "Immediate",
    experienceYears: 3,
    minSalary: 72000,
    maxSalary: 118000,
    skills: ["React", "TypeScript", "Firebase"],
    updatedAt: "2026-05-14",
  },
  {
    id: "C-1002",
    name: "Ravi Fernando",
    field: "Data Analytics",
    status: "Open to Opportunities",
    availability: "2 Weeks",
    experienceYears: 5,
    minSalary: 78000,
    maxSalary: 126000,
    skills: ["Power BI", "SQL", "Python"],
    updatedAt: "2026-05-11",
  },
  {
    id: "C-1003",
    name: "Meera Silva",
    field: "Product Design",
    status: "Actively Looking",
    availability: "Immediate",
    experienceYears: 2,
    minSalary: 62000,
    maxSalary: 98000,
    skills: ["Figma", "UX Research", "Design Systems"],
    updatedAt: "2026-04-28",
  },
  {
    id: "C-1004",
    name: "Dinesh Kumar",
    field: "Software Engineering",
    status: "Not Looking",
    availability: "1 Month",
    experienceYears: 8,
    minSalary: 112000,
    maxSalary: 180000,
    skills: ["Node.js", "AWS", "Architecture"],
    updatedAt: "2026-05-08",
  },
];

export const reportDefinitions: ReportDefinition[] = [
  {
    id: "summary",
    name: "Candidates Summary Report",
    description: "Full candidate totals, status mix, field split, and availability snapshot.",
    category: "Candidate",
  },
  {
    id: "field",
    name: "Candidates by Field Report",
    description: "Candidate records grouped by field and seniority.",
    category: "Candidate",
  },
  {
    id: "availability",
    name: "Candidates by Availability Report",
    description: "Availability pipeline with immediate, two week, and monthly starts.",
    category: "Availability",
  },
  {
    id: "salary",
    name: "Salary Insights Report",
    description: "Salary bands, averages, and highest ranges by field.",
    category: "Compensation",
  },
  {
    id: "skills",
    name: "Skills Insights Report",
    description: "Most requested skills and candidate coverage by technology.",
    category: "Skills",
  },
];

export const recentReports: RecentReport[] = [
  {
    id: "RPT-260519-001",
    name: "Candidates Summary Report",
    type: "Candidate",
    format: "PDF",
    generatedAt: "2026-05-19 09:25",
    generatedBy: "Admin",
    records: 2458,
  },
  {
    id: "RPT-260518-002",
    name: "Salary Insights Report",
    type: "Compensation",
    format: "Excel",
    generatedAt: "2026-05-18 16:40",
    generatedBy: "Admin",
    records: 2458,
  },
  {
    id: "RPT-260517-003",
    name: "Candidates by Field Report",
    type: "Candidate",
    format: "PDF",
    generatedAt: "2026-05-17 11:05",
    generatedBy: "Admin",
    records: 2458,
  },
];

export const reportTypeOptions = [
  "All Reports",
  "Candidates Summary Report",
  "Candidates by Field Report",
  "Candidates by Availability Report",
  "Salary Insights Report",
  "Skills Insights Report",
];

export const fieldOptions = [
  "All Fields",
  "Software Engineering",
  "Data Analytics",
  "Product Design",
  "Quality Assurance",
  "DevOps",
  "Human Resources",
];

export const statusOptions = [
  "All Statuses",
  "Actively Looking",
  "Open to Opportunities",
  "Not Looking",
];

export const availabilityOptions = [
  "All Availability",
  "Immediate",
  "2 Weeks",
  "1 Month",
  "Not Available",
];
