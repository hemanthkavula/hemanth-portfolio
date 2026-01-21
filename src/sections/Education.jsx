import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { highlightMetrics } from "../utils/highlightMetrics.jsx";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Education = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="section-shell" ref={ref}>
      <h2 className="section-title mb-10 text-white md:mb-12">
        Education Timeline
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
        <motion.div
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary to-accent-cyan"
          animate={{ height: isVisible || prefersReduced ? "100%" : "0%" }}
          transition={{ duration: 1.2 }}
        />
        <div className="space-y-8 pl-12">
          {EDUCATION.map((item) => (
            <div key={item.role} className="relative">
              <span className="absolute -left-[30px] top-2 flex h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-accent-cyan/60" />
                <span className="inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              <div className="glass rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl md:p-8">
                <p className="small-label font-mono uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-2 subtext">
                  {highlightMetrics(item.details)}
                </p>
                {item.coursework && (
                  <p className="mt-3 text-base leading-relaxed text-slate-300/85 md:text-lg">
                    {item.coursework}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
