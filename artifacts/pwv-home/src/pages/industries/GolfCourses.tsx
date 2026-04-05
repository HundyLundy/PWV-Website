import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ZapOff, Activity, DollarSign, Droplets, AlertTriangle, TrendingUp, Leaf } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SavingsCalcModule } from "@/components/SavingsCalcModule";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "@assets/PWV_perfect_water_favicon_1774323165405.png";

const GOLF_FAQ_ITEMS = [
  {
    q: "Does Smart Valve™ work if we use well water for irrigation?",
    a: "Yes. Smart Valve™ installs on your municipal meter — covering the clubhouse, pool, and facilities. Most courses have both a well for irrigation and a municipal meter for the building. We install on the municipal meter. If your irrigation is also on a municipal meter, that meter qualifies too."
  },
  {
    q: "What's the minimum monthly bill to qualify?",
    a: "$5,000/month on the municipal meter. This applies to the combined water and sewer charges. Most golf clubs with a pool, restaurant, or full-service locker rooms exceed this threshold easily."
  },
  {
    q: "Does it affect pool chemistry or water quality?",
    a: "No. Smart Valve™ does not add chemicals or change water composition. NSF 61 and 372 certified — completely safe for pools, spas, and food service applications."
  },
  {
    q: "Will it help us comply with drought restrictions?",
    a: "Yes. Smart Valve™ reduces metered consumption, helping courses stay within restriction limits and avoid surcharge tiers. M&V documentation provides verifiable evidence of reduction for regulatory compliance purposes."
  },
  {
    q: "How long does installation take?",
    a: "2–4 hours on the main supply line. No course closure, no operational disruption, no impact on water pressure or irrigation scheduling."
  },
];

const golfFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": GOLF_FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
};

const CONTACT = { phone: "720-937-3004", email: "info@perfectwatervalve.com" };

function GolfFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderColor: "#D5E3EE" }}>
      {GOLF_FAQ_ITEMS.map((faq, i) => (
        <div key={i}>
          <button className="w-full flex items-start justify-between gap-4 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="font-semibold text-base leading-snug" style={{ color: open === i ? "#0374A7" : "#0A1F3A" }}>{faq.q}</span>
            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-colors" style={{ borderColor: open === i ? "#0374A7" : "#B0C8D8", background: open === i ? "#0374A7" : "transparent", color: open === i ? "#fff" : "#4A7085" }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && <div className="pb-6 text-sm leading-relaxed" style={{ color: "#2E4A5A", fontWeight: 300 }}>{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function GolfCourses() {
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Golf Course Water Savings | Smart Valve™ Cuts Water Bills 15%–35% | Perfect Water Valve</title>
        <meta name="description" content="Golf courses on city water save 15%–35% on clubhouse, pool, and irrigation water bills. Smart Valve™ — NSF certified, guaranteed in writing." />
        <link rel="canonical" href="https://perfectwatervalve.com/industries/golf-courses" />
        <script type="application/ld+json">{JSON.stringify(golfFaqSchema)}</script>
      </Helmet>
      <Navbar onScrollTo={scrollTo} />

      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #0D3322 0%, #1B5C3A 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
                <span>⛳</span> Golf Course Water Savings
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase text-white" style={{ background: "rgba(3,116,167,0.4)", border: "1px solid rgba(3,116,167,0.6)" }}>
                15% Guaranteed in Writing — Every Installation
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Golf Courses on City Water Overpay Every Month —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-300">Smart Valve™ Cuts That Bill 15%–35% Annually</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you're irrigating fairways with municipal water or running a clubhouse, pool, and restaurant on a commercial meter, Smart Valve™ installs on your main supply line and delivers a guaranteed 15% minimum reduction — in writing, every installation. No process changes. No operational disruption.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Get a Free Golf Course Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: "312,000", unit: "gal/day", label: "Avg US 18-hole irrigation consumption" },
                { value: "14%", unit: "", label: "US golf courses on full municipal irrigation (USGA)" },
                { value: "$800K/yr", unit: "max", label: "Annual water cost for municipal irrigation courses" },
                { value: "15%", unit: "guaranteed", label: "Minimum water bill reduction — in writing" },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl p-5 border text-center" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}>
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  {s.unit && <div className="text-xs text-green-300 font-bold uppercase tracking-wider">{s.unit}</div>}
                  <div className="text-xs text-white/60 mt-1 leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-white font-semibold text-sm">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-80" /> NSF 61 &amp; 372 Certified — Pool &amp; Spa Safe</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 opacity-80" /> 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2"><ZapOff className="w-5 h-5 opacity-80" /> No Chemicals — No Power Required</div>
            <div className="flex items-center gap-2"><Activity className="w-5 h-5 opacity-80" /> Installed in 2–4 Hours</div>
            <div className="flex items-center gap-2"><ArrowRight className="w-5 h-5 opacity-80" /> Zero Operational Disruption</div>
          </div>
        </div>
      </section>

      {/* WHO QUALIFIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-3">Who Qualifies</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Two Scenarios — Both Qualify</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The qualifying threshold is simple: $5,000/month minimum on the municipal meter. Most golf operations exceed this across one or both scenarios below.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-green-500/10 text-green-400 border-green-500/20">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-green-400/70 mb-2">Scenario A — Highest ROI</div>
              <h3 className="text-xl font-bold text-white mb-4">Municipal Irrigation Courses</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Approximately 14% of US golf courses irrigate fairways, greens, tees, and rough using municipal city water. These courses face the highest water costs in the industry — paying commercial rates on 312,000+ gallons per day.</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">At $0.005–$0.008/gal combined water and sewer, that's $46,000–$75,000/month. A 15% reduction on a $50,000/month irrigation bill is <span className="text-green-400 font-bold">$90,000/year minimum</span>.</p>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="text-green-300 font-semibold text-sm">Estimated Monthly Spend: $46K–$75K/month</div>
                <div className="text-green-400 font-black text-lg mt-1">Min Annual Savings: $83K–$135K/yr</div>
              </div>
            </div>

            <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-blue-500/10 text-blue-400 border-blue-500/20">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">Scenario B — Clubhouse Meter</div>
              <h3 className="text-xl font-bold text-white mb-4">Well / Pond / Reclaimed Irrigation — Facility Meter</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Even courses that irrigate with wells, ponds, or reclaimed water have a separate commercial municipal meter for the clubhouse, pro shop, restaurant, locker rooms, pool, and maintenance facilities.</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">A full-service private club with a pool, restaurant, and event space can run $5,000–$20,000/month on that meter. Smart Valve™ installs on that meter and reduces consumption across all uses simultaneously — pool fill, kitchen, showers, cart wash, HVAC cooling.</p>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <div className="text-blue-300 font-semibold text-sm">Estimated Monthly Spend: $5K–$20K/month</div>
                <div className="text-primary font-black text-lg mt-1">Min Annual Savings: $9K–$36K/yr</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SavingsCalcModule defaultBill={20000} />

      {/* WHERE WATER BUDGETS GO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Where Golf Course Water Budgets Go</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>One Smart Valve™ installation on the municipal meter reduces the metered total across all downstream uses simultaneously.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm">
              <h3 className="text-lg font-bold mb-6" style={{ color: "#0A1F3A" }}>Full Municipal Irrigation Courses</h3>
              <div className="space-y-4">
                {[
                  { label: "Fairway & rough irrigation", pct: "60–70%", color: "#0374A7" },
                  { label: "Greens & tees (high-precision)", pct: "10–15%", color: "#3C6E7F" },
                  { label: "Clubhouse, pool & facilities", pct: "15–20%", color: "#059669" },
                  { label: "Maintenance & cart wash", pct: "5–10%", color: "#D69E2E" },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: "#2E4A5A" }}>{row.label}</span>
                      <span className="font-bold" style={{ color: row.color }}>{row.pct}</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: row.pct.split("–")[1] || row.pct.replace("%", "").split("–")[0] + "%", background: row.color, opacity: 0.7 }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-6" style={{ color: "#4A7085" }}>Smart Valve™ installs once and reduces the master meter total — covering every category above simultaneously.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm">
              <h3 className="text-lg font-bold mb-6" style={{ color: "#0A1F3A" }}>Clubhouse Meter (Well/Reclaimed Irrigation)</h3>
              <div className="space-y-4">
                {[
                  { label: "Pool fill, top-off & backwash", pct: "30–40%", color: "#0374A7" },
                  { label: "Restaurant & food service", pct: "20–25%", color: "#3C6E7F" },
                  { label: "Locker rooms & showers", pct: "20–25%", color: "#059669" },
                  { label: "HVAC cooling & maintenance", pct: "10–15%", color: "#D69E2E" },
                  { label: "Cart wash & grounds", pct: "5–10%", color: "#805AD5" },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: "#2E4A5A" }}>{row.label}</span>
                      <span className="font-bold" style={{ color: row.color }}>{row.pct}</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: row.pct.split("–")[1] || row.pct.replace("%", "").split("–")[0] + "%", background: row.color, opacity: 0.7 }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-6" style={{ color: "#4A7085" }}>All of these are metered and billed at commercial rates. Smart Valve™ reduces every category from one installation point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COSTS ARE RISING */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Golf Course Water Costs Are Rising</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Three structural forces are compounding golf course water costs across every US market — and they're accelerating.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf, color: "green",
                title: "Drought Restrictions Are Targeting Golf Directly",
                body: "Arizona reduced golf course water allotments in 2025 — courses exceeding their allotment face surcharges and permit restrictions. Denver Water issued mandatory 20% water reduction requirements for city golf courses in 2025–2026. California, Nevada, and Texas markets face escalating tiered rate structures where high-volume users pay premium rates on consumption above baseline thresholds."
              },
              {
                icon: DollarSign, color: "blue",
                title: "The Sewer Multiplier",
                body: "Golf clubs pay both water charges and sewer charges on clubhouse consumption. In most US markets, sewer rates are 80–120% of water rates. A club spending $12,000/month on water is likely paying $10,000–$14,000/month in sewer charges — $22,000–$26,000/month combined. Smart Valve™ reduces metered consumption, which reduces both charges simultaneously."
              },
              {
                icon: TrendingUp, color: "yellow",
                title: "Commercial Rate Increases Compound Annually",
                body: "Commercial water rates are rising 4–8% annually in most US markets. For a golf course spending $50,000/month on water, a 5% rate increase adds $30,000/year in costs. Smart Valve™ cuts the underlying consumption — so every rate increase delivers more absolute dollar savings from the same percentage reduction."
              },
            ].map((item, i) => {
              const colorMap: Record<string, string> = {
                green: "bg-green-500/10 text-green-400 border-green-500/20",
                blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
              };
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-[#121B2E] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${colorMap[item.color]}`}><item.icon className="w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.body}</p>
                  {item.color === "green" && (
                    <div className="mt-4 text-xs text-gray-500">
                      See water rates and restrictions in{" "}
                      <a href="/locations/arizona" className="text-green-400 underline">Arizona</a>,{" "}
                      <a href="/locations/nevada" className="text-green-400 underline">Nevada</a>,{" "}
                      <a href="/locations/colorado" className="text-green-400 underline">Colorado</a>,{" "}
                      <a href="/locations/california" className="text-green-400 underline">California</a>,{" "}
                      <a href="/locations/texas" className="text-green-400 underline">Texas</a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POOL & CLUBHOUSE HIDDEN COST */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>Pool and Clubhouse Water — The Hidden Cost</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#4A7085" }}>Even courses that don't irrigate from a municipal meter are often surprised by what their clubhouse meter actually costs them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Droplets, color: "blue",
                title: "Pool Fill & Maintenance",
                body: "A standard competition pool holds 250,000–500,000 gallons. Annual evaporation losses, backwash cycles, and seasonal refills consume 500,000–2,000,000 gallons/year from the municipal meter — all billed at commercial rates."
              },
              {
                icon: DollarSign, color: "green",
                title: "Restaurant & Food Service",
                body: "A full-service golf club restaurant serving 150–300 covers per day uses 25–50 gallons per cover — up to 15,000 gallons/day from the kitchen alone. At commercial rates, that's $2,700–$4,500/month before any other clubhouse use."
              },
              {
                icon: Activity, color: "orange",
                title: "Locker Rooms & Showers",
                body: "Post-round locker room showers at a busy private club add another 3,000–9,000 gallons/day. These volumes are all metered and billed at commercial rates with both water and sewer charges."
              },
              {
                icon: ShieldCheck, color: "teal",
                title: "HVAC Cooling Towers",
                body: "Golf clubhouses with cooling towers consume significant water through evaporation at each cycle of concentration. Makeup water to replace evaporation losses can account for 15–30% of total clubhouse water consumption."
              },
              {
                icon: ZapOff, color: "yellow",
                title: "Cart Wash & Grounds",
                body: "Cart cleaning stations, bag wash, and grounds maintenance add consistent daily consumption to the clubhouse meter. Combined with irrigation equipment cleaning, this contributes materially to annual metered totals."
              },
              {
                icon: TrendingUp, color: "red",
                title: "The Sewer Double-Charge",
                body: "In most markets, sewer fees equal 80–120% of water charges — meaning a $10,000 water bill carries a $8,000–$12,000 sewer charge. Smart Valve™ reduces the metered input, cutting both charges simultaneously."
              },
            ].map((item, i) => {
              const colorMap: Record<string, string> = {
                red: "bg-red-500/10 text-red-500 border-red-500/20",
                orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
                blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
                yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
                teal: "bg-teal-500/10 text-teal-600 border-teal-500/20",
                green: "bg-green-500/10 text-green-600 border-green-500/20",
              };
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm hover:border-[#0374A7]/40 transition-colors">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${colorMap[item.color]}`}><item.icon className="w-6 h-6" /></div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#0A1F3A" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEGIONELLA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 block mb-4">Risk Awareness</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Legionella Risk at Golf Clubs</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Golf clubs combine the highest-risk recreational water features: hot tubs and spas (the single highest-risk feature for Legionella per the CDC), cooling towers for clubhouse HVAC, complex plumbing serving multiple locker rooms and kitchens, and a membership base that often includes elderly and immunocompromised individuals most vulnerable to Legionnaires' disease.</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Air pockets in water distribution pipes create stagnant dead zones where Legionella bacteria can colonize. Smart Valve™ reduces dissolved air and oxygen in the water supply, eliminating conditions that create stagnant zones. This is not a water treatment device — it does not add chemicals or replace a Water Management Program.</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">ASHRAE Standard 188 requires Water Management Plans for facilities with cooling towers, hot tubs, and complex plumbing — all common at golf clubs. Smart Valve™ installation can be documented as a risk reduction measure within that plan.</p>
              <a href="/industries/hospitals/legionella-biofilm-risk" className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm hover:gap-3 transition-all">
                See our detailed breakdown of air entrainment and Legionella risk in building water systems <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              {[
                { label: "Hot Tubs & Spas", risk: "Highest Risk (CDC)", color: "red" },
                { label: "Cooling Towers", risk: "High Risk (ASHRAE 188)", color: "orange" },
                { label: "Complex Multi-Locker Plumbing", risk: "Elevated Risk", color: "yellow" },
                { label: "Elderly / Immunocompromised Members", risk: "Most Vulnerable Population", color: "orange" },
              ].map((row, i) => {
                const colorMap: Record<string, string> = {
                  red: "border-red-500/30 bg-red-500/5 text-red-400",
                  orange: "border-orange-500/30 bg-orange-500/5 text-orange-400",
                  yellow: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
                };
                return (
                  <div key={i} className={`border rounded-xl p-5 ${colorMap[row.color]}`}>
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-white">{row.label}</div>
                      <div className={`text-xs font-bold uppercase tracking-wide ${colorMap[row.color].split(" ")[2]}`}>{row.risk}</div>
                    </div>
                  </div>
                );
              })}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5 text-green-300 text-sm text-center font-semibold">
                NSF 61 & 372 Certified — Safe for all potable water applications including pools, spas, and food service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t overflow-hidden" style={{ backgroundColor: "#E8EFF7", borderColor: "#C5D8E8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0A1F3A" }}>How Smart Valve™ Works at a Golf Course</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#4A7085" }}>One installation on the main municipal supply line — covers every downstream use on that meter.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                n: "01",
                title: "Installed on the Main Municipal Supply Line",
                body: "Smart Valve™ installs on the user side of the water meter — between the meter and the pressure regulator. Every gallon that passes through the meter — irrigation, pool, clubhouse, kitchen — is affected by the Phantom Volume elimination, and the reduction is captured at the billing point."
              },
              {
                n: "02",
                title: "Phantom Volume Elimination — No Chemicals, No Electricity",
                body: "Smart Valve™ uses a patent-protected spring-loaded mechanical mechanism to maintain upstream pressure, preventing dissolved air from expanding through the meter. This eliminates Phantom Volume — the primary cause of inflated water bills — while stabilizing supply line pressure for more consistent irrigation performance. No chemicals. No electricity required."
              },
              {
                n: "03",
                title: "Metered Reduction Recorded by the Utility",
                body: "Every reduction in metered consumption is recorded by the utility's own commercial meter — not a proprietary sensor. Savings are independently verifiable through utility billing data."
              },
              {
                n: "04",
                title: "15% Guaranteed in Writing",
                body: "Every Smart Valve™ installation carries a written guarantee of at least 15% reduction in metered water consumption. If the guarantee is not met, we resolve it at no cost."
              },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 bg-white rounded-2xl p-8 border border-[#C5D8E8] shadow-sm">
                <div className="text-4xl font-black shrink-0" style={{ color: "#C5D8E8" }}>{step.n}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0A1F3A" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A7085" }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI TABLE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Golf Course ROI — Illustrative Estimates</h2>
            <p className="text-gray-400">Based on 15% guaranteed minimum and 20% average. Actual results depend on facility size, meter configuration, and local rates.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Public / Municipal Course", bill: "$8,000/mo", g15: "$1,200/mo", avg20: "$1,600/mo", annual: "$14,400/yr" },
              { type: "Private Club (18-hole, pool)", bill: "$15,000/mo", g15: "$2,250/mo", avg20: "$3,000/mo", annual: "$27,000/yr" },
              { type: "Resort / Full Municipal Irrigation", bill: "$50,000/mo", g15: "$7,500/mo", avg20: "$10,000/mo", annual: "$90,000/yr" },
            ].map((row, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-6">{row.type}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-gray-400 text-sm">Est. Monthly Municipal Bill</span><span className="text-white font-medium">{row.bill}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400 text-sm">15% Guaranteed Min</span><span className="text-primary font-bold">{row.g15}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400 text-sm">20% Average</span><span className="text-green-400 font-bold">{row.avg20}</span></div>
                  <div className="flex justify-between border-t border-white/10 pt-3"><span className="text-gray-400 text-sm">Annual Min Savings</span><span className="text-primary font-black text-lg">{row.annual}</span></div>
                </div>
                <p className="text-gray-600 text-xs mt-4">*15% guaranteed minimum. Illustrative estimate only.</p>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-500 text-xs text-center mt-8">Illustrative estimates based on 15% guaranteed minimum and 20% average. Actual results depend on facility size, meter configuration, and local rates. Municipal irrigation figures based on 312,000 gal/day average consumption at $0.005–$0.008/gal combined water and sewer.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block" style={{ color: "#0374A7" }}>Common Questions</span>
            <h2 className="text-3xl font-bold" style={{ color: "#0A1F3A" }}>Golf Course Water Savings — Frequently Asked Questions</h2>
          </div>
          <GolfFAQ />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0D3322 0%, #1B5C3A 40%, #0374A7 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Golf Course Water Assessment</h2>
          <p className="text-white/80 mb-8">We'll analyze your municipal meter consumption and calculate your exact savings potential. If you're on full municipal irrigation, we'll model your ROI at current rates and projected rate increases. Zero obligation. 15% guaranteed minimum in writing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="bg-white text-primary font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1 text-lg">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="bg-transparent border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-lg">{CONTACT.email}</a>
          </div>
          <p className="text-white/60 text-sm">Partner: American Water Savings (AWS) · Canadian Water Savings (CWS) · Smart Valve™</p>
        </div>
      </section>

      <footer className="bg-[#05080F] border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-3"><img src={logo} alt="PWV" className="w-8 h-8" /><span>© {new Date().getFullYear()} Perfect Water Valve. All rights reserved.</span></div>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-white">PerfectWaterValve.com</a>
            <a href="https://www.facebook.com/profile.php?id=61583769211912" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/perfectwatervalve/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/company/113022552" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
