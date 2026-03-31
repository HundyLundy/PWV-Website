import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const RATES_FAQ_ITEMS = [
  { q: "Why are commercial water rates rising in 2025?", a: "Commercial water rates are rising in every state due to aging infrastructure requiring $1 trillion in investment, drought reducing available supply, EPA compliance mandates, and climate-related costs. The American Water Works Association projects these increases to continue through 2030." },
  { q: "Which states have the highest water rate increases in 2025?", a: "The highest confirmed increases include Delaware (+42.8%), Indiana (up to +85.5% in some jurisdictions), and Hawaii (up to +59%). Most US states are seeing 5–20% increases, with drought-affected western states adding surcharges on top of base increases." },
  { q: "How can a commercial property reduce its water bill despite rate increases?", a: "Smart Valve™ cuts metered water consumption 15–58% by installing on the main supply line in under 4 hours. The reduction in metered volume offsets rate increases — and compounds each year as rates continue to rise." },
  { q: "How do I find out how much I can save on my commercial water bill?", a: "Contact Perfect Water Valve at (720) 937-3004 or info@perfectwatervalve.com for a free assessment. We review your current billing, model your savings at current and projected rates, and provide a written guarantee before installation." },
];

const ratesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": RATES_FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Commercial Water Rates Are Rising Across Every State in 2025 — Here's What to Do About It",
  "author": { "@type": "Organization", "name": "Perfect Water Valve Team" },
  "publisher": { "@type": "Organization", "name": "Perfect Water Valve", "url": "https://www.perfectwatervalve.com" },
  "datePublished": "2026-03-28",
  "description": "Water rates are rising 5–50% across all 50 states in 2025. See which states are hit hardest and how Smart Valve™ cuts commercial water bills 15–58%, guaranteed.",
  "url": "https://www.perfectwatervalve.com/blog/commercial-water-rates-rising-2025",
};

