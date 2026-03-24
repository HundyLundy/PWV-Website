import { useState, useEffect } from "react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,10,26,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5 border border-white/20 bg-white/10">
            <img src={logoSrc} alt="Perfect Water Valve" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
          <div>
            <div className="font-headline font-semibold text-lg leading-none tracking-tight text-white">Perfect Water Valve</div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#5BBFE0' }}>Guaranteed 15% Savings</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:3615851111"
            className="hidden lg:flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            (361) 585-1111
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.35)' }}
          >
            Request Assessment
          </a>
        </nav>

        <button
          className="md:hidden text-white/70 hover:text-white transition-colors p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/98 border-t border-white/10 px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-base font-medium text-white/70 hover:text-white transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-3 rounded-full text-white text-sm font-semibold text-center"
            style={{ background: '#0374A7' }}
            onClick={() => setOpen(false)}
          >
            Request Assessment
          </a>
          <a href="tel:3615851111" className="text-sm text-white/40 text-center">(361) 585-1111</a>
        </div>
      )}
    </header>
  );
}
