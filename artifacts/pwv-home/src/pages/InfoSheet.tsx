import { motion } from "framer-motion";
import { ShieldCheck, Zap, Wrench, CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine, Cell,
} from "recharts";

const STATS = [
  { val: "≥15%", label: "Guaranteed Minimum Savings", desc: "In writing. In your contract." },
  { val: "58.69%", label: "Peak Verified Savings", desc: "Amazon YYZ3 — independently measured" },
  { val: "19.2%", label: "Portfolio Average", desc: "Across 32,000+ installations" },
  { val: "$50K+", label: "Max Annual Savings", desc: "Per location, per year" },
];

const SPECS = [
  { label: "Technology Type", value: "Passive hydro-mechanical pressure device" },
  { label: "Mechanism", value: "Air purge upstream of water meter" },
  { label: "Electricity Required", value: "None — fully passive" },
  { label: "Moving Parts", value: "None" },
  { label: "Maintenance", value: "Zero — no service intervals" },
  { label: "Installation Time", value: "2–4 hours, no downtime" },
  { label: "Certifications", value: "NSF 61 · NSF 372 (drinking water safe)" },
  { label: "Compatible Meters", value: "99% of commercial water meters" },
  { label: "Guarantee", value: "≥15% metered water reduction in writing" },
  { label: "M&V Standard", value: "IPMVP Option B (independent)" },
];

const CLIENTS = [
  { name: "Amazon YYZ3 & YYZ4", result: "16.5% avg / 58.69% peak", industry: "Logistics" },
  { name: "Four Seasons Fort Lauderdale", result: "26% avg / 56% peak", industry: "Hospitality" },
  { name: "St. Regis Toronto", result: "$49,889 CAD / year", industry: "Hospitality" },
  { name: "1 Hotel Toronto", result: "15% avg · $3,491/mo", industry: "Hospitality" },
  { name: "Grand Central at Kennedy", result: "23% avg · ~$50K/yr", industry: "Real Estate" },
  { name: "Houstonian Estates", result: "16% · 6,000 gal/day", industry: "Multifamily" },
  { name: "Caliber Car Wash (5 sites)", result: "23% weighted avg", industry: "Automotive" },
  { name: "Forest & Charlton Toronto", result: "17–20% · CA $17,200/yr", industry: "Multifamily" },
];

const QUARTERLY_DATA = [
  { period: "Q3 2024", yzz3: 50, yzz4: 17 },
  { period: "Q4 2024", yzz3: 27, yzz4: 18 },
  { period: "Q1 2025", yzz3: -17, yzz4: -4 },
  { period: "Q2 2025", yzz3: -17, yzz4: 17 },
  { period: "Q3 2025", yzz3: 5, yzz4: 23 },
  { period: "Q4 2025", yzz3: 20, yzz4: 13 },
];

const INDUSTRY_DATA = [
  { industry: "Car Wash", avg: 23, icon: "🚗" },
  { industry: "Hospitality", avg: 22, icon: "🏨" },
  { industry: "Real Estate", avg: 21, icon: "🏢" },
  { industry: "Food & Bev", avg: 17, icon: "🍺" },
  { industry: "Industrial", avg: 17, icon: "🏭" },
  { industry: "Logistics", avg: 16.5, icon: "📦" },
];

const COST_MODEL = [
  { type: "Small Office / Retail", m3: "200 m³/mo", annualMin: "$1,080", annualAvg: "$1,188", payback: "6 mo" },
  { type: "Hotel / Industrial", m3: "800 m³/mo", annualMin: "$4,320", annualAvg: "$4,752", payback: "5 mo" },
  { type: "Fulfillment / Warehouse", m3: "3,000 m³/mo", annualMin: "$16,200", annualAvg: "$17,820", payback: "4 mo" },
];

const WATER_USAGE = [
  { period: "Q3 2024", before: 1107, after: 457.3 },
  { period: "Q4 2024", before: 800, after: 565.6 },
  { period: "Q1 2025", before: 650, after: 760.5 },
  { period: "Q2 2025", before: 680, after: 795.6 },
  { period: "Q3 2025", before: 1050, after: 997.5 },
  { period: "Q4 2025", before: 820, after: 656 },
];

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: '#fff', border: '1px solid #e0e0e0', color: '#1a1a1a' }}>
      <div className="font-bold mb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: p.fill || p.color }} />
          <span>{p.name}: <strong>{p.value}%</strong></span>
        </div>
      ))}
    </div>
  );
}

