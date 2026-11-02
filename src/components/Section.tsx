import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  label,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
