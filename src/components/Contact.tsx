import { FaEnvelope } from "react-icons/fa6";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div
        className="absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            05 / Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-accent">together</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            I&apos;m currently open to junior web development, backend, and
            cloud-related opportunities. Feel free to reach out if you think
            we&apos;d be a good fit.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition hover:bg-accent/90"
            >
              <FaEnvelope className="h-4 w-4" />
              {profile.email}
            </a>
            <SocialLinks className="justify-center" />
          </div>

          <p className="mt-10 font-mono text-xs text-zinc-600">
            {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