export default function WaterRates2025() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Commercial Water Rates Rising in 2025 — State-by-State Guide | Perfect Water Valve</title>
        <meta name="description" content="Water rates are rising 5–50% across all 50 states in 2025. See which states are hit hardest and how Smart Valve™ cuts commercial water bills 15–58%, guaranteed." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/blog/commercial-water-rates-rising-2025" />
        <meta property="og:title" content="Commercial Water Rates Rising in 2025 — State-by-State Guide | Perfect Water Valve" />
        <meta property="og:description" content="Water rates are rising 5–50% across all 50 states in 2025. See which states are hit hardest and how Smart Valve™ cuts commercial water bills 15–58%, guaranteed." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/blog/commercial-water-rates-rising-2025" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(ratesFaqSchema)}</script>
      </Helmet>

      <StickyAssessmentCTA />
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border bg-red-900/40 text-red-300 border-red-700/40">
              <Tag className="w-3 h-3" /> Water Rates
            </span>
            <span className="flex items-center gap-1 text-sm text-white/60"><Calendar className="w-4 h-4" /> March 28, 2026</span>
            <span className="flex items-center gap-1 text-sm text-white/60"><User className="w-4 h-4" /> Perfect Water Valve Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15]">
            Commercial Water Rates Are Rising Across Every State in 2025 — Here's What to Do About It
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            Commercial water rates are rising in every state in 2025 — with some markets like Delaware (42.8%), Indiana (up to 85.5%), and Hawaii (up to 59%) seeing dramatic increases. Here's a state-by-state breakdown and what commercial property managers can do right now.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-white font-semibold text-sm">
            <div>✓ 58.69% Peak Savings Recorded</div>
            <div>✓ 15% Guaranteed in Writing</div>
            <div>✓ NSF 61 &amp; 372 Certified</div>
            <div>✓ No Power Required</div>
            <div>✓ All 50 States Served</div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The National Trend: Why Rates Are Rising Everywhere</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Commercial water rates have been rising steadily for over a decade, but 2025 marks a significant acceleration. The American Water Works Association estimates that the US water infrastructure gap is approaching $1 trillion — and utilities are closing that gap through rate increases passed directly to commercial customers. Drought, aging infrastructure, and EPA compliance mandates are compounding the pressure.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              For commercial property managers and facility directors, this is not an abstract problem. A hotel spending $10,000/month on water in 2020 may now be paying $13,000–$15,000 for the exact same consumption. And the trend shows no sign of reversing.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">States With the Most Severe Rate Increases</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While every state is seeing water rate increases, several markets stand out for the magnitude and pace of their hikes:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { state: "Delaware", slug: "delaware", stat: "42.8%", detail: "Veolia Water Delaware filed for a 42.8% rate increase — one of the largest in the state's history. Commercial customers in Wilmington and surrounding markets are absorbing a cost increase that cannot be offset through efficiency alone." },
                { state: "Indiana", slug: "indiana", stat: "Up to 85.5%", detail: "Indiana American Water has sought increases of up to 85.5% in some service territories. For large commercial users — data centers, food processing plants, industrial facilities — this level of increase represents a material hit to operating costs." },
                { state: "Hawaii", slug: "hawaii", stat: "Up to 59%", detail: "Hawaii's Board of Water Supply has implemented increases of up to 59% in recent rate cases. In a state where all water must be locally sourced and treated, supply constraints keep pressure on commercial rates indefinitely." },
                { state: "Vermont", slug: "vermont", stat: "89% by 2030", detail: "Vermont's Department of Public Service projects cumulative commercial water rate increases of up to 89% by 2030 in some service areas. This is a five-year cliff that facilities need to plan for now." },
                { state: "Pennsylvania", slug: "pennsylvania", stat: "50%", detail: "Aqua Pennsylvania, one of the state's largest utilities, was approved for a 50% rate increase. Pennsylvania commercial customers in Philadelphia, Pittsburgh, and suburban markets are among the hardest hit in the Northeast." },
                { state: "Missouri", slug: "missouri", stat: "34.4% proposed", detail: "Missouri American Water proposed a 34.4% rate increase in its latest rate case. St. Louis, Kansas City, and surrounding commercial markets face significant cost escalation as this increase works through the system." },
              ].map(({ state, slug, stat, detail }) => (
                <div key={slug} className="bg-[#121B2E] border border-white/10 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <a href={`/locations/${slug}`} className="text-primary font-bold text-lg hover:underline">{state}</a>
                    <span className="text-2xl font-black text-red-400">{stat}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Problem With Traditional Conservation Approaches</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Most facilities facing rate increases turn first to behavioral conservation: shorter irrigation cycles, low-flow fixtures, leak detection programs. These approaches are valuable but have hard limits. A hotel can't meaningfully reduce guest shower time. A data center cannot reduce cooling water demand without compromising server temperatures. A hospital cannot cut sterile processing water without violating regulatory requirements.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              What most facilities don't know is that a significant portion of their metered water bill — typically 15%–40% — may not represent actual water consumed at all. It represents air that entered the municipal supply line and was counted as water by the meter. This is the air entrapment problem that Smart Valve™ was built to solve.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Smart Valve™: The Only Guaranteed Solution</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Smart Valve™ is a passive, NSF 61 and 372 certified device that installs at the main water supply line — upstream of the meter. It eliminates air entrapment before air reaches the meter, so only actual water volume is counted. The result: a metered consumption reduction of 15%–58%, guaranteed in writing on every installation.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Unlike behavioral conservation, Smart Valve™ delivers savings with zero impact on operations. No pressure change. No flow restriction. No maintenance required. It works passively, 24/7, whether the facility team thinks about it or not.
            </p>

            <div className="bg-[#0374A7]/20 border border-[#0374A7]/40 rounded-2xl p-6 my-8">
              <p className="text-white font-semibold mb-2">The Guarantee</p>
              <p className="text-gray-300 text-sm leading-relaxed">Every Smart Valve™ installation includes a written contract guaranteeing a minimum 15% reduction in metered water consumption. If results fall short, Perfect Water Valve makes it right at no additional cost. No other commercial water savings solution offers this level of certainty.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What to Do Right Now</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your facility spends $5,000 or more per month on water, you qualify for a free assessment. The assessment includes:
            </p>
            <ul className="list-none space-y-2 mb-6">
              {["A review of your current water billing and consumption baseline", "An estimate of your specific savings potential based on building type and location", "A review of available utility rebates in your market", "A no-obligation proposal with projected ROI"].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-300 text-sm"><span className="text-primary mt-0.5 flex-shrink-0">✓</span>{item}</li>
              ))}
            </ul>

          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0374A7 0%, #3C6E7F 100%)" }}>
            <h3 className="text-2xl font-bold text-white mb-3">Get a Free Commercial Water Assessment</h3>
            <p className="text-white/80 mb-6">Find out exactly how much your facility can save — before the next rate increase hits.</p>
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
            <h2 className="text-2xl font-bold" style={{ color: "#0A1F3A" }}>Frequently Asked Questions — Commercial Water Rates 2025</h2>
          </div>
          <RatesBlogFAQ />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function RatesBlogFAQ() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderColor: "#D5E3EE" }}>
      {RATES_FAQ_ITEMS.map((faq, i) => (
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
