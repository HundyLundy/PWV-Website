import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, XCircle, Phone, Mail, ArrowDown, ShieldCheck, Droplet, Building2, Factory, Hotel, Car, ChevronRight, Server, Droplets, Heart, MapPin, TrendingUp, DollarSign } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BubbleValveSection } from "@/components/BubbleValveSection";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";
import smartValveSrc from "@assets/smart-valve1_1774325826879.avif";

const HOME_FAQ_ITEMS = [
  { q: "How much can Smart Valve™ reduce my commercial water bill?", a: "Smart Valve™ reduces metered water consumption 15–35% annually on average, guaranteed in writing. The minimum guaranteed savings is 15%. Peak quarter results have reached 58.69% at Amazon YYZ3 — high-volume and high-occupancy facilities tend to see the highest peaks." },
  { q: "How does Smart Valve™ work?", a: "Smart Valve™ is a passive hydrodynamic device that installs on your main water supply line between two ball valves, after the water meter. It reduces turbulence and water hammer in the line, which optimizes flow characteristics and reduces the volume of water that passes through the meter. It requires no electricity, has no moving parts, and needs no maintenance." },
  { q: "How long does installation take?", a: "Installation takes under 4 hours with zero downtime. A licensed plumber installs Smart Valve™ on the main supply line. There is no disruption to operations, no pressure loss, and no impact on water quality." },
  { q: "Is Smart Valve™ certified for potable water systems?", a: "Yes. Smart Valve™ is NSF 61 and NSF 372 certified, meaning it is safe for use in potable (drinking) water systems. It is also certified by AWS (American Water Savings) and CWS (Commercial Water Savings)." },
  { q: "What types of commercial properties does Perfect Water Valve serve?", a: "Perfect Water Valve serves hotels and resorts, data centers, hospitals and healthcare facilities, multifamily residential buildings, car washes, golf courses, industrial facilities, and commercial office buildings across all 50 states." },
  { q: "Is there a guarantee?", a: "Yes. Perfect Water Valve provides a written guarantee of a minimum 15% reduction in metered water consumption. If the savings do not meet the guaranteed minimum, we make it right." },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOME_FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
};

const homeLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Perfect Water Valve",
  "url": "https://perfectwatervalve.com",
  "telephone": "+17209373004",
  "email": "info@perfectwatervalve.com",
  "description": "Commercial water bill reduction — 15% minimum guaranteed in writing. Smart Valve™ installed at main supply line. NSF 61 & 372 certified.",
  "areaServed": "US",
  "sameAs": [
    "https://www.facebook.com/perfectwatervalve",
    "https://www.linkedin.com/company/perfectwatervalve"
  ]
};

const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Valve™ Commercial Water Savings Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Perfect Water Valve"
  },
  "description": "Passive electrochemical device installed at the main commercial water supply line. Reduces metered water consumption 15%–35% annually. Guaranteed in writing on every installation. No electricity, no moving parts, no maintenance.",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Smart Valve™ Installation",
    "itemListElement": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Smart Valve™ Installation — 15% Guaranteed Water Bill Reduction"
      }
    }]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const INDUSTRIES = [
  { name: "Commercial Office", value: 36, range: "33%–39%", note: "Texas portfolio — 2 sites verified" },
  { name: "Automotive (Car Wash)", value: 23, range: "23%", note: "Caliber Car Wash — 5 sites, M&V verified" },
  { name: "Luxury Hospitality", value: 22, range: "20%–26%", note: "St. Regis 20%+, Four Seasons 26%" },
  { name: "Multifamily / Apartments", value: 21, range: "15%–30%", note: "Forest & Charlton 17–20%, NJ portfolio range" },
  { name: "Condominiums", value: 20, range: "16%–23%", note: "Multiple verified Canadian sites" },
  { name: "Logistics / Fulfillment", value: 17, range: "16.5% avg / 58.69% peak", note: "Amazon YYZ3 & YYZ4 — dual M&V methodology" },
  { name: "Healthcare / Medical", value: 19, range: "19%", note: "RWJ Barnabas — based on 1 study" },
];
const INDUSTRY_MAX = 39;

