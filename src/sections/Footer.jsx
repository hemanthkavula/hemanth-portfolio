import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-text-secondary">
            © 2026 Hemanth Kavula. Built with React & ❤️
          </p>
          <p className="mt-3 text-xs text-text-secondary">
            Pitman, NJ 08071 | {PROFILE.phone}
          </p>
          <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary">
            🟢 Available for opportunities
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-text-secondary transition hover:text-white"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-text-secondary transition hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full border border-white/10 p-2 text-text-secondary transition hover:text-white"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="#hero"
            className="rounded-full border border-white/10 p-2 text-text-secondary transition hover:text-white"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

