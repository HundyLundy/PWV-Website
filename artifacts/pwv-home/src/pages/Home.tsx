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
  { name: "Automotive (Car Wash)", value: 23, range: "18–28%" },
  { name: "Luxury Hospitality", value: 24, range: "20–58%" },
  { name: "Real Estate / Multifamily", value: 19, range: "16–26%" },
  { name: "Healthcare / Labs", value: 20, range: "15–25%" },
  { name: "Logistics / Warehousing", value: 17, range: "15–22%" },
  { name: "Food Service / Industrial", value: 16, range: "15–20%" },
];
const INDUSTRY_MAX = 24;

const CLIENTS = [
  {
    initial: "A", name: "Amazon YYZ3 & YYZ4", industry: "Logistics / Fulfillment",
    color: "#1a365d", accent: "#3182CE",
    stat: "17% avg · 58.69% peak", detail: "6 quarters of M&V data. 17% consistent average savings across 8.5M+ sq ft."
  },
  {
    initial: "F", name: "Four Seasons Fort Lauderdale", industry: "Luxury Hospitality",
    color: "#1a2f1a", accent: "#38A169",
    stat: "$27,000/yr · 26% avg", detail: "26% daily average, 56% peak in October. Third-party M&V verified."
  },
  {
    initial: "S", name: "St. Regis Toronto", industry: "Luxury Hospitality",
    color: "#2d1b4e", accent: "#805AD5",
    stat: "$49,889 CAD/yr", detail: "20%+ verified reduction. ROI achieved within first 6 months of installation."
  },
  {
    initial: "G", name: "Grand Central at Kennedy", industry: "Real Estate",
    color: "#1a2f2f", accent: "#319795",
    stat: "$50,000/yr · 23% avg", detail: "Annual water bill dropped from $240K to $190K. GM Bob Pack verified."
  },
  {
    initial: "H", name: "Houstonian Estates", industry: "Multifamily Real Estate",
    color: "#2d2415", accent: "#D69E2E",
    stat: "16% · 6,000 gal/day", detail: "13M+ gallon/year property. 6,000 gallons saved daily. GM Doug Horn verified."
  },
  {
    initial: "C", name: "Caliber Car Wash", industry: "Automotive",
    color: "#2d1515", accent: "#E53E3E",
    stat: "23% weighted avg · 5 sites", detail: "M&V verified across 5 GA & FL locations over 3+ quarters of data."
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
  const [form, setForm] = useState({ name: "", company: "", bill: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400/80">32,000+ verified installations</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-[1.05] mb-6">
              Your Meter Is Counting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Air.</span>
              <br />
              You're Paying for It.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl" style={{ fontWeight: 300 }}>
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
                { icon: <Building2 className="w-4 h-4 text-slate-400" />, text: "No electricity · no moving parts" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-slate-400">
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
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold" style={{ color: '#0A1F3A' }}>{ind.name}</span>
                    <span className="text-base font-bold" style={{ color: '#0374A7' }}>{ind.range}</span>
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">Real Clients. Audited Results.</h2>
            <p className="text-white/60 text-base" style={{ fontWeight: 300 }}>
              Every number below comes from third-party M&V (Measurement & Verification) reports — not estimates.
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