export default function InfoSheet() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center" style={{ background: '#E8EFF7' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img src={logoSrc} alt="Perfect Water Valve" className="w-16 h-16 object-contain" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#0374A7' }}>
            Smart Valve™ Product Information Sheet
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: '#0A1F3A' }}>
            Perfect Water Valve<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Smart Valve™</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#2E4A5A' }}>
            A passive commercial water pressure device that eliminates air entrapment in municipal supply lines — reducing metered water billing by 15% to 58%, guaranteed in writing.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:7209373004" className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow" style={{ background: '#0374A7' }}>
              <Phone className="w-4 h-4" /> (720) 937-3004
            </a>
            <a href="mailto:info@perfectwatervalve.com" className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2" style={{ borderColor: '#0374A7', color: '#0374A7' }}>
              <Mail className="w-4 h-4" /> info@perfectwatervalve.com
            </a>
          </div>
        </motion.div>
      </section>

      {/* KEY STATS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#0A1F3A' }}>Verified Performance Numbers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <div className="text-4xl font-bold mb-1" style={{ color: '#0374A7' }}>{s.val}</div>
                <div className="font-semibold text-sm mb-1" style={{ color: '#0A1F3A' }}>{s.label}</div>
                <div className="text-xs" style={{ color: '#4A7085' }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: '#E8EFF7' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#0A1F3A' }}>How It Works</h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: '#2E4A5A' }}>
            Air bubbles dissolved in pressurized municipal supply lines travel through your pipes and register as volume on your water meter. You pay for every cubic foot — including the ones that were never liquid. The Smart Valve™ installs upstream of your meter and mechanically purges that air before it's counted.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "No Electricity", desc: "Fully passive — no power source, no wiring, no control system" },
              { icon: Wrench, title: "No Moving Parts", desc: "Nothing to wear out, replace, or maintain — ever" },
              { icon: ShieldCheck, title: "NSF 61 & 372 Certified", desc: "Drinking water safe. Approved for all commercial and healthcare use" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 border border-slate-200 bg-white">
                <item.icon className="w-8 h-8 mb-3" style={{ color: '#0374A7' }} />
                <h3 className="font-bold mb-2" style={{ color: '#0A1F3A' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#2E4A5A' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#0A1F3A' }}>Technical Specifications</h2>
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            {SPECS.map((s, i) => (
              <div key={i} className={`flex gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} border-b border-slate-100 last:border-0`}>
                <span className="text-sm font-semibold w-44 shrink-0" style={{ color: '#0374A7' }}>{s.label}</span>
                <span className="text-sm" style={{ color: '#0A1F3A' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMAZON QUARTERLY SAVINGS CHART */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: '#E8EFF7' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0374A7' }}>Amazon Case Study — 6 Quarters of Data</p>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#0A1F3A' }}>Quarterly Water Savings (%)</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: '#2E4A5A' }}>
              Independent M&V data collected at Amazon YYZ3 and YYZ4 fulfillment centers in Brampton, Ontario. Smart Valve™ installed June 2024. Negative quarters reflect seasonal baseline shifts in Amazon's operations.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={QUARTERLY_DATA} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="period" tick={{ fontSize: 11, fill: '#4A7085' }} />
                <YAxis tick={{ fontSize: 11, fill: '#4A7085' }} tickFormatter={(v) => `${v}%`} domain={[-25, 60]} />
                <ReferenceLine y={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15% guarantee", position: "right", fontSize: 10, fill: '#059669' }} />
                <ReferenceLine y={0} stroke="#cbd5e1" />
                <Tooltip content={<ChartTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="yzz3" name="YYZ3" radius={[4, 4, 0, 0]}>
                  {QUARTERLY_DATA.map((entry, index) => (
                    <Cell key={index} fill={entry.yzz3 >= 0 ? '#0374A7' : '#ef4444'} />
                  ))}
                </Bar>
                <Bar dataKey="yzz4" name="YYZ4" radius={[4, 4, 0, 0]}>
                  {QUARTERLY_DATA.map((entry, index) => (
                    <Cell key={index} fill={entry.yzz4 >= 0 ? '#3C6E7F' : '#fca5a5'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-[10px] text-center mt-3 uppercase tracking-widest" style={{ color: '#4A7085' }}>
              Source: Independent IPMVP Option B measurement &amp; verification · Blue = YYZ3 savings · Teal = YYZ4 savings · Red = below baseline quarter
            </p>
          </div>
        </div>
      </section>

      {/* WATER VOLUME CHART */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0374A7' }}>Amazon YYZ3 — Water Volume</p>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#0A1F3A' }}>Monthly Water Consumption (m³) — Before vs After</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: '#2E4A5A' }}>
              Peak performance in Q3 2024: 1,107 m³ before installation vs 457 m³ after — a 58.69% reduction in a single quarter.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={WATER_USAGE} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="period" tick={{ fontSize: 11, fill: '#4A7085' }} />
                <YAxis tick={{ fontSize: 11, fill: '#4A7085' }} tickFormatter={(v) => `${v}m³`} />
                <Tooltip content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  const b = payload.find((p: any) => p.dataKey === 'before')?.value ?? 0;
                  const a = payload.find((p: any) => p.dataKey === 'after')?.value ?? 0;
                  const pct = b > 0 ? (((b - a) / b) * 100).toFixed(1) : '0';
                  return (
                    <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: '#fff', border: '1px solid #e0e0e0', color: '#1a1a1a' }}>
                      <div className="font-bold mb-1">{label}</div>
                      <div>Before: <strong>{b} m³</strong></div>
                      <div>After: <strong>{a} m³</strong></div>
                      <div style={{ color: Number(pct) >= 0 ? '#059669' : '#ef4444' }}>Savings: <strong>{pct}%</strong></div>
                    </div>
                  );
                }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="before" name="Before Smart Valve™" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="after" name="After Smart Valve™" fill="#0374A7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* INDUSTRY COMPARISON */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: '#E8EFF7' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0374A7' }}>Cross-Industry Portfolio Analysis</p>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#0A1F3A' }}>Average Savings by Industry (%)</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: '#2E4A5A' }}>
              All figures represent independently measured and verified savings rates across 32,000+ Smart Valve™ installations globally.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={INDUSTRY_DATA} layout="vertical" margin={{ top: 0, right: 60, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: '#4A7085' }} tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
                <YAxis type="category" dataKey="industry" tick={{ fontSize: 12, fill: '#0A1F3A', fontWeight: 600 }} width={120} />
                <ReferenceLine x={15} stroke="#059669" strokeDasharray="4 4" label={{ value: "≥15%", position: "top", fontSize: 9, fill: '#059669' }} />
                <Tooltip content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="rounded-xl p-3 text-sm shadow-xl" style={{ background: '#fff', border: '1px solid #e0e0e0' }}>
                      <div className="font-bold mb-1">{label}</div>
                      <div style={{ color: '#0374A7' }}>Avg savings: <strong>{payload[0].value}%</strong></div>
                    </div>
                  );
                }} />
                <Bar dataKey="avg" name="Avg Savings %" fill="#0374A7" radius={[0, 4, 4, 0]} label={{ position: 'right', formatter: (v: number) => `${v}%`, fontSize: 12, fill: '#0374A7', fontWeight: 700 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* COST SAVINGS MODEL */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0374A7' }}>ROI Model</p>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#0A1F3A' }}>Projected Annual Savings by Facility Type</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: '#2E4A5A' }}>
              Based on $3.00/m³ blended water rate (USD). Actual savings depend on local utility rates. Payback period is typically 4–6 months.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="grid grid-cols-5 px-6 py-3 text-xs font-bold uppercase tracking-wider" style={{ background: '#0374A7', color: '#fff' }}>
              <div className="col-span-2">Facility Type</div>
              <div className="text-right">Monthly Volume</div>
              <div className="text-right">At ≥15% (min)</div>
              <div className="text-right">At 19.2% (avg)</div>
            </div>
            {COST_MODEL.map((row, i) => (
              <div key={i} className={`grid grid-cols-5 px-6 py-4 border-b border-slate-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                <div className="col-span-2 font-semibold text-sm" style={{ color: '#0A1F3A' }}>
                  {row.type}
                  <span className="ml-2 text-xs font-normal px-1.5 py-0.5 rounded" style={{ background: '#D1FAE5', color: '#065F46' }}>{row.payback} payback</span>
                </div>
                <div className="text-right text-sm" style={{ color: '#4A7085' }}>{row.m3}</div>
                <div className="text-right text-sm font-semibold" style={{ color: '#0374A7' }}>{row.annualMin}/yr</div>
                <div className="text-right text-sm font-bold" style={{ color: '#059669' }}>{row.annualAvg}/yr</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED CLIENT RESULTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100" style={{ background: '#E8EFF7' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3" style={{ color: '#0A1F3A' }}>Verified Client Results</h2>
          <p className="text-center text-sm mb-10" style={{ color: '#4A7085' }}>All results independently verified via IPMVP Option B measurement & verification</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLIENTS.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-xl p-5 border border-slate-200 shadow-sm bg-white">
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#0374A7' }}>{c.industry}</div>
                <div className="font-bold text-sm mb-2" style={{ color: '#0A1F3A' }}>{c.name}</div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: '#059669' }} />
                  <span className="text-sm font-semibold" style={{ color: '#059669' }}>{c.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GUARANTEE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-white text-center" style={{ background: 'linear-gradient(135deg, #0A1F3A, #0374A7)' }}>
        <div className="max-w-3xl mx-auto">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">≥15% — In Writing. In Your Contract.</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Every Smart Valve™ installation includes a legally binding guarantee: if your facility does not achieve at least 15% reduction in metered water consumption, we remove the valve at no cost to you. No fine print. No conditions. No risk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/savings/" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:-translate-y-0.5 transition-all">
              Get a Full Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:7209373004" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:border-white transition-all">
              <Phone className="w-4 h-4" /> (720) 937-3004
            </a>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-10 px-4 border-b border-slate-100 text-center" style={{ background: '#E8EFF7' }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4A7085' }}>Distributed Through</p>
        <div className="flex flex-wrap gap-8 justify-center">
          <div>
            <div className="font-bold text-base" style={{ color: '#0A1F3A' }}>AWS</div>
            <div className="text-xs" style={{ color: '#4A7085' }}>American Water Savings</div>
          </div>
          <div>
            <div className="font-bold text-base" style={{ color: '#0A1F3A' }}>CWS</div>
            <div className="text-xs" style={{ color: '#4A7085' }}>Canadian Water Savings</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
