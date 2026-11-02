import { FaCertificate, FaGraduationCap } from "react-icons/fa6";
import { certifications } from "../data/certifications";
import { education } from "../data/education";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      label="04 / Education & Certifications"
      title="Qualifications"
      description="Formal education, national certification, and training that back up my skill set."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <article className="relative h-full overflow-hidden rounded-2xl border border-white/5 bg-surface/80 p-6">
            <div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-[80px]"
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                <FaGraduationCap className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-xs text-accent">
                  {education.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {education.school}
                </h3>
              </div>
            </div>

            <div className="relative mt-6 space-y-2">
              <p className="text-base text-zinc-100">{education.degree}</p>
              <p className="text-sm text-zinc-400">GPA: {education.gpa}</p>
              <p className="text-sm text-zinc-500">{education.location}</p>
            </div>
          </article>
        </Reveal>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 70}>
              <article className="rounded-2xl border border-white/5 bg-surface/80 p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <FaCertificate className="h-4 w-4 text-accent" />
                      <h3 className="text-base font-semibold text-white">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">
                      {cert.issuer}
                      <span className="text-zinc-600"> · {cert.year}</span>
                    </p>
                  </div>
                  {cert.credential ? (
                    <span className="mt-3 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-500 sm:mt-0">
                      {cert.credential}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-4 space-y-2.5">
                  {cert.points.map((point) => (
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