const CLIENTS = [
  {
    initial: "A", name: "Amazon YYZ3 & YYZ4", industry: "Logistics / Fulfillment",
    color: "#1a365d", accent: "#3182CE",
    stat: "16.5% avg · 58.69% YOY peak", detail: "Two M&V reports, two methodologies. YOY comparison shows 58.69% peak at YYZ3. Per-employee normalized avg: 16.5% across both sites, six consecutive quarters."
  },
  {
    initial: "F", name: "Four Seasons Fort Lauderdale", industry: "Luxury Hospitality",
    color: "#1a2f1a", accent: "#38A169",
    stat: "$27,000/yr · 26% avg", detail: "26% daily average. Third-party M&V verified. Formal M&V report December 2025."
  },
  {
    initial: "S", name: "The St. Regis Toronto", industry: "Luxury Hospitality · Marriott",
    color: "#2d1b4e", accent: "#805AD5",
    stat: "$49,889 CAD/yr · 20%+", detail: "Chief Engineer Priyan Jayetileke confirmed. Formal report. Marriott-approved implementation."
  },
  {
    initial: "G", name: "Grand Central at Kennedy", industry: "Real Estate · Tampa FL",
    color: "#1a2f2f", accent: "#319795",
    stat: "$50,000/yr · 23% avg", detail: "Annual water bill: $240K → $190K. GM Bob Pack verified over 2-year period."
  },
  {
    initial: "H", name: "Houstonian Estates", industry: "Multifamily Real Estate",
    color: "#2d2415", accent: "#D69E2E",
    stat: "16% · ~6,000 gal/day", detail: "13M+ gallon/year property. Doug Horn, GM verified. Self-reported testimonial."
  },
  {
    initial: "C", name: "Caliber Car Wash", industry: "Automotive",
    color: "#2d1515", accent: "#E53E3E",
    stat: "23% weighted avg · 5 sites", detail: "M&V verified across 5 GA & FL locations over 3+ quarters. Formal M&V March 2026."
  },
  {
    initial: "F", name: "Forest & Charlton (100 Forest / 123 Charlton)", industry: "Multi-Residential Portfolio · Toronto",
    color: "#1a2a1a", accent: "#38A169",
    stat: "17–20% (IPMVP Option B)", detail: "CA $17,200 combined annual savings. Paired t-test at 95% confidence. Payback < 3 years."
  },
];

const PROOF_TICKER = [
  { client: "Amazon YYZ3", result: "58.69% peak savings", industry: "Fulfillment Center" },
  { client: "Four Seasons Fort Lauderdale", result: "$27,000/yr · 26% avg", industry: "Luxury Hospitality" },
  { client: "The St. Regis Toronto", result: "$49,889 CAD/yr · 20%+", industry: "Marriott Portfolio" },
  { client: "Grand Central at Kennedy", result: "$50,000/yr · 23% avg", industry: "Tampa FL Real Estate" },
  { client: "Caliber Car Wash", result: "23% avg · 5 sites", industry: "Automotive" },
  { client: "Forest & Charlton", result: "17–20% IPMVP verified", industry: "Multi-Residential Toronto" },
  { client: "Houstonian Estates", result: "16% · ~6,000 gal/day", industry: "Multifamily Real Estate" },
  { client: "RWJ Barnabas Health", result: "19% verified savings", industry: "Healthcare" },
  { client: "Texas Office Portfolio", result: "33–39% bill reduction", industry: "Commercial Office" },
  { client: "Amazon YYZ4", result: "16.5% sustained avg", industry: "Fulfillment Center" },
];

const INDUSTRY_CARDS = [
  { icon: Server, title: "Data Centers", href: "/industries/data-centers", stat: "Up to 58.69%", color: "#3182CE", bg: "rgba(49,130,206,0.08)", note: "Amazon YYZ3 verified · Cooling water OpEx" },
  { icon: Hotel, title: "Hotels & Hospitality", href: "/industries/hotels", stat: "20–26%", color: "#38A169", bg: "rgba(56,161,105,0.08)", note: "Four Seasons 26% · St. Regis 20%+" },
  { icon: Car, title: "Car Washes", href: "/industries/car-washes", stat: "23% avg", color: "#E53E3E", bg: "rgba(229,62,62,0.08)", note: "Caliber Car Wash · 5 sites M&V verified" },
  { icon: Building2, title: "Multifamily", href: "/industries/multifamily", stat: "15–30%", color: "#D69E2E", bg: "rgba(214,158,46,0.08)", note: "Grand Central at Kennedy · Toronto portfolio" },
  { icon: Heart, title: "Hospitals", href: "/industries/hospitals", stat: "19%+", color: "#805AD5", bg: "rgba(128,90,213,0.08)", note: "RWJ Barnabas Health · NSF 61 certified" },
  { icon: Factory, title: "Industrial", href: "/industries", stat: "15–39%", color: "#319795", bg: "rgba(49,151,149,0.08)", note: "Texas commercial office 33–39%" },
];

