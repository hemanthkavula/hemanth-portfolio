import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { PROFILE } from "../constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { initParticles } from "../utils/particles";

const Hero = () => {
  const prefersReduced = usePrefersReducedMotion();
  const { ref: heroRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const phrase = "Building intelligent systems that turn data into business value.";

  const gradientClass = useMemo(
    () =>
      "bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.6),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.5),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.45),transparent_40%)]",
    []
  );

  useEffect(() => {
    if (prefersReduced) {
      setTypedText(phrase);
      return undefined;
    }
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(phrase.slice(0, index + 1));
      index += 1;
      if (index === phrase.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [phrase, prefersReduced]);

  useEffect(() => {
    if (!isVisible || prefersReduced) return undefined;
    const cleanup = initParticles(canvasRef.current, prefersReduced);
    return cleanup;
  }, [isVisible, prefersReduced]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28"
    >
      <div
        className={`${gradientClass} absolute inset-0 animate-shimmer opacity-80`}
        aria-hidden="true"
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="container-shell relative z-10 flex flex-col items-start gap-8 pl-0 text-left md:pl-4">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {PROFILE.title}
          </motion.h1>

          <p className="mt-4 max-w-xl font-mono text-base text-slate-200 md:text-lg">
            {PROFILE.subtitle}
          </p>

          <p className="mt-4 font-mono text-base text-slate-100 md:text-lg">
            {typedText}
            {typedText.length < phrase.length && (
              <span className="ml-1 inline-block w-2 animate-pulse text-slate-200">
                |
              </span>
            )}
          </p>
          <p className="mt-4 text-sm font-semibold tracking-wide !text-slate-100 md:text-base">
            Python | SQL | Machine Learning | NLP | Power BI | AWS
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            View Projects
          </a>

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/0 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/5"
            aria-label="Download resume"
          >
            <span className="flex items-center gap-2">
              <Download size={16} /> Download Resume
            </span>
          </a>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {[
            "50,000+ records analyzed",
            "95%+ model accuracy",
            "8,823+ posts processed",
            "15+ hours/week saved",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 transition hover:border-white/20 hover:bg-white/10 md:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:-translate-y-1 hover:text-white"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;