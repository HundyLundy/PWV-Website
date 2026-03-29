import { useState, useEffect, useRef } from "react";
import logoSrc from "@assets/PWV_logo_larger_design_1774767065422.png";
import { Phone, Menu, X, ChevronDown, BarChart2, Zap, FileText, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const MORE_LINKS = [
  {
    label: "Case Studies & Proof",
    href: "/results/",
    desc: "M&V-verified results from Amazon, Four Seasons & more",
    icon: FileText,
  },
  {
    label: "Live Savings Counter",
    href: "/impact/",
    desc: "Watch cumulative water savings accumulate in real time",
    icon: Zap,
  },
  {
    label: "Get a Full Proposal",
    href: "/savings/",
    desc: "ROI calculator + detailed product overview",
    icon: BarChart2,
  },
  {
    label: "Colorado Properties",
    href: "/locations/colorado",
    desc: "Serving all of Colorado — contact Hunter Lundquist",
    icon: MapPin,
  },
  {
    label: "Texas Market",
    href: "/locations/texas",
    desc: "Commercial water savings data specific to Texas properties",
    icon: MapPin,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5 border border-white/20 bg-white/10">
            <img src={logoSrc} alt="Perfect Water Valve" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
          <div>
            <div className="font-headline font-semibold text-lg leading-none tracking-tight text-white">Perfect Water Valve</div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#5BBFE0' }}>Guaranteed 15% Savings</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1.5 text-sm font-bold text-[#38bdf8] hover:text-white border border-[#38bdf8]/50 hover:border-[#38bdf8] bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 px-3.5 py-1.5 rounded-full transition-all duration-200 tracking-wide"
            >
              ✦ Explore
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
            </button>

            {moreOpen && (
              <div
                className="absolute right-0 top-full mt-3 w-72 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  background: "rgba(10,15,35,0.97)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="p-2">
                  {MORE_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors group"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(3,116,167,0.2)", border: "1px solid rgba(3,116,167,0.3)" }}
                        >
                          <Icon className="w-4 h-4" style={{ color: '#5BBFE0' }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                            {link.label}
                          </div>
                          <div className="text-xs text-white/45 mt-0.5 leading-relaxed">{link.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="tel:7209373004"
            className="hidden lg:flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            (720) 937-3004
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.35)' }}
          >
            Request Assessment
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 border-t border-white/10 px-4 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-base font-medium text-white/70 hover:text-white transition-colors py-2.5 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <div className="pt-3 pb-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Explore</div>
            {MORE_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 text-white/70 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 shrink-0" style={{ color: '#5BBFE0' }} />
                  <span className="text-base font-medium">{link.label}</span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="mt-3 px-5 py-3 rounded-full text-white text-sm font-semibold text-center"
            style={{ background: '#0374A7' }}
            onClick={() => setMenuOpen(false)}
          >
            Request Assessment
          </a>
          <a href="tel:7209373004" className="text-sm text-white/40 text-center mt-2">(720) 937-3004</a>
        </div>
      )}
    </header>
  );
}
