import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { PROFILE } from "../constants";

const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hemanthkavula",
    href: PROFILE.socials.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/hemanthkavula",
    href: PROFILE.socials.github,
    icon: Github,
  },
  {
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone}`,
    icon: Phone,
  },
  {
    label: "Address",
    value: "Pitman, NJ 08071",
    href: "https://maps.google.com/?q=Pitman,+NJ+08071",
    icon: MapPin,
  },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-primary/30 via-accent-cyan/20 to-accent-teal/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Let’s Build Something Amazing Together
        </h2>
        <p className="mt-4 text-sm text-text-secondary">
          Open to Data Analyst, Data Scientist, and ML Engineer roles.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"
              >
                <span className="rounded-full bg-white/10 p-3 text-accent-cyan">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contact.label}
                  </p>
                  <p className="text-xs text-text-secondary">{contact.value}</p>
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
