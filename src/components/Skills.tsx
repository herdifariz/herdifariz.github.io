import type { IconType } from "react-icons";
import { FaCode, FaShieldHalved } from "react-icons/fa6";
import {
  SiBurpsuite,
  SiDocker,
  SiExpress,
  SiFlask,
  SiGit,
  SiGooglecloud,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import Section from "./Section";

const skillIcons: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  php: SiPhp,
  python: SiPython,
  react: SiReact,
  nextjs: SiNextdotjs,
  laravel: SiLaravel,
  express: SiExpress,
  flask: SiFlask,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  git: SiGit,
  docker: SiDocker,
  postman: SiPostman,
  burpsuite: SiBurpsuite,
  acunetix: FaShieldHalved,
  gcp: SiGooglecloud,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      label="02 / Skills"
      title="Tools I work with"
      description="A practical stack spanning frontend, backend, databases, cloud deployment, and application security."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 60}>
            <div className="h-full rounded-2xl border border-white/5 bg-surface/80 p-6 transition hover:border-accent/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-sm text-white">{group.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    {group.description}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-zinc-600">
                  0{index + 1}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const Icon = skillIcons[skill.icon] ?? FaCode;
                  return (
                    <li
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-300 transition hover:border-accent/30 hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5 text-zinc-500 transition group-hover:text-accent" />
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
