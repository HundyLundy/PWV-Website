import { useState, useEffect, useRef } from "react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { Menu, X, ChevronDown, Home, FileText, BarChart2, MapPin, Phone, BookOpen } from "lucide-react";

const SECTION_LINKS = [
  { label: "Live Counter", href: "#counter" },
  { label: "Client Results", href: "#clients" },
  { label: "FAQ", href: "#faq" },
];

const EXPLORE_LINKS = [
  { label: "Official Website", href: "/", desc: "Main homepage & full overview", icon: Home },
  { label: "Case Studies & Proof", href: "/results/", desc: "M&V-verified results from Amazon, Four Seasons & more", icon: FileText },
  { label: "Get a Full Proposal", href: "/savings/", desc: "ROI calculator + detailed product overview", icon: BarChart2 },
  { label: "Colorado Properties", href: "/locations/colorado", desc: "Serving all of Colorado — Hunter Lundquist", icon: MapPin },
  { label: "Texas Properties", href: "/locations/texas", desc: "Serving Houston, DFW, Austin & San Antonio", icon: MapPin },
  { label: "Smart Valve™ Info Sheet", href: "/pwv-dashboard/", desc: "Verified performance data, case studies & product specs", icon: BookOpen },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,13,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5 border border-white/20 bg-white/10">
            <img src={logoSrc} alt="Perfect Water Valve" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="font-headline font-semibold text-lg leading-none tracking-tight text-white">
              Perfect Water Valve
            </div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#5BBFE0' }}>
              Live Impact Counter
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {SECTION_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}

          {/* Explore dropdown */}
          <div className="relative" ref={exploreRef}>
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Explore
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`} />
            </button>
            {exploreOpen && (
              <div
                className="absolute right-0 top-full mt-3 w-72 rounded-2xl shadow-2xl overflow-hidden"
                style={{ background: "rgba(10,15,35,0.97)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}
              >
                <div className="p-2">
                  {EXPLORE_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setExploreOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(3,116,167,0.2)", border: "1px solid rgba(3,116,167,0.3)" }}>
                          <Icon className="w-4 h-4" style={{ color: '#5BBFE0' }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">{link.label}</div>
                          <div className="text-xs text-white/45 mt-0.5 leading-relaxed">{link.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a href="tel:3615851111" className="hidden lg:flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            (361) 585-1111
          </a>
          <a
            href="/"
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
        <div className="md:hidden border-t border-white/10 px-4 py-6 flex flex-col gap-1"
          style={{ background: "rgba(6,13,26,0.98)" }}>
          {SECTION_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-left py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/5 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="pt-3 pb-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Explore</div>
            {EXPLORE_LINKS.map((link) => {
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
            href="/"
            className="mt-3 px-5 py-3 rounded-full text-white text-sm font-semibold text-center"
            style={{ background: '#0374A7' }}
            onClick={() => setMenuOpen(false)}
          >
            Request Assessment
          </a>
          <a href="tel:3615851111" className="text-sm text-white/40 text-center mt-2">(361) 585-1111</a>
        </div>
      )}
    </header>
  );
}
