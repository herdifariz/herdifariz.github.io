import { FaArrowDown, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/profile";
import profileImage from "../assets/profile.jpg";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Herdi Andra
            <span className="block text-zinc-500">Fata Rizqi</span>
          </h1>

          <p className="mt-4 font-mono text-sm text-accent sm:text-base">
            {profile.role} <span className="text-zinc-600">/</span>{" "}
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-accent/90"
            >
              <FaEnvelope className="h-3.5 w-3.5" />
              Get in touch
            </a>
            <a
              href={profile.socials.find((social) => social.icon === "linkedin")?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-accent/40 hover:text-accent"
            >
              <FaLinkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <SocialLinks />
            <span className="text-xs text-zinc-500">{profile.location}</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-[260px]">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-accent/20"
              aria-hidden="true"
            />
            <img
              src={profileImage}
              alt={`Portrait of ${profile.name}`}
              width={200}
              height={200}
              className="relative aspect-square w-full rounded-3xl border border-white/10 object-cover grayscale transition duration-500 hover:grayscale-0"
            />
            <div className="absolute -bottom-5 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink/85 px-4 py-2.5 backdrop-blur">
              <span className="font-mono text-[11px] text-zinc-300">
                Yogyakarta, ID
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-600 transition hover:text-accent sm:block"
      >
        <FaArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}
