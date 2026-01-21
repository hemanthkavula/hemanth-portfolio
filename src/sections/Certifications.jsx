import { useState } from "react";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredTitles = new Set([
    "Foundations: Data, Data, Everywhere - Google (Coursera)",
    "AI - Data Scientist Version 3.0 (NASSCOM)",
    "Data Analytics with Python (NPTEL)",
  ]);
  const featuredCerts = CERTIFICATIONS.filter((cert) =>
    featuredTitles.has(cert.title)
  );
  const visibleCerts = showAll ? CERTIFICATIONS : featuredCerts;

  return (
    <div className="section-shell">
      <h2 className="section-title mb-10 text-white md:mb-12">
        Certifications
      </h2>
      <p className="max-w-2xl subtext">
        Verified credentials showcasing structured learning across analytics,
        cloud, and machine learning.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCerts.map((cert) => (
          <article
            key={cert.title}
            className="glass flex h-full flex-col rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl md:p-8"
          >
            <p className="small-label font-mono uppercase">
              Certificate
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {cert.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="tag-pill rounded-full border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-slate-300/80"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white"
              >
                View Certificate
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
        >
          {showAll ? "Show Top Certifications" : "View All Certifications"}
        </button>
      </div>
    </div>
  );
};

export default Certifications;
