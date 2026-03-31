import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Home, Hotel, Cross, Droplets, Utensils, Flag,
  CheckCircle2, ChevronDown, ArrowRight, ShieldCheck, ZapOff, Activity,
  TrendingUp, AlertTriangle, DollarSign, Zap, Globe, Thermometer,
  MapPin, BarChart2, Leaf, Factory, Server
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import valveDiagram from "@assets/PWV_-_how_valve_works_image_1774323165404.png";
import { BubbleValveSection } from "@/components/BubbleValveSection";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/pwv-contact";
const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

export interface LocationConfig {
  state: string;
  emoji: string;
  headline: string;
  subheadline: string;
  urgencyBadge?: string;
  heroStats: { label: string; value: string }[];
  whyTitle: string;
  whyIntro: string;
  whyPoints: { icon: string; color: string; title: string; body: string }[];
  caseStudies?: string[];
  markets: string[];
  faqItems: { q: string; a: string }[];
  contactHeading: string;
  contactBody: string;
  contactBullets: { title: string; desc: string }[];
  source: string;
  seoTitle?: string;
  seoDescription?: string;
  seoCanonical?: string;
  showDataCenterSection?: boolean;
  alsoServing?: { name: string; slug: string }[];
  alsoServingHeading?: string;
}

const COLOR_MAP: Record<string, string> = {
  red: "bg-red-500/10 text-red-500 border-red-500/20",
  orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  teal: "bg-teal-500/10 text-teal-600 border-teal-500/20",
  purple: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  green: "bg-green-500/10 text-green-600 border-green-500/20",
};

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp: TrendingUp,
  AlertTriangle: AlertTriangle,
  DollarSign: DollarSign,
  Droplets: Droplets,
  Building2: Building2,
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Globe: Globe,
  Thermometer: Thermometer,
  MapPin: MapPin,
  BarChart2: BarChart2,
  Leaf: Leaf,
  Factory: Factory,
  Server: Server,
  Hotel: Hotel,
  Home: Home,
  Flag: Flag,
};

const DEFAULT_CASE_STUDIES = [
  { label: "Data Center / Logistics", name: "Amazon YYZ3 Fulfillment Center", stat: "58.69% Peak", sub: "17% avg — 6 verified quarters", items: ["Peak reduction — M&V verified", "17% sustained average savings", "6 consecutive verified quarters", "Zero operational disruption"] },
  { label: "Luxury Hospitality", name: "Four Seasons Fort Lauderdale", stat: "$27K/yr", sub: "26% average savings", items: ["26% water reduction", "$27,000 annual savings verified", "Zero guest impact", "No maintenance required"] },
  { label: "Car Wash Chain", name: "Caliber Car Wash (5 Sites)", stat: "23% Avg", sub: "$38,400/yr verified", items: ["23% weighted average savings", "5 verified sites", "High-volume continuous use", "Consistent results across all locations"] },
  { label: "Mixed-Use Complex", name: "Grand Central at Kennedy", stat: "$50K/yr", sub: "Tampa, FL — 23% reduction", items: ["23% metered reduction", "$50,000 annual savings", "Large multi-use property", "Exceeded guarantee by 8%"] },
];

