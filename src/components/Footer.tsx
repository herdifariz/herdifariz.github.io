import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { profile } from "../data/profile";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
        <p className="text-center text-xs text-zinc-600 sm:text-left">
          © {new Date().getFullYear()} {profile.name}.
        </p>
        {showBackToTop && (
          <a
            href="#about"
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface text-zinc-400 shadow-lg transition hover:border-accent/40 hover:text-accent sm:bottom-8 sm:right-8"
          >
            <FaArrowUp className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </footer>
  );
}
