import { Github } from "lucide-react";
import { PROJECTS } from "../constants";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Projects = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Projects</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group glass relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-2"
            style={{ perspective: "800px" }}
            onMouseMove={(event) => {
              if (prefersReduced) return;
              const rect = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width - 0.5;
              const y = (event.clientY - rect.top) / rect.height - 0.5;
              event.currentTarget.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
            }}
          >
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
            <p className="mt-2 text-sm text-text-secondary">
              {project.description}
            </p>
            <ul className="mt-4 space-y-2 text-xs text-text-secondary">
              {project.impact.map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="tag-pill rounded-full border border-transparent px-3 py-1 text-[10px] font-mono uppercase tracking-wide"
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
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
