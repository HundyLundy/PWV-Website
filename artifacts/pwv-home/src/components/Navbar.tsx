import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, BarChart2, Zap, FileText, MapPin, BookOpen, Building2 } from "lucide-react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const LOCATIONS = [
  { label: "All Locations (USA + UK)", href: "/locations/usa", emoji: "🌎" },
  { label: "Colorado", href: "/locations/colorado", emoji: "🏔️" },
  { label: "Texas", href: "/locations/texas", emoji: "🌵" },
  { label: "California", href: "/locations/california", emoji: "☀️" },
  { label: "Arizona", href: "/locations/arizona", emoji: "🌵" },
  { label: "Nevada", href: "/locations/nevada", emoji: "🎰" },
  { label: "New York", href: "/locations/new-york", emoji: "🗽" },
  { label: "Florida", href: "/locations/florida", emoji: "🌴" },
  { label: "Washington", href: "/locations/washington", emoji: "🌲" },
  { label: "Oregon", href: "/locations/oregon", emoji: "🌿" },
  { label: "Illinois", href: "/locations/illinois", emoji: "🏙️" },
  { label: "Utah", href: "/locations/utah", emoji: "🏜️" },
  { label: "Idaho", href: "/locations/idaho", emoji: "🥔" },
  { label: "Montana", href: "/locations/montana", emoji: "🦌" },
  { label: "Nebraska", href: "/locations/nebraska", emoji: "🌽" },
  { label: "Kansas", href: "/locations/kansas", emoji: "🌾" },
  { label: "New Mexico", href: "/locations/new-mexico", emoji: "🌶️" },
  { label: "United Kingdom", href: "/locations/uk", emoji: "🇬🇧" },
];

const INDUSTRIES = [
  { label: "Data Centers", href: "/locations/industries/data-centers", emoji: "🖥️", desc: "Amazon YYZ3 — 58.69% peak verified" },
  { label: "Hotels & Hospitality", href: "/locations/industries/hotels", emoji: "🏨", desc: "Four Seasons — $27K/yr verified" },
  { label: "Car Washes", href: "/locations/industries/car-washes", emoji: "🚗", desc: "Caliber — 23% avg, 5 sites, $38.4K/yr" },
  { label: "Multifamily", href: "/locations/industries/multifamily", emoji: "🏢", desc: "Grand Central Tampa — $50K/yr" },
  { label: "Hospitals & Healthcare", href: "/locations/industries/hospitals", emoji: "🏥", desc: "NSF 61 & 372 certified — zero clinical risk" },
];

const EXPLORE_LINKS = [
  { label: "Case Studies & Proof", href: "/results/", desc: "M&V-verified results from Amazon, Four Seasons & more", icon: FileText },
  { label: "Live Savings Counter", href: "/impact/", desc: "Watch cumulative water savings accumulate in real time", icon: Zap },
  { label: "Get a Full Proposal", href: "/savings/", desc: "ROI calculator + detailed product overview", icon: BarChart2 },
  { label: "Smart Valve™ Info Sheet", href: "/pwv-dashboard/", desc: "Verified performance data, case studies & product specs", icon: BookOpen },
];

