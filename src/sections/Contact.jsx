import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { PROFILE } from "../constants";

const phoneDial = PROFILE.phone.replace(/[^+\d]/g, "");

const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hemanthkavula",
    href: PROFILE.socials.linkedin,
    icon: Linkedin,
    newTab: true,
  },
  {
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    newTab: false,
  },
  {
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${phoneDial}`,
    icon: Phone,
    newTab: false,
  },
  {
    label: "Address",
    value: "Pitman, NJ",
    href: "https://maps.google.com/?q=Pitman,+NJ",
    icon: MapPin,
    newTab: true,
  },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-primary/30 via-accent-cyan/20 to-accent-teal/30">
      <div className="section-shell">
        <h2 className="section-title mb-10 text-white md:mb-12">
          Let's Connect
        </h2>
        <p className="subtext max-w-2xl">
          Open to Senior Data Engineer and Data Engineering roles across
          multi-cloud environments.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const linkProps = contact.newTab
              ? { target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <a
                key={contact.label}
                href={contact.href}
                {...linkProps}
                className="glass flex items-center gap-4 rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl md:p-8"
              >
                <span className="rounded-full bg-white/10 p-3 text-accent-cyan">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contact.label}
                  </p>
                  <p className="small-label">{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-10">
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            aria-label="Download resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

