import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-[#1F2937] bg-[#0B0F19]">
      <div className="container-shell flex flex-col gap-10 py-[60px]">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-white">
              Hemanth Chowdary Kavula
            </p>
            <p className="text-sm text-gray-400">Data Scientist & ML Engineer</p>
            <p className="text-sm text-gray-500">
              Pitman, NJ · +1 (856) 524-6050
            </p>
          </div>

          <div className="flex max-w-sm flex-col items-center gap-4 md:items-end">
            <p className="text-base font-medium text-white">
              Open to Data Science & ML Engineer roles.
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(56,189,248,0.35)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-xs text-gray-500 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-700 p-2 text-gray-400 transition hover:border-sky-400 hover:bg-sky-400 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(56,189,248,0.35)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-700 p-2 text-gray-400 transition hover:border-sky-400 hover:bg-sky-400 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(56,189,248,0.35)]"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full border border-gray-700 p-2 text-gray-400 transition hover:border-sky-400 hover:bg-sky-400 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(56,189,248,0.35)]"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
          <p>© 2026 Hemanth Chowdary Kavula</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