const US_STATES = [
  { name: "Alabama", slug: "alabama" }, { name: "Alaska", slug: "alaska" }, { name: "Arizona", slug: "arizona" },
  { name: "Arkansas", slug: "arkansas" }, { name: "California", slug: "california" }, { name: "Colorado", slug: "colorado" },
  { name: "Connecticut", slug: "connecticut" }, { name: "Delaware", slug: "delaware" }, { name: "Florida", slug: "florida" },
  { name: "Georgia", slug: "georgia" }, { name: "Hawaii", slug: "hawaii" }, { name: "Idaho", slug: "idaho" },
  { name: "Illinois", slug: "illinois" }, { name: "Indiana", slug: "indiana" }, { name: "Iowa", slug: "iowa" },
  { name: "Kansas", slug: "kansas" }, { name: "Kentucky", slug: "kentucky" }, { name: "Louisiana", slug: "louisiana" },
  { name: "Maine", slug: "maine" }, { name: "Maryland", slug: "maryland" }, { name: "Massachusetts", slug: "massachusetts" },
  { name: "Michigan", slug: "michigan" }, { name: "Minnesota", slug: "minnesota" }, { name: "Mississippi", slug: "mississippi" },
  { name: "Missouri", slug: "missouri" }, { name: "Montana", slug: "montana" }, { name: "Nebraska", slug: "nebraska" },
  { name: "Nevada", slug: "nevada" }, { name: "New Hampshire", slug: "new-hampshire" }, { name: "New Jersey", slug: "new-jersey" },
  { name: "New Mexico", slug: "new-mexico" }, { name: "New York", slug: "new-york" }, { name: "North Carolina", slug: "north-carolina" },
  { name: "North Dakota", slug: "north-dakota" }, { name: "Ohio", slug: "ohio" }, { name: "Oklahoma", slug: "oklahoma" },
  { name: "Oregon", slug: "oregon" }, { name: "Pennsylvania", slug: "pennsylvania" }, { name: "Rhode Island", slug: "rhode-island" },
  { name: "South Carolina", slug: "south-carolina" }, { name: "South Dakota", slug: "south-dakota" }, { name: "Tennessee", slug: "tennessee" },
  { name: "Texas", slug: "texas" }, { name: "Utah", slug: "utah" }, { name: "Vermont", slug: "vermont" },
  { name: "Virginia", slug: "virginia" }, { name: "Washington", slug: "washington" }, { name: "West Virginia", slug: "west-virginia" },
  { name: "Wisconsin", slug: "wisconsin" }, { name: "Wyoming", slug: "wyoming" },
];

