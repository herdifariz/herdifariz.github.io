export type Certification = {
  title: string;
  issuer: string;
  year: string;
  points: string[];
  credential?: string;
};

export const certifications: Certification[] = [
  {
    title: "Cyber Security Training",
    issuer: "BLKPP DIY",
    year: "2026",
    points: [
      "Completed practical training on cybersecurity fundamentals, security testing methodology, web application security, and vulnerability assessment.",
      "Practiced penetration testing with Burp Suite, OWASP ZAP, Nmap, Nikto, and other tools.",
      "Identified and documented web application vulnerabilities based on OWASP Top 10 and OWASP WSTG.",
    ],
  },
  {
    title: "Cloud Computing Learning Path",
    issuer: "Bangkit Academy",
    year: "2024",
    points: [
      "Completed a cloud computing learning path focused on backend development and Google Cloud Platform deployment.",
      "Built and deployed cloud-backed services as part of a cross-functional capstone team.",
    ],
  },
  {
    title: "Junior Web Developer",
    issuer: "BNSP",
    year: "2024",
    points: [
      "National professional certification for entry-level web development competency.",
    ],
    credential: "No. 62090 2513 3 0108945 2024",
  },
];
