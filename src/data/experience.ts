export type Experience = {
  company: string;
  role: string;
  period: string;
  type: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "PT Global Data Inspirasi",
    role: "IT Intern — Penetration Testing & UAT",
    period: "Aug 2026 — Oct 2026",
    type: "Internship",
    points: [
      "Performed penetration testing on two web applications to identify and validate potential vulnerabilities based on the OWASP WSTG.",
      "Conducted User Acceptance Testing (UAT) against defined scenarios to verify application functionality.",
      "Documented testing results, evidence, and remediation recommendations to support security and quality evaluation.",
      "Authored finding reports covering validation evidence, risk levels, CWE/OWASP references, and mitigation guidance.",
    ],
  },
  {
    company: "Bangkit Academy 2024",
    role: "Cloud Computing Learning Path",
    period: "2024",
    type: "Program",
    points: [
      "Built an Express.js backend integrated with a MySQL database and a Flask service for deploying a machine learning model.",
      "Deployed backend services on Google Cloud Platform using App Engine and Cloud Run.",
      "Collaborated with cross-functional teams in a cloud-based application project.",
    ],
  },
  {
    company: "Information Technology Club UPNYK",
    role: "Back End Web Development",
    period: "Student Organization",
    type: "Organization",
    points: [
      "Explored back-end web development practices and collaborated on student-run technology projects.",
    ],
  },
];
