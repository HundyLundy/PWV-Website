import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Mail, Phone, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IapmoBadge } from "@/components/IapmoBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PROPERTY_TABLE = [
  {
    type: "Data Centers",
    benefit: "Scale prevention in cooling towers",
    why: "High-volume cooling tower systems accumulate scale rapidly — scale reduces heat transfer efficiency and increases makeup water demand",
  },
  {
    type: "Hospitals",
    benefit: "Air entrainment reduction + scale prevention",
    why: "Complex plumbing, medical equipment water lines, and Legionella risk make both benefits operationally significant",
  },
  {
    type: "Hotels",
    benefit: "Pressure stabilization + scale prevention",
    why: "High fixture count, laundry equipment, and HVAC cooling towers all benefit from stable pressure and scale-free operation",
  },
  {
    type: "Car Washes",
    benefit: "Scale prevention + flow stabilization",
    why: "Nozzle clogging from scale and pressure surges are the two primary equipment wear mechanisms in tunnel wash systems",
  },
  {
    type: "Golf Courses",
    benefit: "Flow stabilization + scale prevention",
    why: "Irrigation systems with inconsistent pressure produce uneven coverage — stabilized flow improves irrigation efficiency",
  },
  {
    type: "Multifamily",
    benefit: "Pressure stabilization",
    why: "High fixture count and aging building plumbing make pressure-related seal and gasket failures a common maintenance issue",
  },
];