const dropdownBase = {
  background: "rgba(10,15,35,0.97)",
  border: "1px solid rgba(255,255,255,0.1)",
  backdropFilter: "blur(20px)",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const locRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const [mobileIndOpen, setMobileIndOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeAll = () => { setLocOpen(false); setIndOpen(false); setExploreOpen(false); };

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
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-300">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className="px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              {l.label}
            </a>
          ))}

          {/* Locations dropdown */}
          <div className="relative" ref={locRef}>
            <button onClick={() => { setLocOpen(!locOpen); setIndOpen(false); setExploreOpen(false); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${locOpen ? "text-white bg-white/8" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
              <MapPin className="w-3.5 h-3.5" />
              Locations
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {locOpen && (
                <motion.div initial={{ opacity: 0, y: -6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl shadow-2xl overflow-hidden" style={dropdownBase}
                  onMouseLeave={() => setLocOpen(false)}>
                  <div className="p-2 max-h-96 overflow-y-auto">
                    {LOCATIONS.map((loc) => (
                      <a key={loc.href} href={loc.href} onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/6 transition-colors group">
                        <span className="text-base">{loc.emoji}</span>
                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{loc.label}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div className="relative" ref={indRef}>
            <button onClick={() => { setIndOpen(!indOpen); setLocOpen(false); setExploreOpen(false); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${indOpen ? "text-white bg-white/8" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
              <Building2 className="w-3.5 h-3.5" />
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${indOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {indOpen && (
                <motion.div initial={{ opacity: 0, y: -6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-72 rounded-2xl shadow-2xl overflow-hidden" style={dropdownBase}
                  onMouseLeave={() => setIndOpen(false)}>
                  <div className="p-2">
                    {INDUSTRIES.map((ind) => (
                      <a key={ind.href} href={ind.href} onClick={closeAll}
                        className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/6 transition-colors group">
                        <span className="text-xl shrink-0">{ind.emoji}</span>
                        <div>
                          <div className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{ind.label}</div>
                          <div className="text-xs text-white/40 mt-0.5">{ind.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Explore dropdown */}
          <div className="relative" ref={exploreRef}>
            <button onClick={() => { setExploreOpen(!exploreOpen); setLocOpen(false); setIndOpen(false); }}
              className="flex items-center gap-1.5 text-sm font-bold transition-all px-4 py-1.5 rounded-full border"
              style={{
                color: '#5BBFE0',
                borderColor: exploreOpen ? 'rgba(91,191,224,0.7)' : 'rgba(91,191,224,0.45)',
                background: exploreOpen ? 'rgba(91,191,224,0.16)' : 'rgba(91,191,224,0.08)',
              }}>
              Explore
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {exploreOpen && (
                <motion.div initial={{ opacity: 0, y: -6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-3 w-72 rounded-2xl shadow-2xl overflow-hidden" style={dropdownBase}
                  onMouseLeave={() => setExploreOpen(false)}>
                  <div className="p-2">
                    {EXPLORE_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a key={link.href} href={link.href} onClick={closeAll}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors group">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:7209373004"
            className="hidden lg:flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            (720) 937-3004
          </a>
          <a href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.35)' }}>
            Request Assessment
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-white/70 hover:text-white transition-colors p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 overflow-hidden" style={{ background: "#0A0F1E" }}>
            <div className="p-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href}
                  className="text-base font-medium text-white/70 hover:text-white transition-colors py-2.5 border-b border-white/5"
                  onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))}

              {/* Locations accordion */}
              <div>
                <button onClick={() => setMobileLocOpen(!mobileLocOpen)}
                  className="w-full text-left flex justify-between items-center py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/5">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Locations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLocOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {LOCATIONS.map((loc) => (
                      <a key={loc.href} href={loc.href} onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 py-1.5 text-white/60 hover:text-white text-sm">
                        <span>{loc.emoji}</span>{loc.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries accordion */}
              <div>
                <button onClick={() => setMobileIndOpen(!mobileIndOpen)}
                  className="w-full text-left flex justify-between items-center py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/5">
                  <span className="flex items-center gap-2"><Building2 className="w-4 h-4" /> Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileIndOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {INDUSTRIES.map((ind) => (
                      <a key={ind.href} href={ind.href} onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 py-1.5 text-white/60 hover:text-white text-sm">
                        <span>{ind.emoji}</span>{ind.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Explore links */}
              <div className="pt-3 pb-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Explore</div>
                {EXPLORE_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 py-2.5 text-white/70 hover:text-white transition-colors">
                      <Icon className="w-4 h-4 shrink-0" style={{ color: '#5BBFE0' }} />
                      <span className="text-base font-medium">{link.label}</span>
                    </a>
                  );
                })}
              </div>

              <a href="#contact"
                className="mt-3 px-5 py-3 rounded-full text-white text-sm font-semibold text-center"
                style={{ background: '#0374A7' }}
                onClick={() => setMenuOpen(false)}>
                Request Assessment
              </a>
              <a href="tel:7209373004" className="text-sm text-white/40 text-center mt-2">(720) 937-3004</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
