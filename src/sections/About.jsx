import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import headshot from "../assets/profile.jpg";
import { useParallax } from "../hooks/useParallax";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { fadeLeft } from "../utils/animations";

const stats = [];

const About = () => {
  const offset = useParallax(0.08);
  const prefersReduced = usePrefersReducedMotion();
  const [values, setValues] = useState(stats.map(() => 0));
  const highlights = ["ML", "NLP", "BI", "ETL"];

  useEffect(() => {
    if (prefersReduced) {
      setValues(stats.map((stat) => stat.value));
      return;
    }
    let start;
    const duration = 1200;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValues(stats.map((stat) => Math.round(stat.value * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  const textBlocks = useMemo(() => ABOUT_TEXT.split("\n"), []);

  return (
    <div className="relative">
      <div
        className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-primary/30 blur-3xl"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.4fr]">
        <motion.div
          className="relative mx-auto w-full max-w-sm"
          variants={fadeLeft}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={headshot}
            alt="Hemanth Kavula headshot placeholder"
            className="rounded-[28px]"
          />
          <div className="glass mt-6 rounded-2xl p-5 transition hover:-translate-y-2">
            <p className="text-sm text-text-secondary">
              Fun fact: <span className="text-white">I love turning messy data into clear stories.</span>
            </p>
          </div>
        </motion.div>
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">About</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
            {textBlocks.map((block) => (
              <p key={block}>{block}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="tag-pill rounded-full border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-text-secondary">
            Currently exploring:{" "}
            <span className="text-white">
              LLM-powered analytics, Retrieval-Augmented Generation (RAG), and
              responsible AI practices.
            </span>
          </p>
          {stats.length > 0 && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={stat.label} className="glass rounded-2xl p-4">
                  <p className="text-2xl font-semibold text-white">
                    {values[index]}
                    {stat.suffix}
                  </p>
                  <p className="text-xs text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
