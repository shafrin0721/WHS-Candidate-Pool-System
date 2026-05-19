export type CandidateAvailability = "Immediate" | "2 Weeks" | "1 Month" | "Not Available";
export type CandidateMarketStatus = "Actively Looking" | "Open to Opportunities" | "Not Looking";

export type AdminCandidate = {
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
  records: number;
};

export const adminCandidates: AdminCandidate[] = [
  {
    id: "C-1001",
    name: "Anika Perera",
    field: "Software Engineering",
    status: "Actively Looking",
    availability: "Immediate",
    experienceYears: 3,
    minSalary: 180000,
    maxSalary: 260000,
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
    minSalary: 240000,
    maxSalary: 350000,
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
    minSalary: 150000,
    maxSalary: 230000,
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
    minSalary: 420000,
    maxSalary: 650000,
    skills: ["Node.js", "AWS", "Architecture"],
    updatedAt: "2026-05-08",
  },
  {
    id: "C-1005",
    name: "Nethmi Jayawardena",
    field: "Quality Assurance",
    status: "Open to Opportunities",
    availability: "2 Weeks",
    experienceYears: 4,
    minSalary: 190000,
    maxSalary: 300000,
    skills: ["Cypress", "Playwright", "API Testing"],
    updatedAt: "2026-05-02",
  },
  {
    id: "C-1006",
    name: "Imran Haleem",
    field: "DevOps",
    status: "Actively Looking",
    availability: "Immediate",
    experienceYears: 6,
    minSalary: 380000,
    maxSalary: 540000,
    skills: ["Kubernetes", "Terraform", "Azure"],
    updatedAt: "2026-04-21",
  },
  {
    id: "C-1007",
    name: "Tharushi Wickrama",
    field: "Human Resources",
    status: "Open to Opportunities",
    availability: "1 Month",
    experienceYears: 7,
    minSalary: 260000,
    maxSalary: 420000,
    skills: ["Recruiting", "HRIS", "Onboarding"],
    updatedAt: "2026-05-17",
  },
  {
    id: "C-1008",
    name: "Kavindu Dias",
    field: "Software Engineering",
    status: "Actively Looking",
    availability: "Immediate",
    experienceYears: 1,
    minSalary: 110000,
    maxSalary: 170000,
    skills: ["Java", "Spring Boot", "MySQL"],
    updatedAt: "2026-05-05",
  },
  {
    id: "C-1009",
    name: "Shalini Raj",
    field: "Data Analytics",
    status: "Not Looking",
    availability: "Not Available",
    experienceYears: 9,
    minSalary: 520000,
    maxSalary: 780000,
    skills: ["Machine Learning", "Databricks", "Tableau"],
    updatedAt: "2026-04-16",
  },
  {
    id: "C-1010",
    name: "Pasindu Ekanayake",
    field: "Quality Assurance",
    status: "Actively Looking",
    availability: "2 Weeks",
    experienceYears: 2,
    minSalary: 135000,
    maxSalary: 210000,
    skills: ["Manual Testing", "Postman", "Jira"],
    updatedAt: "2026-05-18",
  },
  {
    id: "C-1011",
    name: "Lihini Amarasekara",
    field: "Product Design",
    status: "Open to Opportunities",
    availability: "Immediate",
    experienceYears: 6,
    minSalary: 300000,
    maxSalary: 480000,
    skills: ["Interaction Design", "Prototyping", "Research"],
    updatedAt: "2026-05-10",
  },
  {
    id: "C-1012",
    name: "Hasitha Senanayake",
    field: "DevOps",
    status: "Open to Opportunities",
    availability: "1 Month",
    experienceYears: 10,
    minSalary: 600000,
    maxSalary: 900000,
    skills: ["SRE", "GCP", "Observability"],
    updatedAt: "2026-03-30",
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

export const initialRecentReports: RecentReport[] = [
  {
    id: "RPT-260519-001",
    name: "Candidates Summary Report",
    type: "Candidate",
    format: "PDF",
    generatedAt: "2026-05-19 09:25",
    records: 12,
  },
  {
    id: "RPT-260518-002",
    name: "Salary Insights Report",
    type: "Compensation",
    format: "Excel",
    generatedAt: "2026-05-18 16:40",
    records: 12,
  },
  {
    id: "RPT-260517-003",
    name: "Candidates by Field Report",
    type: "Candidate",
    format: "PDF",
    generatedAt: "2026-05-17 11:05",
    records: 10,
  },
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

export const experienceOptions = [
  "All Experience",
  "0-2 Years",
  "3-5 Years",
  "6-8 Years",
  "9+ Years",
];
