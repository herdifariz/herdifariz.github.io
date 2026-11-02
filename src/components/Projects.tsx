import { FaCode } from "react-icons/fa6";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      label="03 / Projects"
      title="Selected work"
      description="Academic and capstone projects with a focus on computer vision, cloud services, and practical deployment."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 70}>
            <article className="flex h-full flex-col rounded-2xl border border-white/5 bg-surface/80 p-6 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_60px_120px_-80px_rgba(45,212,191,0.35)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-accent">
                    {project.period}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {project.subtitle}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-600">
                  <FaCode className="h-4 w-4" />
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {project.points.map((point) => (
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

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-[11px] text-zinc-600">
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span>Academic / Capstone project</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
