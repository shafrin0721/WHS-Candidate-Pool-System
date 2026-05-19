export type SalaryDistribution = {
  field: string;
  experience: string;
  minimum: number;
  maximum: number;
  count: number;
  updatedAt: string;
};

export const experienceOptions = [
  "All Experience",
  "0-2 Years",
  "3-5 Years",
  "6-8 Years",
  "9+ Years",
];

export const salaryMockData: SalaryDistribution[] = [
  { field: "Software Engineering", experience: "0-2 Years", minimum: 62000, maximum: 92000, count: 386, updatedAt: "2026-05-16" },
  { field: "Software Engineering", experience: "3-5 Years", minimum: 82000, maximum: 132000, count: 512, updatedAt: "2026-05-18" },
  { field: "Software Engineering", experience: "6-8 Years", minimum: 108000, maximum: 168000, count: 284, updatedAt: "2026-05-12" },
  { field: "Data Analytics", experience: "0-2 Years", minimum: 56000, maximum: 86000, count: 232, updatedAt: "2026-05-11" },
  { field: "Data Analytics", experience: "3-5 Years", minimum: 74000, maximum: 118000, count: 296, updatedAt: "2026-05-09" },
  { field: "Product Design", experience: "3-5 Years", minimum: 70000, maximum: 116000, count: 218, updatedAt: "2026-04-28" },
  { field: "Quality Assurance", experience: "0-2 Years", minimum: 50000, maximum: 78000, count: 178, updatedAt: "2026-05-07" },
  { field: "DevOps", experience: "6-8 Years", minimum: 114000, maximum: 182000, count: 196, updatedAt: "2026-05-17" },
  { field: "Human Resources", experience: "9+ Years", minimum: 84000, maximum: 134000, count: 156, updatedAt: "2026-04-20" },
];

export const salaryRangeData = [
  { name: "$40K - $70K", value: 438 },
  { name: "$70K - $100K", value: 684 },
  { name: "$100K - $150K", value: 812 },
  { name: "$150K - $200K", value: 374 },
  { name: "$200K+", value: 150 },
];
