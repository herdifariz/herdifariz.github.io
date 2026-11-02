import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <a
          href="#about"
          className="font-mono text-sm font-semibold text-white"
          aria-label="Back to top"
        >
          <span className="text-accent">&lt;</span>
          {profile.initials}
          <span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`rounded-full px-3 py-1.5 font-mono text-xs transition ${
                  active === item.id
                    ? "bg-white/5 text-accent"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="ml-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent transition hover:bg-accent/20"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:text-white md:hidden"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-white/5 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-6 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 font-mono text-sm transition ${
                  active === item.id
                    ? "bg-white/5 text-accent"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-center font-mono text-sm text-accent"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
