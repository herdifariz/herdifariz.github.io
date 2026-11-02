export type Social = {
  label: string;
  href: string;
  icon: "email" | "linkedin" | "github";
  handle: string;
};

export const profile = {
  name: "Herdi Andra Fata Rizqi",
  initials: "HF",
  role: "Junior Programmer",
  tagline: "Web & Cloud Development · Application Security",
  location: "Sleman, DI Yogyakarta, Indonesia",
  email: "fariz.herdi21@gmail.com",
  availability: "Open to opportunities",
  summary:
    "Informatics graduate focused on web application development, with hands-on experience in penetration testing and User Acceptance Testing (UAT). Skilled in building backends with Laravel and Node.js, frontends with React.js, and managing relational and non-relational databases. Familiar with web application security based on OWASP Top 10 and the OWASP Web Security Testing Guide, with deployment experience on Google Cloud Platform.",
  socials: [
    {
      label: "Email",
      href: "mailto:fariz.herdi21@gmail.com",
      icon: "email",
      handle: "fariz.herdi21@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/herdi-fariz/",
      icon: "linkedin",
      handle: "in/herdi-fariz",
    },
    {
      label: "GitHub",
      href: "https://github.com/herdifariz",
      icon: "github",
      handle: "herdifariz",
    },
  ] satisfies Social[],
};
