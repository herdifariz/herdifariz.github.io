import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/profile";

const icons: Record<string, IconType> = {
  email: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {profile.socials.map((social) => {
        const Icon = icons[social.icon] ?? FaEnvelope;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.icon === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition hover:border-accent/40 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
