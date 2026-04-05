import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, BarChart2, Zap, FileText, MapPin, BookOpen, Building2, ShieldCheck, Server, Hotel, Car, Home, HeartPulse, ArrowRight, Leaf, Wrench, AlertTriangle } from "lucide-react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Clients", href: "/#clients" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const INDUSTRIES = [
  { label: "Data Centers", href: "/industries/data-centers", emoji: "🖥️", icon: Server, desc: "Amazon YYZ3: 58.69% peak — cooling tower & WUE", sub: [
    { label: "Cooling Water Costs", href: "/industries/data-centers/cooling-water-costs" },
    { label: "Hyperscale ROI", href: "/industries/data-centers/hyperscale-roi" },
    { label: "WUE & Regulatory Risk", href: "/industries/data-centers/wue-regulatory-risk" },
  ]},
  { label: "Hospitals & Healthcare", href: "/industries/hospitals", emoji: "🏥", icon: HeartPulse, desc: "NSF 61 & 372 certified — Legionella & water compliance", sub: [
    { label: "Hospital Water Costs", href: "/industries/hospitals/water-costs" },
    { label: "Legionella & Biofilm Risk", href: "/industries/hospitals/legionella-biofilm-risk" },
    { label: "Sterile Water & Compliance", href: "/industries/hospitals/sterile-water-compliance" },
  ]},
  { label: "Hotels & Hospitality", href: "/industries/hotels", emoji: "🏨", icon: Hotel, desc: "Four Seasons 26% avg — laundry, cooling, LEED", sub: [
    { label: "Hotel Water Costs", href: "/industries/hotels/water-costs" },
    { label: "Laundry & Cooling Towers", href: "/industries/hotels/laundry-cooling-towers" },
    { label: "Green Certification", href: "/industries/hotels/green-certification" },
  ]},
  { label: "Car Washes", href: "/industries/car-washes", emoji: "🚗", icon: Car, desc: "Caliber 23% avg across 5 sites — hard water scale", sub: [
    { label: "Water Costs", href: "/industries/car-washes/water-costs" },
    { label: "Hard Water & Equipment", href: "/industries/car-washes/hard-water-equipment" },
  ]},
  { label: "Multifamily", href: "/industries/multifamily", emoji: "🏢", icon: Home, desc: "Grand Central Tampa $50K/yr — master meter savings", sub: [
    { label: "Multifamily Water Costs", href: "/industries/multifamily/water-costs" },
    { label: "Irrigation & Common Areas", href: "/industries/multifamily/irrigation-common-areas" },
  ]},
  { label: "Golf Courses", href: "/industries/golf-courses", emoji: "⛳", icon: Leaf, desc: "15%–35% savings on irrigation, clubhouse, pool & drought compliance", sub: [] },
];

function getIndustryContext(location: string): { label: string; links: { label: string; href: string }[] } | null {
  for (const ind of INDUSTRIES) {
    if (!ind.sub || ind.sub.length === 0) continue;
    const isHub = location === ind.href || location === ind.href + "/";
    const subMatch = ind.sub.find((s) => location.startsWith(s.href));
    if (isHub) {
      return { label: ind.label, links: ind.sub };
    }
    if (subMatch) {
      return {
        label: ind.label,
        links: [
          { label: ind.label, href: ind.href },
          ...ind.sub.filter((s) => s.href !== subMatch.href),
        ],
      };
    }
  }
  return null;
}

const dropdownBase = {
  background: "rgba(10,15,35,0.97)",
  border: "1px solid rgba(255,255,255,0.1)",
  backdropFilter: "blur(20px)",
};

