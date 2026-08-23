import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/profile";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-graphite-900/85 backdrop-blur-md border-b border-white/[0.06]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="font-display text-base flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-periwinkle-400" />

          {profile.name}
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm
                text-bone-400
                hover:text-bone-50
                transition-colors
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden text-bone-50"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div
          className="
            md:hidden
            bg-graphite-900
            border-t
            border-white/[0.06]
            px-5
            py-4
            space-y-1
          "
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="
                block
                px-3
                py-2.5
                rounded-lg
                text-sm
                text-bone-400
                hover:text-bone-50
                hover:bg-white/[0.04]
                transition-colors
              "
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
