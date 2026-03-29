import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Home, FileText, Zap, BarChart2, MapPin, BookOpen } from "lucide-react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";

type Page = "colorado" | "texas";

const COLORADO_REP = {
  name: "Hunter Lundquist",
  phone: "720-937-3004",
  email: "Hunter@perfectsynergysolutions.com",
};

const TEXAS_REP = {
  name: "Perfect Water Valve",
  phone: "(361) 585-1111",
  email: "support@PerfectWaterValve.com",
};

const COLORADO_SECTIONS = [
  { label: "How It Works", id: "how-it-works" },
  { label: "Savings", id: "savings-calc" },
  { label: "Why Colorado", id: "why-colorado" },
  { label: "FAQ", id: "faq" },
];

const TEXAS_SECTIONS = [
  { label: "How It Works", id: "how-it-works" },
  { label: "Savings", id: "savings-calc" },
  { label: "Why Texas", id: "why-texas" },
  { label: "FAQ", id: "faq" },
];

const EXPLORE_LINKS = [
  { label: "Official Website", href: "/", desc: "Main homepage & full overview", icon: Home },
  { label: "Case Studies & Proof", href: "/results/", desc: "M&V-verified results from Amazon, Four Seasons & more", icon: FileText },
  { label: "Live Savings Counter", href: "/impact/", desc: "Watch cumulative water savings in real time", icon: Zap },
  { label: "Get a Full Proposal", href: "/savings/", desc: "ROI calculator + detailed product overview", icon: BarChart2 },
  { label: "Colorado", href: "/locations/colorado", desc: "Local Colorado rep & utility savings programs", icon: MapPin },
  { label: "Texas", href: "/locations/texas", desc: "SAWS, Austin, Dallas & Houston utility savings", icon: MapPin },
  { label: "Smart Valve™ Info Sheet", href: "/pwv-dashboard/", desc: "Verified performance data, case studies & product specs", icon: BookOpen },
];

export function Navbar({ onScrollTo, page = "colorado" }: { onScrollTo: (id: string) => void; page?: Page }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  const rep = page === "texas" ? TEXAS_REP : COLORADO_REP;
  const sectionLinks = page === "texas" ? TEXAS_SECTIONS : COLORADO_SECTIONS;
  const stateLabel = page === "texas" ? "Texas" : "Colorado";
  const repLabel = page === "texas" ? "Texas" : "Colorado Rep";

  const handleScroll = (id: string) => {
    setMobileOpen(false);
    onScrollTo(id);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Rep contact bar */}
      <div
        className="py-1.5 px-4 text-xs font-medium text-center text-white flex justify-center items-center gap-2 flex-wrap"
        style={{ background: "#0374A7" }}
      >
        <span>{rep.name} — {repLabel}</span>
        <span className="hidden sm:inline opacity-60">|</span>
        <a href={`tel:${rep.phone.replace(/[\s()-]/g, "")}`} className="hover:underline">
          {rep.phone}
        </a>
        <span className="hidden sm:inline opacity-60">|</span>
        <a href={`mailto:${rep.email}`} className="hover:underline hidden sm:inline">
          {rep.email}
        </a>
      </div>

      {/* Main nav bar */}
      <div className="bg-[#0A0F1E]/92 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">

          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5">
              <img src={logoSrc} alt="Perfect Water Valve" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight hidden sm:block" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              <span className="text-lg text-white">PWV</span><br />
              <span className="text-lg" style={{ color: "#DEC600" }}>{stateLabel}</span>
            </div>
          </button>

          {/* Desktop section links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            {sectionLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => handleScroll(l.id)}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}

            {/* Explore pill dropdown */}
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className="flex items-center gap-1.5 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:bg-[rgba(3,116,167,0.25)]"
                style={{
                  border: "1.5px solid rgba(3,116,167,0.75)",
                  background: exploreOpen ? "rgba(3,116,167,0.25)" : "rgba(3,116,167,0.12)",
                }}
              >
                <span style={{ color: "#5BBFE0", fontSize: "10px" }}>✦</span>
                Explore
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 w-72 rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                      background: "rgba(10,15,35,0.97)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(20px)",
                    }}
                    onMouseLeave={() => setExploreOpen(false)}
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
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                              style={{
                                background: "rgba(3,116,167,0.2)",
                                border: "1px solid rgba(3,116,167,0.3)",
                              }}
                            >
                              <Icon className="w-4 h-4" style={{ color: "#5BBFE0" }} />
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop right: phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${rep.phone.replace(/[\s()-]/g, "")}`}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              {rep.phone}
            </a>
            <button
              onClick={() => handleScroll("contact")}
              className="text-white px-6 py-2.5 rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
              style={{ background: "#0374A7", boxShadow: "0 4px 16px rgba(3,116,167,0.3)" }}
            >
              See Your Savings
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
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-white/10 overflow-hidden"
            style={{ background: "#0A0F1E" }}
          >
            <div className="p-4 flex flex-col gap-1">
              {sectionLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleScroll(l.id)}
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
                      className="flex items-center gap-3 py-2.5 text-white/70 hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4 shrink-0" style={{ color: "#5BBFE0" }} />
                      <span className="text-base font-medium">{link.label}</span>
                    </a>
                  );
                })}
              </div>
              <button
                onClick={() => handleScroll("contact")}
                className="mt-3 py-3 rounded-full text-white font-bold text-center"
                style={{ background: "#0374A7" }}
              >
                See Your Savings
              </button>
              <a
                href={`tel:${rep.phone.replace(/[\s()-]/g, "")}`}
                className="text-sm text-white/40 text-center mt-2"
              >
                {rep.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
