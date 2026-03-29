import { useState, useEffect, useRef } from "react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import { Menu, X, ChevronDown, Home, Zap, BarChart2, MapPin, Phone } from "lucide-react";

const SECTION_LINKS = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Verified Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
];

const EXPLORE_LINKS = [
  { label: "Official Website", href: "/", desc: "Main homepage & full overview", icon: Home },
  { label: "Live Savings Counter", href: "/impact/", desc: "Watch water savings accumulate in real time", icon: Zap },
  { label: "Get a Full Proposal", href: "/savings/", desc: "ROI calculator + detailed product overview", icon: BarChart2 },
  { label: "Colorado Properties", href: "/locations/colorado", desc: "Serving all of Colorado — Hunter Lundquist", icon: MapPin },
  { label: "Texas Properties", href: "/locations/texas", desc: "Serving Houston, DFW, Austin & San Antonio", icon: MapPin },
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
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(3,116,167,0.12)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5 border"
            style={{ background: '#E8EFF7', borderColor: 'rgba(3,116,167,0.2)' }}>
            <img src={logoSrc} alt="Perfect Water Valve" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="font-headline font-semibold text-lg leading-none tracking-tight" style={{ color: '#0A1F3A' }}>
              Perfect Water Valve
            </div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#0374A7' }}>
              Verified Results
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {SECTION_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#2E4A5A' }}
            >
              {l.label}
            </button>
          ))}

          {/* Explore dropdown */}
          <div className="relative" ref={exploreRef}>
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#2E4A5A' }}
            >
              Explore
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`} />
            </button>
            {exploreOpen && (
              <div
                className="absolute right-0 top-full mt-3 w-72 rounded-2xl shadow-xl overflow-hidden"
                style={{ background: "#fff", border: "1px solid rgba(3,116,167,0.15)", boxShadow: "0 8px 32px rgba(3,116,167,0.1)" }}
              >
                <div className="p-2">
                  {EXPLORE_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setExploreOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl transition-colors group"
                        style={{ background: "transparent" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(3,116,167,0.05)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(3,116,167,0.1)", border: "1px solid rgba(3,116,167,0.2)" }}>
                          <Icon className="w-4 h-4" style={{ color: '#0374A7' }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold" style={{ color: '#0A1F3A' }}>{link.label}</div>
                          <div className="text-xs mt-0.5 leading-relaxed" style={{ color: '#6B8FA3' }}>{link.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a href="tel:3615851111" className="hidden lg:flex items-center gap-1.5 text-sm transition-colors hover:opacity-70" style={{ color: '#4A7085' }}>
            <Phone className="w-3.5 h-3.5" />
            (361) 585-1111
          </a>
          <a
            href="/"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: '#0374A7', boxShadow: '0 4px 14px rgba(3,116,167,0.3)' }}
          >
            Request Assessment
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: '#0A1F3A' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-6 flex flex-col gap-1"
          style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(3,116,167,0.1)" }}>
          {SECTION_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-left py-2.5 text-base font-medium border-b transition-colors hover:opacity-70"
              style={{ color: '#2E4A5A', borderColor: 'rgba(3,116,167,0.08)' }}
            >
              {l.label}
            </button>
          ))}
          <div className="pt-3 pb-1">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#94B4C4' }}>Explore</div>
            {EXPLORE_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 transition-colors hover:opacity-70"
                  style={{ color: '#2E4A5A' }}
                >
                  <Icon className="w-4 h-4 shrink-0" style={{ color: '#0374A7' }} />
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
          <a href="tel:3615851111" className="text-sm text-center mt-2" style={{ color: '#94B4C4' }}>(361) 585-1111</a>
        </div>
      )}
    </header>
  );
}
