import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Home, FileText, Zap, BarChart2, MapPin, BookOpen, Building2 } from "lucide-react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const REP = {
  name: "Hunter Lundquist",
  phone: "720-937-3004",
  email: "info@perfectwatervalve.com",
};

const LOCATIONS = [
  { label: "All Locations (US & Worldwide)", href: "/locations/usa", emoji: "🌎" },
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
  { label: "Data Centers", href: "/locations/industries/data-centers", emoji: "🖥️" },
  { label: "Hotels & Hospitality", href: "/locations/industries/hotels", emoji: "🏨" },
  { label: "Car Washes", href: "/locations/industries/car-washes", emoji: "🚗" },
  { label: "Multifamily", href: "/locations/industries/multifamily", emoji: "🏢" },
  { label: "Hospitals & Healthcare", href: "/locations/industries/hospitals", emoji: "🏥" },
];

const EXPLORE_LINKS = [
  { label: "Official Website", href: "/", desc: "Main homepage & full overview", icon: Home },
  { label: "Case Studies & Proof", href: "/results/", desc: "M&V-verified results from Amazon, Four Seasons & more", icon: FileText },
  { label: "Locations", href: "/locations/usa", desc: "Serving businesses across the US and worldwide", icon: MapPin },
  { label: "Industries", href: "/locations/industries/data-centers", desc: "Data centers, hotels, car washes & more", icon: Building2 },
  { label: "Live Savings Counter", href: "/impact/", desc: "Watch cumulative water savings in real time", icon: Zap },
  { label: "Get a Full Proposal", href: "/savings/", desc: "ROI calculator + detailed product overview", icon: BarChart2 },
  { label: "Smart Valve™ Info Sheet", href: "/pwv-dashboard/", desc: "Verified performance data, case studies & product specs", icon: BookOpen },
];

const dropdownBase = {
  background: "rgba(10,15,35,0.97)",
  border: "1px solid rgba(255,255,255,0.1)",
  backdropFilter: "blur(20px)",
};

export function Navbar({ onScrollTo }: { onScrollTo: (id: string) => void; page?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const [mobileIndOpen, setMobileIndOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  const handleScroll = (id: string) => {
    setMobileOpen(false);
    onScrollTo(id);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Rep contact bar */}
      <div className="py-1.5 px-4 text-xs font-medium text-center text-white flex justify-center items-center gap-2 flex-wrap" style={{ background: "#0374A7" }}>
        <span>{REP.name} — Colorado Rep</span>
        <span className="hidden sm:inline opacity-60">|</span>
        <a href={`tel:${REP.phone.replace(/-/g, "")}`} className="hover:underline">{REP.phone}</a>
        <span className="hidden sm:inline opacity-60">|</span>
        <a href={`mailto:${REP.email}`} className="hover:underline hidden sm:inline">{REP.email}</a>
      </div>

      {/* Main nav */}
      <div className="bg-[#0A0F1E]/92 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">

          {/* Brand */}
          <a href="/locations/colorado" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5">
              <img src={logoSrc} alt="Perfect Water Valve" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-[15px] leading-none tracking-tight text-white">Perfect Water Valve</div>
              <div className="text-[11px] font-medium mt-0.5" style={{ color: "#5BBFE0" }}>Guaranteed 15% Savings</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-300">
            {/* Explore dropdown */}
            <div className="relative" ref={exploreRef}>
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
              <AnimatePresence>
                {exploreOpen && (
                  <motion.div initial={{ opacity: 0, y: -6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 w-72 rounded-2xl shadow-2xl overflow-hidden" style={dropdownBase}
                    onMouseLeave={() => setExploreOpen(false)}>
                    <div className="p-2">
                      {EXPLORE_LINKS.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a key={link.href} href={link.href} onClick={() => setExploreOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-colors group">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: "rgba(3,116,167,0.2)", border: "1px solid rgba(3,116,167,0.3)" }}>
                              <Icon className="w-4 h-4" style={{ color: "#5BBFE0" }} />
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
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${REP.phone.replace(/-/g, "")}`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{REP.phone}</a>
            <button onClick={() => handleScroll("contact")} className="text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5"
              style={{ background: "#0374A7", boxShadow: "0 4px 16px rgba(3,116,167,0.3)" }}>
              Request Assessment
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-white/10 overflow-hidden" style={{ background: "#0A0F1E" }}>
            <div className="p-4 flex flex-col gap-1">
              {/* Locations accordion */}
              <div>
                <button onClick={() => setMobileLocOpen(!mobileLocOpen)} className="w-full text-left flex justify-between items-center py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/5">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Locations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLocOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {LOCATIONS.map((loc) => (
                      <a key={loc.href} href={loc.href} className="flex items-center gap-2 py-1.5 text-white/60 hover:text-white text-sm">
                        <span>{loc.emoji}</span>{loc.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {/* Industries accordion */}
              <div>
                <button onClick={() => setMobileIndOpen(!mobileIndOpen)} className="w-full text-left flex justify-between items-center py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/5">
                  <span className="flex items-center gap-2"><Building2 className="w-4 h-4" /> Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileIndOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {INDUSTRIES.map((ind) => (
                      <a key={ind.href} href={ind.href} className="flex items-center gap-2 py-1.5 text-white/60 hover:text-white text-sm">
                        <span>{ind.emoji}</span>{ind.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {/* Explore links */}
              <div className="pt-2 pb-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">Explore</div>
                {EXPLORE_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 py-2.5 text-white/70 hover:text-white transition-colors">
                      <Icon className="w-4 h-4 shrink-0" style={{ color: "#5BBFE0" }} />
                      <span className="text-base font-medium">{link.label}</span>
                    </a>
                  );
                })}
              </div>
              <button onClick={() => handleScroll("contact")} className="mt-3 py-3 rounded-full text-white font-semibold text-center text-sm" style={{ background: "#0374A7" }}>
                Request Assessment
              </button>
              <a href={`tel:${REP.phone.replace(/-/g, "")}`} className="text-sm text-white/40 text-center mt-2">{REP.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
