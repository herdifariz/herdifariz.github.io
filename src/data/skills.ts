export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Languages I use to build and ship products.",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Frameworks",
    description: "Frameworks for frontend, backend, and data services.",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Laravel", icon: "laravel" },
      { name: "Express.js", icon: "express" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    title: "Databases",
    description: "Relational and non-relational data stores.",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Daily tooling, security testing, and cloud platforms.",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "Burp Suite", icon: "burpsuite" },
      { name: "Acunetix", icon: "acunetix" },
      { name: "Google Cloud", icon: "gcp" },
    ],
  },
];
