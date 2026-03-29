import { Link } from "wouter";

const PROPERTY_TYPES = [
  {
    icon: "🏨",
    title: "Hotels & Hospitality",
    desc: "Denver-area hotels averaging 31% water savings. ROI in 8–14 months.",
  },
  {
    icon: "🏢",
    title: "Multi-Family / Apartments",
    desc: "HOAs and apartment complexes saving $18,000–$45,000/year.",
  },
  {
    icon: "🚗",
    title: "Car Washes",
    desc: "High-volume car wash operations seeing 40–58% reduction in water consumption.",
  },
  {
    icon: "🏗️",
    title: "Office Buildings",
    desc: "Commercial office parks reducing water costs by 15–28% with zero operational changes.",
  },
];

const STATS = [
  { label: "Denver Water Rate Increase", value: "+34%", sub: "5-year" },
  { label: "Avg Commercial ROI", value: "11 mo", sub: "payback period" },
  { label: "Properties Served in CO", value: "40+", sub: "and growing" },
];

export default function ColoradoPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Back nav */}
      <div className="px-6 pt-6">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </a>
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/40 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
          Colorado Market
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Colorado Commercial<br />
          <span className="text-cyan-400">Water Savings</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Perfect Water Valve is the exclusive Denver-area partner for AWS Smart Valve™. Colorado properties are saving 15–58% on water bills — guaranteed in writing.
        </p>
        <Link href="/#contact">
          <a className="inline-block px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #06b6d4, #0374A7)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}>
            Request a Free Colorado Assessment
          </a>
        </Link>
      </section>

      {/* Property Types */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Property Types We Serve</h2>
        <p className="text-slate-400 text-center mb-12">Colorado's highest water-consuming commercial segments — all seeing verified savings.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTY_TYPES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 flex flex-col gap-3 border border-white/10 hover:border-cyan-400/40 transition-all"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="font-bold text-white text-base">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Colorado */}
      <section className="px-6 py-16" style={{ background: "rgba(6,182,212,0.05)", borderTop: "1px solid rgba(6,182,212,0.12)", borderBottom: "1px solid rgba(6,182,212,0.12)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Why Colorado?</h2>
          <p className="text-slate-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-14">
            Colorado's water rates have increased 34% over the last 5 years. Denver Water's tiered pricing means high-volume commercial users pay a premium. The Smart Valve™ pays for itself faster here than almost anywhere in the country.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-extrabold text-cyan-400 mb-1">{s.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">{s.sub}</div>
                <div className="text-sm text-white font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to see your savings?</h2>
        <p className="text-slate-300 mb-10 text-lg">
          Get your free Colorado water audit. We'll show you exactly how much you'll save before you spend a dollar.
        </p>
        <Link href="/#contact">
          <a className="inline-block px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #06b6d4, #0374A7)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}>
            Schedule Free Colorado Audit
          </a>
        </Link>
      </section>
    </div>
  );
}
