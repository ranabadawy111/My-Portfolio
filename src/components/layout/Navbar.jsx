import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/profile";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-graphite-900/85 backdrop-blur-md border-b border-white/[0.06]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-base flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-periwinkle-400" />
          {profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-bone-400 hover:text-bone-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-bone-50" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-graphite-900 border-t border-white/[0.06] px-5 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-bone-400"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
