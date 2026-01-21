import { Github } from "lucide-react";
import { PROJECTS } from "../constants";
import { highlightMetrics } from "../utils/highlightMetrics.jsx";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Projects = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="section-shell">
      <h2 className="section-title mb-10 text-white md:mb-12">
        Projects
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group glass relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl md:p-8"
            style={{ perspective: "800px" }}
            onMouseEnter={(event) => {
              if (prefersReduced) return;
              event.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseMove={(event) => {
              if (prefersReduced) return;
              const rect = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width - 0.5;
              const y = (event.clientY - rect.top) / rect.height - 0.5;
              event.currentTarget.style.transform = `translateY(-8px) rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "translateY(0) rotateX(0deg) rotateY(0deg)";
            }}
          >
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
            <p className="mt-2 text-base leading-relaxed text-slate-300/85 md:text-lg">
              {project.impactLine}
            </p>
            <p className="mt-3 subtext">
              {project.description}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-base leading-relaxed text-slate-300/85 md:text-lg">
              {project.impact.slice(0, 4).map((item) => (
                <li key={item}>{highlightMetrics(item)}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="tag-pill rounded-full border border-transparent px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-slate-300/80"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-400"
              >
                <Github size={14} /> GitHub
              </a>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;

