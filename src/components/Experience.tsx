import { experiences } from "../data/experience";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="01 / Experience"
      title="Where I've worked"
      description="Roles and programs where I've built web applications, tested systems, and shipped to the cloud."
    >
      <div className="relative">
        <div
          className="absolute inset-y-2 left-1.5 w-px bg-white/10"
          aria-hidden="true"
        />
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 80}>
              <article className="relative pl-8 sm:pl-10">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {experience.role}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    {experience.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">
                  {experience.company}
                  <span className="text-zinc-600"> · {experience.type}</span>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
