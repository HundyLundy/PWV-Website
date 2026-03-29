import { Link } from "wouter";

const PROPERTY_TYPES = [
  {
    icon: "🏨",
    title: "Hotels & Hospitality",
    desc: "Texas hotel properties projected to average 28–35% water savings. ROI in 10–16 months.",
  },
  {
    icon: "🏢",
    title: "Multi-Family / Apartments",
    desc: "Dallas and Houston apartment complexes saving $20,000–$50,000/year on water costs.",
  },
  {
    icon: "🚗",
    title: "Car Washes",
    desc: "Texas's booming car wash market is seeing 40–58% reduction in water consumption.",
  },
  {
    icon: "🏗️",
    title: "Office Buildings",
    desc: "Austin and San Antonio office parks reducing water costs by 15–28% with no operational disruption.",
  },
];

const STATS = [
  { label: "TX Water Rate Growth", value: "+28%", sub: "5-year" },
  { label: "Target Markets", value: "4", sub: "Dallas · Houston · Austin · San Antonio" },
  { label: "Expected Launch", value: "Q3 2026", sub: "early access open now" },
];

export default function TexasPage() {
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
          Texas Market
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Texas Commercial<br />
          <span className="text-cyan-400">Water Savings</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Perfect Water Valve is expanding into the Texas market. Texas commercial properties — hotels, multi-family, car washes — are prime candidates for 15–58% water savings with the AWS Smart Valve™.
        </p>
        <Link href="/#contact">
          <a className="inline-block px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #06b6d4, #0374A7)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}>
            Get on the Texas Waitlist
          </a>
        </Link>
      </section>

      {/* Market Opportunity */}
      <section className="px-6 py-16" style={{ background: "rgba(6,182,212,0.05)", borderTop: "1px solid rgba(6,182,212,0.12)", borderBottom: "1px solid rgba(6,182,212,0.12)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">The Texas Market Opportunity</h2>
          <p className="text-slate-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-14">
            Texas is one of the fastest-growing commercial real estate markets in the country. Water costs are rising in Dallas, Houston, Austin, and San Antonio. We're bringing the same guaranteed savings model that's working in Colorado to Texas.
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

      {/* Property Types */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Property Types We're Targeting</h2>
        <p className="text-slate-400 text-center mb-12">Texas's highest water-consuming commercial segments — all ideal candidates for the Smart Valve™.</p>
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

      {/* Early Access CTA */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
          Early Access
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Lock In Preferred Pricing</h2>
        <p className="text-slate-300 mb-10 text-lg">
          We're accepting early-access clients in Texas now. Get on the list and lock in preferred pricing before the public launch.
        </p>
        <Link href="/#contact">
          <a className="inline-block px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #06b6d4, #0374A7)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}>
            Join Texas Early Access
          </a>
        </Link>
      </section>
    </div>
  );
}