const COMPARISON = [
  { feature: "Reduces water meter reading", pwv: true, other: false },
  { feature: "Eliminates air from billing", pwv: true, other: false },
  { feature: "NSF 61 & NSF 372 certified", pwv: true, other: false },
  { feature: "Written savings guarantee", pwv: "≥15% in writing", other: "None" },
  { feature: "No electricity required", pwv: true, other: "Varies" },
  { feature: "Zero moving parts / maintenance", pwv: true, other: false },
  { feature: "Installs right after main shutoff", pwv: true, other: false },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", company: "", email: "", bill: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, []);

  const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/FpCGhOJrf32qB7JtGKCM";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email || "",
          monthly_water_bill: form.bill,
          message: form.message,
          source: "perfectwatervalve.com - Contact Form",
        }),
      });
    } catch (err) {
      console.error("GHL webhook error:", err);
    }
    setSubmitted(true);
    setForm({ name: "", company: "", email: "", bill: "", message: "" });
  };

  return (
    <div className="min-h-screen font-sans">
      <Helmet>
        <title>Commercial Water Bill Savings — 15% Guaranteed in Writing | Perfect Water Valve</title>
        <meta name="description" content="Smart Valve™ cuts commercial water bills 15%–35% annually — guaranteed in writing. NSF 61 certified. Amazon YYZ3 58.69% peak savings. Free assessment." />
        <link rel="canonical" href="https://perfectwatervalve.com/" />
        <meta property="og:title" content="Commercial Water Bill Savings — 15% Guaranteed in Writing | Perfect Water Valve" />
        <meta property="og:description" content="Smart Valve™ cuts commercial water bills 15%–35% annually — guaranteed in writing. NSF 61 certified. Amazon YYZ3 58.69% peak savings. Free assessment." />
        <meta property="og:url" content="https://perfectwatervalve.com/" />
        <meta property="og:image" content="https://perfectwatervalve.com/opengraph.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(homeFaqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(homeLocalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(homeServiceSchema)}</script>
      </Helmet>
      <StickyAssessmentCTA />
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 60%, #0374A7 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(3,116,167,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(60,110,127,0.08),transparent_50%)]" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">32,000+ verified installations</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-[1.05] mb-6">
              Your Water Meter is Counting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Air.</span>
              <br />
              You're paying for it.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl" style={{ fontWeight: 300 }}>
              Smart Valve™ cuts commercial water bills 15%–35% annually on average, guaranteed in writing — installed in under 4 hours with no electricity, no moving parts, and no maintenance.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5"
                style={{ background: '#0374A7', boxShadow: '0 6px 24px rgba(3,116,167,0.4)' }}
              >
                Request Free Assessment
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white/80 font-semibold text-base border border-white/15 hover:border-white/30 hover:text-white transition-all"
              >
                See How It Works
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              {[
                { icon: <ShieldCheck className="w-4 h-4 text-green-400" />, text: "15% minimum guaranteed" },
                { icon: <Droplet className="w-4 h-4 text-blue-400" />, text: "NSF 61 & 372 certified" },
                { icon: <Building2 className="w-4 h-4 text-white/70" />, text: "No electricity · no moving parts" },
                { icon: <ShieldCheck className="w-4 h-4 text-sky-400" />, text: "Official AWS Partner" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-white/80">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(3,116,167,0.35) 0%, transparent 70%)' }} />
              <motion.div
                className="absolute rounded-full border border-blue-400/20"
                style={{ inset: -40 }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute rounded-full border border-blue-300/10"
                style={{ inset: -80 }}
                animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <img
                src={smartValveSrc}
                alt="Smart Valve™"
                className="relative z-10 object-contain"
                style={{
                  height: 340,
                  width: "auto",
                  filter: "brightness(1.1) saturate(1.2) drop-shadow(0 0 50px rgba(3,116,167,0.6))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#E8EFF7', borderBottom: '1px solid #C5D8E8' }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 items-center">
            {[
              { label: "NSF 61 Certified", sub: "Drinking water system components" },
              { label: "NSF 372 Certified", sub: "Lead-free materials" },
              { label: "32,000+ Installations", sub: "North America" },
              { label: "15% Minimum Guaranteed", sub: "In writing, every site" },
              { label: "AWS / CWS Partner", sub: "American Water Savings · Canadian Water Savings" },
            ].map((item) => (
              <div key={item.label} className="text-center px-4">
                <div className="text-sm font-bold" style={{ color: '#0374A7' }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#4A7085' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROOF ──────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F4F8FC' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: '#0374A7' }}>Independently Verified</span>
            <h2 className="text-2xl md:text-3xl font-headline font-bold" style={{ color: '#0A1F3A' }}>The proof is in the numbers.</h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: '#4A7085' }}>
              Every result below is measurement-and-verification (M&V) certified by an independent third party.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { stat: '58.69%', label: 'Peak savings recorded', sub: 'Amazon YYZ3 — 6 consecutive quarters', color: '#0374A7' },
              { stat: '19', label: 'M&V-verified case studies', sub: 'All independently certified', color: '#3C6E7F' },
              { stat: '15%', label: 'Minimum guaranteed in writing', sub: 'Every site. No exceptions.', color: '#0A1F3A' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-7 text-center border" style={{ backgroundColor: 'white', borderColor: '#C5D8E8' }}>
                <div className="text-5xl font-black font-headline mb-2" style={{ color: item.color }}>{item.stat}</div>
                <div className="text-sm font-semibold mb-1" style={{ color: '#0A1F3A' }}>{item.label}</div>
                <div className="text-xs" style={{ color: '#6A8A9A' }}>{item.sub}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/results" className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.3)' }}>
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </a>
            <a href="/savings" className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:-translate-y-0.5"
              style={{ borderColor: '#0374A7', color: '#0374A7' }}>
              Calculate My Savings <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ───────────────────────────────────── */}
      <div id="how-it-works">
        <BubbleValveSection />
      </div>

      {/* ─── PLUMBING PROTECTION CROSS-LINK ─────────────────── */}
      <div className="px-6 py-5 border-b" style={{ backgroundColor: '#EEF5FB', borderColor: '#C5D8E8' }}>
        <div className="max-w-4xl mx-auto text-center text-sm" style={{ color: '#4A7085' }}>
          Smart Valve™ also protects commercial plumbing systems from pressure damage, scale buildup, and air entrainment.{' '}
          <a href="/benefits/plumbing-protection" className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: '#0374A7' }}>
            Learn about the secondary benefits →
          </a>
        </div>
      </div>

      {/* ─── WHO WE SERVE ────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F4F8FC' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: '#0374A7' }}>Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-3" style={{ color: '#0A1F3A' }}>
              Verified Results Across Every Industry
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#4A7085', fontWeight: 300 }}>
              Any commercial facility spending $5,000+/month on water qualifies. 
              Real savings, independently verified.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_CARDS.map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group rounded-2xl p-6 border transition-all hover:-translate-y-1 hover:shadow-lg no-underline"
                style={{ backgroundColor: 'white', borderColor: '#C5D8E8' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: card.bg, border: `1px solid ${card.color}30` }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <span className="text-lg font-black" style={{ color: card.color }}>{card.stat}</span>
                </div>
                <h3 className="text-base font-bold mb-1 group-hover:text-[#0374A7] transition-colors" style={{ color: '#0A1F3A' }}>{card.title}</h3>
                <p className="text-xs" style={{ color: '#6A8A9A' }}>{card.note}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT WINS ────────────────────────────────────── */}
      <section id="clients" className="py-28 px-6" style={{ background: 'linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">32,000+ Installations. 19 Verified Studies. Real Results.</h2>
            <p className="text-white/60 text-base" style={{ fontWeight: 300 }}>
              Deployed at scale across North America — with 19 independently M&V-verified case studies proving 15%–58.69% savings. &nbsp;
              <a href="/results" className="text-white/40 underline underline-offset-2 hover:text-white/70 transition-colors text-sm">View all case studies →</a>
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 border border-white/10"
                style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                    style={{ background: c.accent + '33', border: `1px solid ${c.accent}44` }}
                  >
                    {c.initial}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm leading-snug">{c.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: c.accent }}>{c.industry}</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{c.stat}</div>
                <p className="text-white/50 text-xs leading-relaxed">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE LOGO WALL ───────────────────────────── */}
      <section className="py-10 px-6 border-b" style={{ backgroundColor: '#F4F8FC', borderColor: '#C5D8E8' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#A0B5C5' }}>Enterprise Partners (No Public Stats)</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-50">
            {["Linamar", "Labatt Brewing", "Guinness", "Commercial Bakeries", "Kerry Group", "Starlight Investments", "Akelius"].map((name) => (
              <span key={name} className="text-xs font-bold uppercase tracking-wider" style={{ color: '#4A7085' }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE GUARANTEE ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(160deg, #060D1A 0%, #0A1F3A 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <ShieldCheck className="w-14 h-14 mx-auto mb-6" style={{ color: '#0374A7' }} />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-headline font-bold text-white mb-6 leading-tight">
              The Promise Is in Writing
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/60 mb-10 leading-relaxed" style={{ fontWeight: 300 }}>
              Every installation comes with a written contract guaranteeing a minimum 15% reduction in metered water consumption. If your site does not reach 15%, we make it right — at no cost to you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { counter: <AnimatedCounter to={15} suffix="%" />, label: "Guaranteed minimum savings", sub: <a href="/results" className="underline underline-offset-2 hover:text-white/50 transition-colors">(view guarantee terms)</a> },
                { counter: <AnimatedCounter to={58.69} suffix="%" decimals={2} />, label: "Peak recorded reduction", sub: <a href="/results" className="underline underline-offset-2 hover:text-white/50 transition-colors">(Amazon YYZ3 — Case Studies)</a> },
                { counter: <AnimatedCounter to={0} prefix="$" />, label: "Cost if guarantee not met", sub: "(guarantee terms apply)" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-headline" style={{ color: '#0374A7' }}>{s.counter}</div>
                  <div className="text-sm text-white/40 mt-1">{s.label}</div>
                  <div className="text-xs text-white/25 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </motion.div>
            <motion.a
              variants={fadeUp}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-1"
              style={{ background: '#0374A7', boxShadow: '0 6px 24px rgba(3,116,167,0.4)' }}
            >
              Get the Guarantee — Free Assessment
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <HomeFAQ />

      {/* ─── CONTACT FORM ───────────────────────────────────── */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#E8EFF7' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-3" style={{ color: '#0A1F3A' }}>
                Request Your Free Assessment
              </h2>
              <p className="text-base" style={{ color: '#4A7085', fontWeight: 300 }}>
                Tell us about your facility and we'll calculate your estimated savings before the first site visit. No obligation.
              </p>
              <p className="text-sm font-semibold mt-2" style={{ color: '#E53E3E' }}>
                ⚡ Assessments are limited — we only take on 3 new sites per month.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl p-10 text-center border"
                style={{ backgroundColor: 'white', borderColor: '#C5D8E8' }}
              >
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: '#0374A7' }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1F3A' }}>We'll be in touch shortly</h3>
                <p className="text-sm" style={{ color: '#4A7085' }}>
                  Expect a call or email within one business day. In the meantime, feel free to reach us directly at (720) 937-3004.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 shadow-sm border space-y-5"
                style={{ backgroundColor: 'white', borderColor: '#C5D8E8' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#4A7085' }}>Your Name</label>
                    <input
                      required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={{ borderColor: '#C5D8E8', color: '#0A1F3A' }}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#4A7085' }}>Company / Facility</label>
                    <input
                      required value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={{ borderColor: '#C5D8E8', color: '#0A1F3A' }}
                      placeholder="Acme Hotel Group"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#4A7085' }}>Email Address</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#C5D8E8', color: '#0A1F3A' }}
                    placeholder="jane@acmehotelgroup.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#4A7085' }}>Monthly Water Bill (approx.)</label>
                  <input
                    value={form.bill}
                    onChange={(e) => setForm({ ...form, bill: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#C5D8E8', color: '#0A1F3A' }}
                    placeholder="e.g. $15,000 / month"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#4A7085' }}>Message (optional)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all resize-none"
                    style={{ borderColor: '#C5D8E8', color: '#0A1F3A' }}
                    placeholder="Number of locations, industry, questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:-translate-y-0.5"
                  style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.3)' }}
                >
                  Send Request
                </button>

                <div className="flex flex-wrap justify-center gap-6 pt-2">
                  <a href="tel:7209373004" className="flex items-center gap-2 text-sm transition-colors hover:opacity-80" style={{ color: '#4A7085' }}>
                    <Phone className="w-4 h-4" />
                    (720) 937-3004
                  </a>
                  <a href="mailto:info@perfectwatervalve.com" className="flex items-center gap-2 text-sm transition-colors hover:opacity-80" style={{ color: '#4A7085' }}>
                    <Mail className="w-4 h-4" />
                    info@perfectwatervalve.com
                  </a>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AnimatedCounter({ to, suffix = "", prefix = "", decimals = 0, duration = 2 }: {
  to: number; suffix?: string; prefix?: string; decimals?: number; duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (inView) spring.set(to);
  }, [inView, to, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = HOME_FAQ_ITEMS;

  return (
    <section id="faq" className="py-24 px-6" style={{ backgroundColor: '#F4F8FC' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block" style={{ color: '#0374A7' }}>
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight" style={{ color: '#0A1F3A' }}>
            Common Questions About Commercial Water Savings
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#4A7085' }}>
            Clear, factual answers about how Smart Valve™ works, what to expect, and what the guarantee actually covers.
          </p>
        </div>

        <div className="divide-y" style={{ borderColor: '#D5E3EE' }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="font-semibold text-base leading-snug"
                  style={{ color: open === i ? '#0374A7' : '#0A1F3A' }}
                >
                  {faq.q}
                </span>
                <span
                  className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-colors"
                  style={{
                    borderColor: open === i ? '#0374A7' : '#B0C8D8',
                    background: open === i ? '#0374A7' : 'transparent',
                    color: open === i ? '#fff' : '#4A7085',
                  }}
                >
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div
                  className="pb-6 text-sm leading-relaxed"
                  style={{ color: '#2E4A5A', fontWeight: 300 }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
