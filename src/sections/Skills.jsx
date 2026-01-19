import { motion } from "framer-motion";
import {
  Brain,
  ChartPie,
  Database,
  Cloud,
  Code2,
  Sparkles,
} from "lucide-react";
import { SKILLS } from "../constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const icons = {
  Brain,
  ChartPie,
  Database,
  Cloud,
  Code2,
};

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20" ref={ref}>
      <div className="flex items-center gap-3">
        <Sparkles className="text-accent-cyan" />
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Skills</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SKILLS.map((skill) => {
          const Icon = icons[skill.icon];
          return (
            <motion.div
              key={skill.title}
              className="glass rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-glow"
              whileHover={prefersReduced ? undefined : { scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon className="text-accent-teal" />}
                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono text-text-secondary transition hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <div className="h-2 w-full rounded-full bg-white/5">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-accent-cyan transition-all duration-700"
                    style={{
                      width: isVisible || prefersReduced ? `${skill.proficiency}%` : "0%",
                    }}
                  />
                </div>
                <p className="mt-2 text-xs text-text-secondary">
                  Proficiency {skill.proficiency}%
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