export function Navbar({ onScrollTo }: { onScrollTo?: (id: string) => void } = {}) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const [mobileIndOpen, setMobileIndOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  const industryCtx = getIndustryContext(location);
  const activeNavLinks = industryCtx ? industryCtx.links : NAV_LINKS;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const header = document.querySelector("header[data-navbar]");
      if (header && !header.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      data-navbar
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,10,26,0.97)" : "rgba(28,52,66,0.93)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/"
          className="flex items-center gap-3 hover:opacity-95 transition-opacity rounded-xl px-2.5 py-1.5"
          style={{ background: 'rgba(3,116,167,0.18)', border: '1px solid rgba(91,191,224,0.25)' }}
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center p-1.5 shadow-sm" style={{ background: '#EEF6FB', border: '1px solid rgba(3,116,167,0.3)' }}>
            <img src={logoSrc} alt="Perfect Water Valve" className="w-full h-full object-contain drop-shadow" />
          </div>
          <div>
            <div className="font-headline font-bold text-[17px] leading-none tracking-tight text-white">Perfect Water Valve</div>
            <div className="flex items-center gap-1 mt-1">
              <ShieldCheck className="w-3 h-3 shrink-0" style={{ color: '#DEC600' }} />
              <span className="text-[11px] font-semibold" style={{ color: '#DEC600' }}>Guaranteed 15%–35% Annual Savings</span>
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-300">
          {industryCtx && (
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60 px-2 mr-1">{industryCtx.label}:</span>
          )}
          {activeNavLinks.map((l) => (
            <a key={l.label} href={l.href}
              className="px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              {l.label}
            </a>
          ))}

          {/* Explore mega-menu trigger */}
          <button
            onClick={() => setExploreOpen(!exploreOpen)}
            className="flex items-center gap-1.5 text-sm font-bold transition-all px-4 py-1.5 rounded-full border"
            style={{
              color: '#5BBFE0',
              borderColor: exploreOpen ? 'rgba(91,191,224,0.7)' : 'rgba(91,191,224,0.45)',
              background: exploreOpen ? 'rgba(91,191,224,0.16)' : 'rgba(91,191,224,0.08)',
            }}>
            Explore
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`} />
          </button>
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:7209373004"
            className="hidden lg:flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            (720) 937-3004
          </a>
          <a href="/#contact"
            className="px-5 py-2 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.35)' }}>
            Request Assessment
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-white/70 hover:text-white transition-colors p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* FULL-WIDTH MEGA-MENU */}
      <AnimatePresence>
        {exploreOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full shadow-2xl border-t"
            style={{ ...dropdownBase, borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-4 gap-8">

              {/* Col 1 — Resources */}
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: 'rgba(91,191,224,0.55)' }}>Resources</div>
                <div className="flex flex-col gap-0.5">
                  {/* Case Studies — with deep-dive sub-links */}
                  <div>
                    <a href="/results/" onClick={() => setExploreOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "rgba(3,116,167,0.2)", border: "1px solid rgba(3,116,167,0.3)" }}>
                        <FileText className="w-4 h-4" style={{ color: '#5BBFE0' }} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors leading-tight">Case Studies & Proof</div>
                        <div className="text-[11px] leading-snug mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Amazon, Four Seasons, Caliber & more — M&V verified</div>
                      </div>
                    </a>
                    <div className="pl-[52px] flex flex-col mb-2">
                      {[
                        { label: "Amazon YYZ3 — 17% avg, 58.69% peak", href: "/blog/amazon-yyz3-case-study" },
                        { label: "Four Seasons — 26% avg, $27K/yr", href: "/blog/four-seasons-case-study" },
                        { label: "St. Regis Toronto — $49,889 CAD/yr", href: "/blog/st-regis-toronto-case-study" },
                      ].map((s) => (
                        <a key={s.href} href={s.href} onClick={() => setExploreOpen(false)}
                          className="text-[11px] py-0.5 px-2 rounded-md text-white/40 hover:text-sky-300 hover:bg-white/5 transition-colors">
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Other resource links */}
                  {[
                    { label: "Smart Valve™ Info Sheet", href: "/infosheet/", desc: "Industry-by-industry data, charts & verified performance", icon: BookOpen },
                    { label: "Plumbing Protection", href: "/benefits/plumbing-protection", desc: "Pressure stabilization, scale prevention & air entrainment", icon: Wrench },
                    { label: "Common Misconceptions", href: "/common-misconceptions", desc: "Check valves, low-flow fixtures & PRVs won't reduce your bill", icon: AlertTriangle },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.href} href={item.href} onClick={() => setExploreOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors group">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(3,116,167,0.2)", border: "1px solid rgba(3,116,167,0.3)" }}>
                          <Icon className="w-4 h-4" style={{ color: '#5BBFE0' }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors leading-tight">{item.label}</div>
                          <div className="text-[11px] leading-snug mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Col 2 — Locations */}
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: 'rgba(91,191,224,0.55)' }}>Locations</div>
                <div className="flex flex-col gap-1">
                  {[
                    { label: "US States", note: "All 50 states" },
                    { label: "Major Cities", note: "Denver, Miami, Phoenix & more" },
                    { label: "Canada", note: "Ontario, BC, Alberta & more" },
                    { label: "International", note: "UK, Europe, Asia-Pacific" },
                  ].map((item) => (
                    <a key={item.label} href="/locations/usa" onClick={() => setExploreOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/6 transition-colors group">
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">{item.label}</div>
                        <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.note}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#5BBFE0' }} />
                    </a>
                  ))}
                  <a href="/locations/usa" onClick={() => setExploreOpen(false)}
                    className="flex items-center gap-1 mt-2 px-3 py-1.5 text-xs font-semibold rounded-xl hover:bg-white/6 transition-colors"
                    style={{ color: 'rgba(91,191,224,0.7)' }}>
                    <MapPin className="w-3 h-3" /> Browse All Locations
                  </a>
                </div>
              </div>

              {/* Col 3 — Industries */}
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: 'rgba(91,191,224,0.55)' }}>Industries</div>
                <div className="flex flex-col gap-0.5">
                  {INDUSTRIES.map((ind) => {
                    const Icon = ind.icon;
                    return (
                      <div key={ind.href}>
                        <a href={ind.href} onClick={() => setExploreOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/6 transition-colors group">
                          <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                            style={{ background: "rgba(3,116,167,0.2)", border: "1px solid rgba(3,116,167,0.3)" }}>
                            <Icon className="w-3 h-3" style={{ color: '#5BBFE0' }} />
                          </div>
                          <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors leading-tight">{ind.label}</div>
                        </a>
                        {ind.sub && (
                          <div className="pl-[38px] flex flex-col mb-1">
                            {ind.sub.map((s) => (
                              <a key={s.href} href={s.href} onClick={() => setExploreOpen(false)}
                                className="text-[11px] py-0.5 px-2 rounded-md text-white/40 hover:text-sky-300 hover:bg-white/5 transition-colors">
                                {s.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <a href="/industries" onClick={() => setExploreOpen(false)}
                    className="flex items-center gap-1 mt-1 px-3 py-1.5 text-xs font-semibold rounded-xl hover:bg-white/6 transition-colors"
                    style={{ color: 'rgba(91,191,224,0.7)' }}>
                    <Building2 className="w-3 h-3" /> All Industry Hubs
                  </a>
                </div>
              </div>

              {/* Col 4 — Get Started */}
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: 'rgba(91,191,224,0.55)' }}>Get Started</div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Live Savings Counter", href: "/impact/", desc: "Real-time cumulative water savings across all sites", icon: Zap },
                    { label: "Get a Full Proposal", href: "/savings/", desc: "ROI calculator + detailed product overview", icon: BarChart2 },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.href} href={item.href} onClick={() => setExploreOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors group">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(3,116,167,0.2)", border: "1px solid rgba(3,116,167,0.3)" }}>
                          <Icon className="w-4 h-4" style={{ color: '#5BBFE0' }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors leading-tight">{item.label}</div>
                          <div className="text-[11px] leading-snug mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                  <div className="mt-4 p-3 rounded-xl" style={{ background: 'rgba(3,116,167,0.15)', border: '1px solid rgba(3,116,167,0.3)' }}>
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(91,191,224,0.7)' }}>Speak Directly</div>
                    <a href="tel:7209373004" className="text-sm font-bold text-white hover:text-sky-300 transition-colors">(720) 937-3004</a>
                    <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>info@perfectwatervalve.com</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 overflow-hidden" style={{ background: "#0A0F1E" }}>
            <div className="p-4 flex flex-col gap-1 overflow-y-auto max-h-[80vh]">
              {industryCtx && (
                <div className="text-xs font-bold uppercase tracking-widest text-primary/60 py-1 px-1 mb-1">{industryCtx.label}</div>
              )}
              {activeNavLinks.map((l) => (
                <a key={l.label} href={l.href}
                  className="text-base font-medium text-white/70 hover:text-white transition-colors py-2.5 border-b border-white/5"
                  onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))}

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
                      <div key={ind.href}>
                        <a href={ind.href} onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 py-1.5 text-white/70 hover:text-white text-sm font-medium">
                          <span>{ind.emoji}</span>{ind.label}
                        </a>
                        {ind.sub && (
                          <div className="pl-6 flex flex-col gap-0.5 mb-1">
                            {ind.sub.map((s) => (
                              <a key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
                                className="text-xs py-1 text-white/40 hover:text-sky-300 transition-colors">
                                {s.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Locations accordion */}
              <div>
                <button onClick={() => setMobileLocOpen(!mobileLocOpen)}
                  className="w-full text-left flex justify-between items-center py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/5">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Locations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLocOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {[
                      { label: "US States", note: "All 50 states" },
                      { label: "Major Cities", note: "Denver, Miami, Phoenix & more" },
                      { label: "Canada", note: "Ontario, BC, Alberta" },
                      { label: "International", note: "UK, Europe, Asia-Pacific" },
                    ].map((item) => (
                      <a key={item.label} href="/locations/usa" onClick={() => setMenuOpen(false)}
                        className="flex flex-col py-1.5 text-white/60 hover:text-white text-sm">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-xs text-white/35">{item.note}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Explore accordion */}
              <div>
                <button onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                  className="w-full text-left flex justify-between items-center py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/5">
                  <span>Explore</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExploreOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileExploreOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {/* Case Studies with sub-links */}
                    <a href="/results/" onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 py-1.5 text-white/60 hover:text-white text-sm">
                      <FileText className="w-3.5 h-3.5 shrink-0" style={{ color: '#5BBFE0' }} />
                      Case Studies & Proof
                    </a>
                    <div className="pl-6 flex flex-col gap-0.5 mb-1">
                      {[
                        { label: "Amazon YYZ3 — 17% avg, 58.69% peak", href: "/blog/amazon-yyz3-case-study" },
                        { label: "Four Seasons — 26% avg, $27K/yr", href: "/blog/four-seasons-case-study" },
                        { label: "St. Regis Toronto — $49,889 CAD/yr", href: "/blog/st-regis-toronto-case-study" },
                      ].map((s) => (
                        <a key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
                          className="text-xs py-1 text-white/40 hover:text-sky-300 transition-colors">
                          {s.label}
                        </a>
                      ))}
                    </div>
                    {/* Other explore links */}
                    {[
                      { label: "Smart Valve™ Info Sheet", href: "/infosheet/", icon: BookOpen },
                      { label: "Plumbing Protection", href: "/benefits/plumbing-protection", icon: Wrench },
                      { label: "Common Misconceptions", href: "/common-misconceptions", icon: AlertTriangle },
                      { label: "Live Savings Counter", href: "/impact/", icon: Zap },
                      { label: "Get a Full Proposal", href: "/savings/", icon: BarChart2 },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 py-1.5 text-white/60 hover:text-white text-sm">
                          <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#5BBFE0' }} />
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              <a href="/#contact"
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
