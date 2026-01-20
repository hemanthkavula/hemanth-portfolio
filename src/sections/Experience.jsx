import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16" ref={ref}>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        Experience Timeline
      </h2>
      <div className="relative mt-10">
        <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
        <motion.div
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary to-accent-cyan"
          animate={{ height: isVisible || prefersReduced ? "100%" : "0%" }}
          transition={{ duration: 1.2 }}
        />
        <div className="space-y-8 pl-12">
          {EXPERIENCE.map((item) => (
            <div key={item.role} className="relative">
              <span className="absolute -left-[30px] top-2 flex h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-accent-cyan/60" />
                <span className="inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              <div className="glass rounded-2xl p-5">
                <p className="text-xs font-mono uppercase text-text-secondary">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {item.company} | {item.location}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 text-accent-cyan">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
