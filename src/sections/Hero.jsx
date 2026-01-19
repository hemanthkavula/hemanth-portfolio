import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { PROFILE } from "../constants";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { initParticles } from "../utils/particles";

const Hero = () => {
  const prefersReduced = usePrefersReducedMotion();
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const phrase = "Transforming data into actionable insights";

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
    const cleanup = initParticles(canvasRef.current, prefersReduced);
    return cleanup;
  }, [prefersReduced]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pb-20 pt-28"
    >
      <div
        className={`${gradientClass} absolute inset-0 animate-shimmer opacity-80`}
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-8 px-6">
        <motion.h1
          className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {PROFILE.title}
        </motion.h1>
        <p className="text-lg text-text-secondary sm:text-xl">
          {PROFILE.subtitle}
        </p>
        <p className="font-mono text-base text-accent-cyan">
          {typedText}
          <span className="animate-pulse"></span>
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href={PROFILE.resumeUrl}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              <Download size={16} /> Download Resume
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text-secondary">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
