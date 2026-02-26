import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import headshot from "../assets/profile.jpg";
import { useParallax } from "../hooks/useParallax";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { fadeLeft } from "../utils/animations";

const stats = [];

const About = () => {
  const offset = useParallax(0.08);
  const prefersReduced = usePrefersReducedMotion();
  const [values, setValues] = useState(stats.map(() => 0));
  const highlights = [
    "Lakehouse",
    "ETL",
    "Streaming",
    "Data Governance",
    "Spark",
    "Multi-Cloud",
  ];

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

  return (
    <div className="relative">
      <div
        className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-primary/30 blur-3xl"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div className="section-shell grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-1">
        <motion.div
          className="relative w-full max-w-md"
          variants={fadeLeft}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-3xl ring-2 ring-indigo-400/30 shadow-2xl shadow-black/30">
            <img
              src={headshot}
              alt="Hemanth Kavula headshot"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl shadow-black/20 md:p-6">
            <p className="text-slate-100 font-medium">
              <span className="text-slate-400">Focus:</span> Engineering
              scalable, reliable data pipelines and platforms for analytics,
              reporting, and business-critical workloads.
            </p>
          </div>
        </motion.div>
        <div className="w-full text-left">
          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            About
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300/85 md:text-lg">
            <p>
              Senior Data Engineer with 5+ years of experience building
              enterprise-grade data platforms across Financial Services and
              Retail industries. Expertise in distributed data processing
              (Spark, Kafka), cloud-native architecture (AWS, Azure), and
              scalable ETL/ELT frameworks supporting high-volume transactional
              and analytical workloads.
            </p>
            <p>
              Demonstrated success in reducing pipeline latency, improving data
              reliability and delivering analytics-ready datasets that power
              regulatory reporting, risk monitoring and executive
              decision-making. Strong background in dimensional data modeling,
              Data Lakehouse architecture (Delta Lake), and production-grade
              orchestration (Airflow) and cloud-native workflow services.
              Experience in implementing data governance and data quality
              frameworks to ensure accuracy, compliance and operational
              excellence in mission-critical environments.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:border-white/20 md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 font-medium text-slate-200">
            Open to Senior Data Engineer and Data Engineering roles across
            AWS and Azure.
          </p>
          {stats.length > 0 && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl md:p-8"
                >
                  <p className="text-2xl font-semibold text-cyan-300">
                    {values[index]}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
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
