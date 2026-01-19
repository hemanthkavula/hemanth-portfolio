import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        Certifications
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-text-secondary">
        Verified credentials showcasing structured learning across analytics,
        cloud, and machine learning.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert) => (
          <article
            key={cert.title}
            className="glass flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-2"
          >
            <p className="text-xs font-mono uppercase text-text-secondary">
              Certificate
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {cert.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="tag-pill rounded-full border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-text-secondary"
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
    </div>
  );
};

export default Certifications;
