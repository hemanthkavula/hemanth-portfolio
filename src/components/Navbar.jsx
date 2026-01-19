import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";
import logo from "../assets/logo-hk.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="inline-flex items-center gap-2">
          <img src={logo} alt="HK logo" className="h-10 w-10" />
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-text-secondary transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden rounded-full border border-white/10 bg-white/5 p-2"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass mx-6 mb-4 rounded-2xl px-4 py-3">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick}
                className="text-sm text-text-secondary transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
