import { FaArrowUp } from "react-icons/fa6";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
        <p className="text-center text-xs text-zinc-600 sm:text-left">
          © {new Date().getFullYear()} {profile.name}. Built with React,
          TypeScript & Tailwind CSS.
        </p>
        <a
          href="#about"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-accent/40 hover:text-accent"
        >
          <FaArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
