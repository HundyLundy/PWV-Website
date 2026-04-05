import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const SMART_VALVE_FAQ_ITEMS = [
  { q: "What is Smart Valve™?", a: "Smart Valve™ is a passive hydrodynamic device that installs on your main commercial water supply line in under 4 hours. It reduces turbulence and optimizes flow so that less water passes through the meter to deliver the same service — cutting your metered bill 15%–35% annually, guaranteed in writing." },
  { q: "Does Smart Valve™ require electricity or maintenance?", a: "No. Smart Valve™ requires no electricity required, and needs no maintenance — ever. It is NSF 61 and NSF 372 certified for use in potable water systems." },
  { q: "What is the highest verified savings result?", a: "The highest verified result in the portfolio is 58.69% peak savings at Amazon YYZ3 (hyperscale data center, Toronto) over 6 consecutive quarters of third-party M&V verification." },
  { q: "How do I get a Smart Valve™ assessment for my facility?", a: "Contact Perfect Water Valve at (720) 937-3004 or info@perfectwatervalve.com. We review your current water billing, calculate projected savings, and provide a written guarantee before any installation begins." },
];

const smartValveFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": SMART_VALVE_FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is the Smart Valve™ and How Does It Actually Cut Your Water Bill?",
  "author": { "@type": "Organization", "name": "Perfect Water Valve Team" },
  "publisher": { "@type": "Organization", "name": "Perfect Water Valve", "url": "https://www.perfectwatervalve.com" },
  "datePublished": "2026-03-05",
  "description": "Smart Valve™ is a passive device that installs on your main water line in under 4 hours and cuts your metered bill 15%–35% annually, guaranteed. No electricity, no maintenance, no moving parts.",
  "url": "https://www.perfectwatervalve.com/blog/what-is-smart-valve",
};