export default function LocationPage({ config }: { config: LocationConfig }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const prevTitle = document.title;
    const title = config.seoTitle || `${config.state} Commercial Water Savings | Smart Valve™ | Perfect Water Valve`;
    const desc = config.seoDescription || `Smart Valve™ cuts commercial water bills 15–58% in ${config.state}. Guaranteed in writing. NSF certified. No power, no moving parts. Free assessment available.`;
    const canonical = config.seoCanonical || `https://www.perfectwatervalve.com/locations/${config.state.toLowerCase().replace(/\s+/g, "-")}`;
    document.title = title;
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };
    setMeta("description", desc);
    setLink("canonical", canonical);
    setMeta("og:title", title, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", "https://www.perfectwatervalve.com/favicon.png", "property");
    let jsonLd = document.getElementById("page-jsonld");
    if (!jsonLd) { jsonLd = document.createElement("script"); jsonLd.setAttribute("type", "application/ld+json"); jsonLd.id = "page-jsonld"; document.head.appendChild(jsonLd); }
    jsonLd.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": `Smart Valve™ — ${config.state} Commercial Water Savings`, "url": canonical, "description": desc, "provider": { "@type": "Organization", "name": "Perfect Water Valve", "url": "https://www.perfectwatervalve.com", "telephone": "+17209373004", "email": "info@perfectwatervalve.com" }, "areaServed": config.state, "serviceType": "Commercial Water Savings" });
    let faqJsonLd = document.getElementById("page-faq-jsonld");
    if (!faqJsonLd) { faqJsonLd = document.createElement("script"); faqJsonLd.setAttribute("type", "application/ld+json"); faqJsonLd.id = "page-faq-jsonld"; document.head.appendChild(faqJsonLd); }
    faqJsonLd.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": config.faqItems.map(item => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } })) });
    return () => { document.title = prevTitle; };
  }, [config.seoTitle, config.seoDescription, config.seoCanonical, config.state]);

  const REGIONAL_GROUPS: { name: string; slug: string }[][] = [
    [
      { name: "Florida", slug: "florida" }, { name: "Georgia", slug: "georgia" },
      { name: "South Carolina", slug: "south-carolina" }, { name: "North Carolina", slug: "north-carolina" },
      { name: "Tennessee", slug: "tennessee" }, { name: "Alabama", slug: "alabama" },
      { name: "Mississippi", slug: "mississippi" }, { name: "Virginia", slug: "virginia" },
      { name: "West Virginia", slug: "west-virginia" },
    ],
    [
      { name: "New York", slug: "new-york" }, { name: "New Jersey", slug: "new-jersey" },
      { name: "Pennsylvania", slug: "pennsylvania" }, { name: "Connecticut", slug: "connecticut" },
      { name: "Massachusetts", slug: "massachusetts" }, { name: "Rhode Island", slug: "rhode-island" },
      { name: "Vermont", slug: "vermont" }, { name: "New Hampshire", slug: "new-hampshire" },
      { name: "Maine", slug: "maine" }, { name: "Delaware", slug: "delaware" },
      { name: "Maryland", slug: "maryland" },
    ],
    [
      { name: "Ohio", slug: "ohio" }, { name: "Indiana", slug: "indiana" },
      { name: "Illinois", slug: "illinois" }, { name: "Michigan", slug: "michigan" },
      { name: "Wisconsin", slug: "wisconsin" }, { name: "Minnesota", slug: "minnesota" },
      { name: "Iowa", slug: "iowa" }, { name: "Missouri", slug: "missouri" },
      { name: "Kansas", slug: "kansas" }, { name: "Nebraska", slug: "nebraska" },
      { name: "North Dakota", slug: "north-dakota" }, { name: "South Dakota", slug: "south-dakota" },
    ],
    [
      { name: "Texas", slug: "texas" }, { name: "Arizona", slug: "arizona" },
      { name: "New Mexico", slug: "new-mexico" }, { name: "Oklahoma", slug: "oklahoma" },
      { name: "Arkansas", slug: "arkansas" }, { name: "Louisiana", slug: "louisiana" },
    ],
    [
      { name: "Colorado", slug: "colorado" }, { name: "Utah", slug: "utah" },
      { name: "Nevada", slug: "nevada" }, { name: "Wyoming", slug: "wyoming" },
      { name: "Montana", slug: "montana" }, { name: "Idaho", slug: "idaho" },
    ],
    [
      { name: "California", slug: "california" }, { name: "Oregon", slug: "oregon" },
      { name: "Washington", slug: "washington" }, { name: "Alaska", slug: "alaska" },
      { name: "Hawaii", slug: "hawaii" },
    ],
  ];
  const regionalGroup = REGIONAL_GROUPS.find(g => g.some(s => s.name === config.state));
  const NEARBY_STATES = (regionalGroup ?? REGIONAL_GROUPS[0])
    .filter(s => s.name !== config.state)
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyAssessmentCTA />
      <Navbar onScrollTo={scrollTo} />

      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-lg">{config.emoji}</span> Serving All of {config.state}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                Official AWS &amp; CWS Partner
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {config.headline}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">{config.subheadline}</p>
            {config.urgencyBadge && (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 text-sm font-bold" style={{ background: "rgba(220,160,0,0.2)", border: "1px solid rgba(220,160,0,0.5)", color: "#FFD700" }}>
                ⚠ {config.urgencyBadge}
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Assessment <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo("savings-calc")} className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                Calculate My Savings
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm sm:text-base">
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> 58.69% Peak Savings Recorded</div>
            <a href="/results" className="flex items-center gap-2 hover:text-white/80 transition-colors underline-offset-2 hover:underline"><ShieldCheck className="w-5 h-5 opacity-80" /> 15% Savings Guaranteed in Writing</a>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Power Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> 99% Meter Compatible</div>
          </div>
        </div>
      </section>

      {/* WHY THIS STATE */}
      <section id="why-state" className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">The {config.state} Water Situation</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>{config.whyTitle}</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>{config.whyIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.whyPoints.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || Activity;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm hover:border-[#0374A7]/40 transition-colors">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${COLOR_MAP[item.color] || COLOR_MAP.blue}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#0A1F3A" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Precision Engineering. Zero Moving Parts.</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">Fully passive. NSF certified. Compatible with 99% of commercial meters — installed in under 4 hours.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "1", title: "Professional Install", desc: "Licensed technician installs upstream of your meter. Minimal disruption — most installs complete in 2–4 hours." },
              { num: "2", title: "Precision Calibration", desc: "Mechanically set to your facility's specific line pressure for maximum air elimination." },
              { num: "3", title: "Instant Savings", desc: "Air exits before the meter. Your meter reads only liquid volume. Savings appear on your very next bill." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:border-primary/40 transition-colors">
                <div className="text-7xl font-black absolute -top-4 -right-4" style={{ color: "#0030B5", opacity: 0.07 }}>{step.num}</div>
                <div className="w-12 h-12 bg-primary/15 text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10">{step.num}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-white">{step.title}</h3>
                <p className="leading-relaxed relative z-10 text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-[#121B2E] border border-white/10 p-2">
              <img src={valveDiagram} alt="Smart Valve installation diagram" className="w-full h-auto rounded-xl" />
              <p className="text-center text-sm mt-3 pb-2 text-gray-400">Smart Valve™ installation flow</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl bg-[#121B2E] border border-white/10 p-8 flex flex-col justify-center gap-5">
              {[
                { label: "Certifications", value: "NSF 61 & NSF 372" },
                { label: "Power Required", value: "None — fully passive" },
                { label: "Meter Compatibility", value: "99% of commercial meters" },
                { label: "Install Time", value: "2–4 hours, zero downtime" },
                { label: "Guaranteed Minimum", value: "≥15% bill reduction" },
                { label: "Maintenance", value: "None — no moving parts" },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-gray-400">{spec.label}</span>
                  <span className="font-semibold text-sm text-right text-white">{spec.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <BubbleValveSection />

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">Verified Performance Data</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proven Results Across Every Property Type</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">All case studies are real installations verified by AWS, CWS, and Smart Valve™ technology. Water savings case study commercial results you can count on.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {DEFAULT_CASE_STUDIES.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full" />
                <span className="inline-block px-2 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 mb-4">{c.label}</span>
                <h3 className="text-base font-bold text-white mb-2">{c.name}</h3>
                <div className="text-2xl font-black text-primary mb-1">{c.stat}</div>
                <div className="text-xs text-gray-500 mb-4">{c.sub}</div>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  {c.items.map((item, j) => <li key={j} className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href="/results/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">View all verified case studies <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Who We Serve in {config.state}</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">Any commercial property spending $5,000+/month on water. Serving {config.markets.slice(0, 4).join(", ")} and beyond.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Office Buildings", desc: "Cooling towers and domestic water lines.", href: "/industries" },
              { icon: Home, title: "Multi-Family Residential", desc: "Protect NOI against rising utility rates.", href: "/industries/multifamily" },
              { icon: Hotel, title: "Hotels & Hospitality", desc: "Invisible savings, zero guest impact.", href: "/industries/hotels" },
              { icon: Cross, title: "Hospitals & Healthcare", desc: "High-volume facilities see the largest savings.", href: "/industries/hospitals" },
              { icon: Droplets, title: "Car Washes", desc: "Water is the #1 variable cost. Smart Valve™ cuts it immediately.", href: "/industries/car-washes" },
              { icon: Building2, title: "Data Centers", desc: "Cooling water dominates operating costs.", href: "/industries/data-centers" },
              { icon: Utensils, title: "Restaurants", desc: "Lower overhead in margin-tight food service.", href: "/industries" },
              { icon: Flag, title: "Golf Courses", desc: "Irrigation and clubhouse — highest ROI application.", href: "/industries" }
            ].map((item, i) => (
              <motion.a key={i} href={item.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/25 hover:bg-white/25 transition-all flex flex-col items-center text-center no-underline">
                <div className="w-14 h-14 bg-white/20 text-white rounded-full flex items-center justify-center mb-4"><item.icon className="w-7 h-7" /></div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/75">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS CALCULATOR */}
      <StateSavingsCalc scrollTo={scrollTo} state={config.state} />

      {/* DATA CENTER RESOURCES */}
      {config.showDataCenterSection && (
        <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-2">Data Center Resources</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {config.state} Is a Major Data Center Market — Here's What Operators Need to Know
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
                Data centers are among the highest-ROI Smart Valve™ applications — among the highest savings documented across any industry. {config.state} facilities have direct access to the same technology and the same guarantee.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <a href="/industries/data-centers/cooling-water-costs"
                className="group bg-[#121B2E] border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:bg-[#1A2540] transition-all flex flex-col">
                <div className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">Deep Dive</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  How Data Centers Use Water — and Where the Waste Happens
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  Cooling tower makeup water, condenser systems, metered waste. Understand the cost drivers before evaluating any solution.
                </p>
                <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Cooling Water Costs <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a href="/industries/data-centers/hyperscale-roi"
                className="group bg-[#121B2E] border border-white/10 rounded-2xl p-6 hover:border-[#DEC600]/30 hover:bg-[#1A2540] transition-all flex flex-col">
                <div className="text-xs font-bold uppercase tracking-widest text-yellow-500/60 mb-2">ROI Model</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  Multi-Site ROI Model and the Amazon YYZ3 Benchmark
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  Enterprise deployment framework, projected savings at multiple consumption tiers, and the full Amazon YYZ3 case study. Built for VPs and CFOs.
                </p>
                <span className="text-yellow-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  See the ROI Model <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(135deg, #0374A7 0%, #025d87 60%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{config.state} FAQ</h2></div>
          <FAQAccordion items={config.faqItems} />
        </div>
      </section>

      {/* RELATED LOCATIONS
           Rule: Only render this section when config.alsoServing is defined.
           This section should only appear on pages that link to deeper, more specific pages
           (e.g. Colorado city pages linking to other CO cities). Do NOT render it on
           state-level pages that only link laterally to other state pages — that adds no
           navigation value and distracts from the contact form. */}
      {config.alsoServing && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t" style={{ backgroundColor: '#F4F8FC', borderColor: '#C5D8E8' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0374A7' }}>Also Serving</p>
              <h3 className="text-xl font-bold" style={{ color: '#0A1F3A' }}>
                {config.alsoServingHeading ?? `Smart Valve™ Installations Near ${config.state}`}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {config.alsoServing.map((s) => (
                <a
                  key={s.slug}
                  href={`/locations/${s.slug}`}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ backgroundColor: 'white', borderColor: '#C5D8E8', color: '#2E4A5A' }}
                >
                  {s.name}
                </a>
              ))}
              <a href="/locations/colorado" className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all hover:-translate-y-0.5" style={{ backgroundColor: 'rgba(3,116,167,0.05)', borderColor: '#0374A7', color: '#0374A7' }}>← Colorado State Page</a>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-white mb-4">{config.contactHeading}</h2>
              <p className="text-gray-400 mb-8">{config.contactBody}</p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                <p className="text-blue-50 text-lg font-medium">Small one-time installation fee. No monthly fees, no subscription. Pays for itself within the first few billing cycles.</p>
              </div>
              <div className="space-y-4 mb-10">
                {config.contactBullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg text-gray-300">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span><strong>{item.title}</strong> — {item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#121B2E] p-8 rounded-2xl border border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-4">Perfect Water Valve</h4>
                <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="block text-primary text-xl font-medium hover:underline mb-2">{CONTACT.phone}</a>
                <a href={`mailto:${CONTACT.email}`} className="block text-gray-300 hover:text-white transition-colors">{CONTACT.email}</a>
                <p className="text-gray-500 text-xs mt-4">Partner: American Water Savings (AWS) · Canadian Water Savings (CWS) · Smart Valve™</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free {config.state} Assessment</h3>
              <ContactForm source={config.source} />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StateSavingsCalc({ scrollTo, state }: { scrollTo: (id: string) => void; state: string }) {
  const [bill, setBill] = useState<number>(15000);
  const minSavings = bill * 0.15;
  const maxSavings = bill * 0.26;
  const annualAvg = bill * 12 * 0.20;
  const fmt = (v: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);

  return (
    <section id="savings-calc" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Calculate Your {state} Savings</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Commercial water bill calculator based on real-world Smart Valve™ installations. Partnered with AWS, CWS, and Smart Valve. How much can I save on my water bill? Enter your bill below.</p>
        </div>
        <div className="glass-panel rounded-3xl p-8 sm:p-12">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <label className="text-gray-300 font-medium text-lg">Average Monthly Water Bill</label>
              <div className="text-3xl sm:text-4xl font-bold text-white">{fmt(bill)}</div>
            </div>
            <input type="range" min="5000" max="100000" step="1000" value={bill} onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{ background: `linear-gradient(to right, #0374A7 0%, #0374A7 ${(bill - 5000) / 95000 * 100}%, #1A233A ${(bill - 5000) / 95000 * 100}%, #1A233A 100%)` }} />
            <div className="flex justify-between mt-3 text-sm text-gray-500 font-medium"><span>$5,000</span><span>$100,000+</span></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Estimated Monthly Savings</div>
              <div className="text-3xl font-bold text-primary">{fmt(minSavings)} – {fmt(maxSavings)}</div>
            </div>
            <div className="bg-[#0A0F1E] rounded-2xl p-6 border border-white/5">
              <div className="text-gray-400 font-medium mb-2">Estimated Annual Savings</div>
              <div className="text-3xl font-bold text-white">~{fmt(annualAvg)}</div>
            </div>
          </div>
          <div className="text-center mb-10">
            <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium">Payback Period: Typically within 2–4 billing cycles</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <button onClick={() => scrollTo("contact")} className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1">
              Get Your Free Assessment &rarr;
            </button>
            <p className="mt-6 text-xs text-gray-500 max-w-lg">*Calculations based on real-world Smart Valve™ installations. Minimum 15% savings guaranteed in writing. Results vary by meter type and line pressure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {items.map((faq, idx) => (
        <div key={idx} className={`border rounded-xl transition-all duration-300 backdrop-blur-sm ${openIdx === idx ? "bg-white/20 border-white/50" : "bg-white/10 border-white/20 hover:border-white/40"}`}>
          <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
            <span className="font-bold text-lg text-white">{faq.q}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${openIdx === idx ? "rotate-180 text-white" : "text-white/70"}`} />
          </button>
          <AnimatePresence>
            {openIdx === idx && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 pt-0 text-white/80 leading-relaxed">{faq.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function ContactForm({ source }: { source: string }) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", bill: "", message: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, monthly_water_bill: form.bill, source }),
      });
    } catch (err) { console.error("GHL webhook error:", err); }
    setSubmitted(true);
    setForm({ name: "", company: "", phone: "", bill: "", message: "", email: "" });
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-400";
  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5";

  if (submitted) return (
    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle2 className="w-8 h-8 text-green-600" /></div>
      <h3 className="text-xl font-bold text-gray-900">Request Sent!</h3>
      <p className="text-gray-500 text-sm max-w-sm">We'll follow up shortly. Or reach us directly at <a href="tel:7209373004" className="text-blue-600 font-medium hover:underline">720-937-3004</a>.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={labelCls}>Your Name</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Jane Smith" /></div>
        <div><label className={labelCls}>Company / Facility</label><input required value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className={inputCls} placeholder="Acme Hotel Group" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={labelCls}>Phone Number</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="(720) 555-0100" type="tel" /></div>
        <div><label className={labelCls}>Email Address</label><input required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="jane@company.com" type="email" /></div>
      </div>
      <div><label className={labelCls}>Monthly Water Bill (est.)</label><input value={form.bill} onChange={e => setForm({ ...form, bill: e.target.value })} className={inputCls} placeholder="$15,000" /></div>
      <div><label className={labelCls}>Tell Us About Your Property</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none h-24`} placeholder="Property type, size, location..." /></div>
      <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25">Get My Free Assessment →</button>
      <p className="text-xs text-center text-gray-400">No obligation. Free assessment. 15% savings guaranteed in writing.</p>
    </form>
  );
}
