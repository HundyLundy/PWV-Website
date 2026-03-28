import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Phone, Mail, ArrowDown, ShieldCheck, Droplet, Building2, Factory, Hotel, Car, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BubbleValveSection } from "@/components/BubbleValveSection";
import smartValveSrc from "@assets/smart-valve1_1774325826879.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const INDUSTRIES = [
  { name: "Commercial Office", value: 36, range: "33%–39%", note: "Texas portfolio — 2 sites verified" },
  { name: "Automotive (Car Wash)", value: 23, range: "23%", note: "Caliber Car Wash — 5 sites, M&V verified" },
  { name: "Luxury Hospitality", value: 22, range: "15%–26%", note: "1 Hotel 15%, St. Regis 20%+, Four Seasons 26%" },
  { name: "Multifamily / Apartments", value: 21, range: "12.5%–30%", note: "Forest & Charlton 17–20%, NJ portfolio range" },
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
    initial: "1", name: "1 Hotel Toronto", industry: "Luxury Hospitality",
    color: "#1a3028", accent: "#319795",
    stat: "15% avg · $3,491/mo", detail: "177 → 150 m³/day average. 12-month formal report. Range: 1%–27% month-to-month."
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

  const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/pwv-contact";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          monthly_water_bill: form.bill,
          message: form.message,
          source: "PerfectWaterValve.com — Homepage",
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
              Your Meter Is Counting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Air.</span>
              <br />
              You're Paying for It.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl" style={{ fontWeight: 300 }}>
              Municipal water lines trap air bubbles that register as volume on your meter. The Smart Valve™ purges that air before it reaches your meter — reducing your bill 15–58%, guaranteed in writing.
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

      {/* ─── HOW IT WORKS ───────────────────────────────────── */}
      <div id="how-it-works">
        <BubbleValveSection />
      </div>

      {/* ─── INDUSTRIES ─────────────────────────────────────── */}
      <section id="industries" className="py-24 px-6" style={{ backgroundColor: '#E8EFF7' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-3" style={{ color: '#0A1F3A' }}>
                Consistent Results Across Every Industry
              </h2>
              <p className="text-base" style={{ color: '#4A7085', fontWeight: 300 }}>
                Different water profiles, same outcome. Verified across 1-year sample sets.
              </p>
              <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: '#C5D8E8' }}>
                1-year sample · 32,000+ installs
              </p>
            </motion.div>

            <div className="space-y-8">
              {INDUSTRIES.map((ind, i) => (
                <motion.div key={ind.name} variants={fadeUp} className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-base font-semibold" style={{ color: '#0A1F3A' }}>{ind.name}</span>
                      {ind.note && <span className="block text-xs mt-0.5" style={{ color: '#6A8A9A' }}>{ind.note}</span>}
                    </div>
                    <span className="text-base font-bold whitespace-nowrap" style={{ color: '#0374A7' }}>{ind.range}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(ind.value / INDUSTRY_MAX) * 100}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.08 }}
                    className="h-3 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #025888, #0374A7, #3C6E7F)' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CLIENT WINS ────────────────────────────────────── */}
      <section id="clients" className="py-28 px-6" style={{ background: 'linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">21 Documented Installations. Real Results.</h2>
            <p className="text-white/60 text-base" style={{ fontWeight: 300 }}>
              19 of 21 sites include formal M&V (Measurement & Verification) data. Range: 12.5%–58.69%.
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

      {/* ─── NOT A CHECK VALVE ──────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#E8EFF7' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border" style={{ color: '#0374A7', borderColor: '#0374A7', backgroundColor: 'rgba(3,116,167,0.06)' }}>
              Common Misconception
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-3" style={{ color: '#0A1F3A' }}>
              This Is Not What You Think It Is
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#4A7085', fontWeight: 300 }}>
              The Smart Valve™ is routinely mistaken for a check valve or pressure reducer. It is neither — and the difference goes directly to your bottom line.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border shadow-sm"
            style={{ borderColor: '#C5D8E8' }}
          >
            <div className="grid grid-cols-3 text-sm font-bold border-b" style={{ borderColor: '#C5D8E8', backgroundColor: '#D4E9F7' }}>
              <div className="px-6 py-4" style={{ color: '#4A7085' }}>Feature</div>
              <div className="px-6 py-4 text-center" style={{ color: '#0374A7' }}>Smart Valve™</div>
              <div className="px-6 py-4 text-center" style={{ color: '#9CA3AF' }}>Standard Check Valve</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 text-sm border-b last:border-b-0"
                style={{ borderColor: '#C5D8E8', backgroundColor: i % 2 === 0 ? '#ffffff' : '#F0F7FF' }}
              >
                <div className="px-6 py-4 font-medium" style={{ color: '#2E4A5A' }}>{row.feature}</div>
                <div className="px-6 py-4 flex items-center justify-center">
                  {row.pwv === true ? (
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#0374A7' }} />
                  ) : (
                    <span className="text-xs font-semibold" style={{ color: '#0374A7' }}>{row.pwv}</span>
                  )}
                </div>
                <div className="px-6 py-4 flex items-center justify-center">
                  {row.other === false ? (
                    <XCircle className="w-5 h-5 text-slate-300" />
                  ) : (
                    <span className="text-xs font-semibold text-slate-400">{row.other}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
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
                { n: "15%", label: "Guaranteed minimum savings" },
                { n: "58%", label: "Peak recorded reduction" },
                { n: "$0", label: "Cost if guarantee not met" },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-headline" style={{ color: '#0374A7' }}>{s.n}</div>
                  <div className="text-sm text-white/40 mt-1">{s.label}</div>
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
                  Expect a call or email within one business day. In the meantime, feel free to reach us directly at (361) 585-1111.
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
                  <a href="tel:3615851111" className="flex items-center gap-2 text-sm transition-colors hover:opacity-80" style={{ color: '#4A7085' }}>
                    <Phone className="w-4 h-4" />
                    (361) 585-1111
                  </a>
                  <a href="mailto:support@PerfectWaterValve.com" className="flex items-center gap-2 text-sm transition-colors hover:opacity-80" style={{ color: '#4A7085' }}>
                    <Mail className="w-4 h-4" />
                    support@PerfectWaterValve.com
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

function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is air entrapment in commercial water systems?",
      a: "Air entrapment occurs when pressurized municipal water pushes trapped air pockets through supply lines into a building's plumbing. Standard water meters cannot distinguish air from water — those air pockets are billed as metered volume. Studies indicate that 15%–40% of a typical commercial water bill may represent air rather than actual water consumed.",
    },
    {
      q: "How does the Smart Valve™ reduce a commercial water bill?",
      a: "The Smart Valve™ installs between the municipal main and your water meter. It passively releases entrapped air from the pressurized supply line before that air reaches the meter. Only actual water volume is then counted — resulting in 15% to 58% lower metered readings with no change in actual water availability.",
    },
    {
      q: "Is the 15% minimum savings really guaranteed in writing?",
      a: "Yes. Every installation includes a written contract guaranteeing a minimum 15% reduction in metered water consumption. If the facility does not achieve 15% savings after a full measurement cycle, Perfect Water Valve makes it right at no additional cost.",
    },
    {
      q: "What is Measurement and Verification (M&V) in water savings?",
      a: "M&V is a structured, independent process that compares a facility's water billing before and after a conservation measure, controlling for occupancy, season, and other variables. It is the industry standard for confirming that reported savings are real and attributable to the installed device — not coincidental. All published Perfect Water Valve case study results are independently M&V-verified.",
    },
    {
      q: "Is the Smart Valve™ the same as a check valve or pressure reducer?",
      a: "No. Check valves prevent backflow; pressure reducers lower line pressure. Neither addresses air entrapment or reduces metered billing. The Smart Valve™ is a purpose-built air elimination device that targets the specific mechanism — entrapped air registering as volume on your meter — that inflates commercial water bills.",
    },
    {
      q: "Does the Smart Valve™ require electricity or ongoing maintenance?",
      a: "No. The Smart Valve™ is entirely passive. It has no moving parts, requires no electricity, no software, and no service contracts. It is NSF 61 and NSF 372 certified for drinking water system components.",
    },
    {
      q: "What types of commercial facilities benefit most?",
      a: "Any commercial or industrial facility billed on metered municipal water can benefit. Verified results span luxury hospitality (Four Seasons Fort Lauderdale 26%, St. Regis Toronto $49,889 CAD, 1 Hotel Toronto 15%), logistics and fulfillment (Amazon YYZ3 & YYZ4 — 16.5% avg / 58.69% YOY peak), multifamily and condominiums (Forest & Charlton Toronto 17–20% IPMVP verified, Grand Central at Kennedy $50K/yr), and automotive (Caliber Car Wash 23% across 5 sites). Commercial office buildings in Texas saw 33%–39% bill reductions. Higher monthly water bills produce larger absolute dollar savings.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6" style={{ backgroundColor: '#F4F8FC' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block" style={{ color: '#0374A7' }}>
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight" style={{ color: '#0A1F3A' }}>
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#4A7085' }}>
            Clear, factual answers about how the Smart Valve™ works, what to expect, and why it's different.
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