export default function WhatIsSmartValve() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>What Is the Smart Valve™? How It Cuts Commercial Water Bills 15%–35% annually | Perfect Water Valve</title>
        <meta name="description" content="Smart Valve™ is a passive device that installs on your main water line in under 4 hours and cuts your metered bill 15%–35% annually, guaranteed. No electricity, no maintenance, no moving parts." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/blog/what-is-smart-valve" />
        <meta property="og:title" content="What Is the Smart Valve™? How It Cuts Commercial Water Bills 15%–35% annually | Perfect Water Valve" />
        <meta property="og:description" content="Smart Valve™ is a passive device that installs on your main water line in under 4 hours and cuts your metered bill 15%–35% annually, guaranteed. No electricity, no maintenance, no moving parts." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/blog/what-is-smart-valve" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(smartValveFaqSchema)}</script>
      </Helmet>

      <StickyAssessmentCTA />
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border bg-purple-900/40 text-purple-300 border-purple-700/40">
              <Tag className="w-3 h-3" /> How It Works
            </span>
            <span className="flex items-center gap-1 text-sm text-white/60"><Calendar className="w-4 h-4" /> March 5, 2026</span>
            <span className="flex items-center gap-1 text-sm text-white/60"><User className="w-4 h-4" /> Perfect Water Valve Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15]">
            What Is the Smart Valve™ and How Does It Actually Cut Your Water Bill?
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            Smart Valve™ is a passive hydrodynamic device that installs on your main commercial water supply line in under 4 hours and reduces your metered water bill 15–35% annually on average, guaranteed in writing. Peak quarter results have reached 58.69% at high-volume installations. It requires no electricity required, and needs no maintenance — ever.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-white font-semibold text-sm">
            <div>✓ No Electricity Required</div>
            <div>✓ No Moving Parts</div>
            <div>✓ NSF 61 &amp; 372 Certified</div>
            <div>✓ 15% Guaranteed in Writing</div>
            <div>✓ 2–4 Hour Install</div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <div className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-4 mb-4">The Problem: Air in Your Water Meter</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Commercial water meters don't measure water. They measure flow volume — and they can't distinguish between water and air. Every time the municipal supply pressure fluctuates (which happens dozens of times per day in any commercial supply line), air gets pushed into the supply line and carried through to your meter.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              That air registers as metered volume. Your bill goes up. Your actual water use stays the same. This is called air entrapment, and industry studies estimate it accounts for 15%–40% of the average commercial water bill.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The key insight: you're not just paying too much for water. You're paying for something you never received at all.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Smart Valve™ Is</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Smart Valve™ is a passive hydrodynamic device. "Passive" means it has no electricity, no software, no actuators, and no moving parts. "Hydrodynamic" means it works by modifying the behavior of water and air as they flow through the supply line.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Specifically, Smart Valve™ creates a controlled flow environment that causes entrained air bubbles to separate from the water column before that water reaches your meter. The air is released back into the atmosphere through a passive venting mechanism. Only actual water volume passes to the meter and into the building.
            </p>

            <div className="bg-[#0374A7]/15 border border-[#0374A7]/30 rounded-2xl p-6 my-8">
              <p className="text-primary font-semibold mb-3">Technical Specification</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  "Type: Passive hydrodynamic air elimination device",
                  "Installation point: Main water supply line, between meter and first isolation valve",
                  "Installation time: 2–4 hours, no downtime required",
                  "Power: None — fully passive operation",
                  "Moving parts: None",
                  "Maintenance: None — no service contracts, no filter changes, no calibration",
                  "Certification: NSF 61 (drinking water system components), NSF 372 (lead-free)",
                  "Meter compatibility: 99% of commercial water meter types",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Where It Installs</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Smart Valve™ installs at the main water supply line entry point of the facility — upstream of the water meter, between the meter and the first isolation (ball) valve. This position ensures that air is eliminated before it reaches the meter, regardless of how air is introduced (pressure fluctuations, main breaks, supply surges).
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Because it installs on the main supply line, a single Smart Valve™ unit covers the entire facility — every fixture, every system, every process. There's no need for individual installations at different points in the building.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Smart Valve™ Does NOT Do</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is as important as what it does. Smart Valve™:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Does NOT restrict water flow — supply volume is unchanged",
                "Does NOT reduce water pressure — building and fixture pressure is unaffected",
                "Does NOT require electricity or maintenance of any kind",
                "Does NOT alter water chemistry or quality",
                "Is NOT a check valve, pressure reducer, or flow restrictor",
                "Is NOT the same as low-flow fixtures, aerators, or behavioral conservation programs",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Guarantee</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every Smart Valve™ installation comes with a written contract guaranteeing a minimum 15% reduction in metered water consumption. This is not a projection or an estimate — it is a contractual obligation. If results fall short, Perfect Water Valve makes it right at no additional cost.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The peak verified result in the portfolio is 58.69%, achieved at the Amazon YYZ3 hyperscale facility over six consecutive quarters of third-party Measurement and Verification. The guarantee covers the floor. The technology often delivers well above it.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Proven Across Industries and Geographies</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Smart Valve™ has been installed at more than 32,000 commercial and industrial facilities across North America. Verified results span luxury hospitality (Four Seasons, St. Regis), hyperscale logistics (Amazon), automotive (Caliber Car Wash), and multifamily residential (Grand Central at Kennedy). For the full results portfolio, see <a href="/results/" className="text-primary hover:underline">Case Studies &amp; Proof</a>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              For real-time cumulative savings data, visit the <a href="/impact/" className="text-primary hover:underline">Live Savings Counter</a>. For detailed ROI analysis by property type, see <a href="/savings/" className="text-primary hover:underline">Get a Full Proposal</a>.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0374A7 0%, #3C6E7F 100%)" }}>
            <h3 className="text-2xl font-bold text-white mb-3">See What Smart Valve™ Can Save Your Facility</h3>
            <p className="text-white/80 mb-6">Get a free assessment — no obligation, no commitment. Just the numbers for your specific building and market.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
              Request My Free Assessment <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <a href="/blog" className="text-primary hover:underline text-sm flex items-center gap-1">← Back to Blog</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block" style={{ color: "#0374A7" }}>Common Questions</span>
            <h2 className="text-2xl font-bold" style={{ color: "#0A1F3A" }}>Frequently Asked Questions About Smart Valve™</h2>
          </div>
          <SmartValveBlogFAQ />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SmartValveBlogFAQ() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderColor: "#D5E3EE" }}>
      {SMART_VALVE_FAQ_ITEMS.map((faq, i) => (
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