export default function PlumbingProtection() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Smart Valve™ Plumbing Protection Benefits | Pressure Stabilization, Scale Prevention &amp; Flow Optimization | Perfect Water Valve</title>
        <meta name="description" content="Smart Valve™ stabilizes pressure, eliminates flow surges, and reduces mineral scale — protecting commercial plumbing as a secondary benefit to water savings." />
        <link rel="canonical" href="https://perfectwatervalve.com/benefits/plumbing-protection" />
      </Helmet>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-40 pb-16 lg:pt-52 lg:pb-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-2 mb-5">
              <a href="/" className="text-sm hover:underline" style={{ color: "#0374A7" }}>Home</a>
              <span className="text-sm" style={{ color: "#9CA3AF" }}>/</span>
              <span className="text-sm" style={{ color: "#6A8A9A" }}>Benefits</span>
              <span className="text-sm" style={{ color: "#9CA3AF" }}>/</span>
              <span className="text-sm font-medium" style={{ color: "#0A1F3A" }}>Plumbing Protection</span>
            </div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-5" style={{ color: "#0374A7", borderColor: "#0374A7", backgroundColor: "rgba(3,116,167,0.06)" }}>
              Secondary Benefits — Engineering Reference
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-[1.1]" style={{ color: "#0A1F3A" }}>
              How Smart Valve™ Protects Commercial Plumbing Systems
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "#4A7085" }}>
              Smart Valve™ is primarily a water conservation device — its core function is reducing metered water consumption by a guaranteed 15% minimum. But the same mechanisms that reduce your water bill produce a documented set of secondary benefits for the commercial plumbing systems downstream. This page explains those secondary benefits, the physics behind them, and where they apply across different commercial property types.
            </p>
            <div className="flex items-start gap-3 p-5 rounded-2xl border" style={{ backgroundColor: "rgba(3,116,167,0.06)", borderColor: "rgba(3,116,167,0.2)" }}>
              <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#0374A7" }} />
              <p className="text-sm leading-relaxed" style={{ color: "#2E4A5A" }}>
                <strong>Important framing:</strong> These are secondary benefits. The primary claim — and the only claim backed by a written guarantee — is the 15% minimum reduction in metered water consumption. Everything on this page is a real, documented secondary effect of that same mechanism.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-end pr-4 sm:pr-6 lg:pr-8 mt-4">
          <IapmoBadge size="small" />
        </div>
      </section>

      {/* SECTION 1 — PRESSURE STABILIZATION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#ffffff", borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Pressure Stabilization — Protecting Seals, Gaskets, and Pipe Joints
            </h2>
            <div className="prose-like space-y-4 mb-8">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Municipal water supply pressure is highly variable. Most commercial water devices are engineered for 60–65 PSI. Municipal supply in many markets regularly runs 80–100+ PSI — and surges during peak demand or supply switching events can spike well above that. Excess pressure causes undetected micro-leaks at seals and gaskets, accelerates fixture wear, and increases actual water consumption beyond what the fixtures are designed to deliver.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Smart Valve™ maintains near-static upstream pressure at the meter while allowing downstream pressure to normalize to the system's design range. This stabilization effect protects every seal, gasket, and pipe joint downstream from the cumulative damage of operating above design pressure.
              </p>
            </div>
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#0374A7" }}>Practical Impact</h3>
              <ul className="space-y-3">
                {[
                  "Fewer undetected leaks at fixture connections and appliance supply lines",
                  "Longer service life for pressure-sensitive equipment (dishwashers, ice machines, boilers, HVAC equipment)",
                  "Reduced frequency of seal and gasket replacement in high-use commercial applications",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#2E4A5A" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0374A7" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — FLOW SURGE ELIMINATION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Flow Surge Elimination — Reducing Water Hammer and Pipe Fatigue
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Water hammer is the pressure shock wave that travels through a pipe system when flow is suddenly stopped or reversed — by a closing valve, a pump shutoff, or a sudden demand change. In commercial buildings, water hammer occurs dozens or hundreds of times per day. Each event sends a pressure wave through the pipe system that stresses joints, fatigues fittings, and gradually loosens connections.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Smart Valve™ uses a variable-adjustment mechanism that smooths the peaks and valleys of flow — eliminating the surges that cause water hammer. The result is a steady, even flow profile that keeps the pipe system operating within its design parameters.
              </p>
            </div>
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "white", borderColor: "#C5D8E8" }}>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#0374A7" }}>Practical Impact</h3>
              <ul className="space-y-3">
                {[
                  "Reduced water hammer events — less pipe joint fatigue over time",
                  "More consistent flow to fixtures and equipment — better performance from irrigation systems, cooling towers, and process equipment",
                  "Reduced noise in building pipe systems from hammer and surge events",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#2E4A5A" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0374A7" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — MINERAL SCALE PREVENTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#ffffff", borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Mineral Scale Prevention — Maintaining Full Bore Flow and Equipment Efficiency
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Hard water mineral scale (calcium carbonate, magnesium) accumulates on pipe walls, heat exchanger surfaces, boiler elements, cooling tower fill, and equipment water lines. Scale buildup does three things: it restricts flow by reducing pipe bore diameter, it reduces heat transfer efficiency in any thermal application, and it creates surface roughness that accelerates further scale and biofilm accumulation.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Smart Valve™ maintains stable upstream pressure throughout the supply line using a patent-protected mechanical hydrodynamic mechanism. This stabilizes flow characteristics and reduces the pressure-driven turbulence that accelerates scale deposition on pipe walls and equipment surfaces. It also eliminates the air pockets that create stagnant dead zones where biofilm colonizes. Nothing is added to the water — no chemicals, no salt, no treatment agents.
              </p>
            </div>
            <div className="rounded-2xl border p-6 mb-5" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#0374A7" }}>Practical Impact</h3>
              <ul className="space-y-3">
                {[
                  "Pipes maintain full bore diameter — no progressive flow restriction",
                  "Heat exchangers, boilers, and cooling towers maintain design efficiency — no degraded heat transfer from scale insulation",
                  "Equipment water lines in medical, food service, and industrial applications stay cleaner — fewer maintenance cycles",
                  "Irrigation nozzles and drip emitters stay clear — more consistent coverage, less manual cleaning",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#2E4A5A" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0374A7" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border text-sm" style={{ backgroundColor: "rgba(255,165,0,0.04)", borderColor: "rgba(255,165,0,0.25)", color: "#7A5500" }}>
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" />
              <span>Smart Valve™ reduces new scale formation. It is not designed to remove existing heavy scale deposits — that is a separate remediation process.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — AIR ENTRAINMENT REDUCTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Air Entrainment Reduction — Eliminating Cavitation and Corrosion
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Dissolved air and entrained air bubbles in commercial water systems cause two distinct problems. First, air pockets create stagnant dead zones in pipe systems — areas where water does not circulate, temperatures can stratify, and biofilm (including Legionella) can colonize. Second, air entrainment in pumped systems causes cavitation — the formation and violent collapse of vapor bubbles that erodes pump impellers, pipe walls, and valve seats.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Engineering research documents that air entrainment at 2% of flow volume reduces pump performance by up to 12%. At 4%, pump performance drops by 40%. The collapsing bubbles of cavitation erosion are a primary cause of pump failure in commercial water systems.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
                Smart Valve™ maintains upstream pressure, which keeps dissolved air compressed and reduces the formation of free air pockets in the distribution system. This reduces both the stagnant dead zones that create biofilm risk and the cavitation that erodes pump and pipe surfaces.
              </p>
            </div>
            <div className="rounded-2xl border p-6 mb-5" style={{ backgroundColor: "white", borderColor: "#C5D8E8" }}>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#0374A7" }}>Practical Impact</h3>
              <ul className="space-y-3">
                {[
                  "Reduced pump wear and longer pump service life in cooling tower, boiler, and irrigation applications",
                  "Fewer stagnant dead zones in building water distribution — reduced conditions favorable to biofilm formation",
                  "More consistent flow delivery from irrigation and process systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#2E4A5A" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0374A7" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border text-sm" style={{ backgroundColor: "rgba(3,116,167,0.05)", borderColor: "rgba(3,116,167,0.2)", color: "#1D4E6A" }}>
              <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0374A7" }} />
              <span>
                For a detailed explanation of how air entrainment creates Legionella risk in healthcare and hospitality settings, see our{" "}
                <a href="/industries/hospitals/legionella-biofilm-risk" className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: "#0374A7" }}>
                  Hospital Legionella &amp; Biofilm Risk page
                </a>.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — WHERE THESE BENEFITS APPLY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#ffffff", borderColor: "#C5D8E8" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Where Plumbing Protection Benefits Are Most Significant
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#4A7085" }}>
              These secondary benefits are present in every Smart Valve™ installation. Their practical impact varies by property type:
            </p>
            <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: "#C5D8E8" }}>
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest border-b" style={{ borderColor: "#C5D8E8", backgroundColor: "#D4E9F7" }}>
                <div className="px-5 py-4" style={{ color: "#4A7085" }}>Property Type</div>
                <div className="px-5 py-4" style={{ color: "#0374A7" }}>Most Significant Benefit</div>
                <div className="px-5 py-4" style={{ color: "#4A7085" }}>Why</div>
              </div>
              {PROPERTY_TABLE.map((row, i) => (
                <div
                  key={row.type}
                  className="grid grid-cols-3 text-sm border-b last:border-b-0"
                  style={{ borderColor: "#C5D8E8", backgroundColor: i % 2 === 0 ? "#ffffff" : "#F0F7FF" }}
                >
                  <div className="px-5 py-4 font-semibold" style={{ color: "#0A1F3A" }}>{row.type}</div>
                  <div className="px-5 py-4 font-medium" style={{ color: "#0374A7" }}>{row.benefit}</div>
                  <div className="px-5 py-4 leading-relaxed" style={{ color: "#4A7085" }}>{row.why}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — WHAT IT DOES NOT DO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              What Smart Valve™ Does Not Do
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#4A7085" }}>
              Accurate framing matters. Smart Valve™ is not a water treatment device, a water softener, or a filtration system. It does not:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Add chemicals to the water supply",
                "Remove existing heavy scale deposits (that requires separate remediation)",
                "Replace a Legionella Water Management Program or chemical treatment protocol",
                "Filter contaminants, bacteria, or particulates",
                "Require power, maintenance, or consumables",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#2E4A5A" }}>
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A7085" }}>
              It is a passive, US-patented mechanical device installed on the user side of the water meter. Its primary function is reducing metered water consumption by eliminating Phantom Volume. Plumbing protection — through pressure stabilization and reduced air entrainment — is a real secondary benefit of that same mechanism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0A1F3A" }}>
              Questions About Your Specific System?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#4A7085" }}>
              If you want to understand how Smart Valve™ would interact with your specific plumbing configuration — cooling towers, medical equipment water lines, irrigation systems, or aging building infrastructure — we're happy to walk through it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:info@perfectwatervalve.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#0374A7", color: "white", boxShadow: "0 4px 16px rgba(3,116,167,0.3)" }}
              >
                <Mail className="w-4 h-4" /> info@perfectwatervalve.com
              </a>
              <a
                href="tel:7209373004"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:-translate-y-0.5"
                style={{ borderColor: "#0374A7", color: "#0374A7" }}
              >
                <Phone className="w-4 h-4" /> (720) 937-3004
              </a>
            </div>
            <p className="text-sm" style={{ color: "#4A7085" }}>
              Or{" "}
              <a href="/#contact" className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: "#0374A7" }}>
                request a free water assessment
              </a>{" "}
              and we'll analyze your system and calculate your savings potential.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
