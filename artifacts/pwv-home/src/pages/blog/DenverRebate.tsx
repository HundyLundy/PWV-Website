import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, User, Tag, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Denver Water's Commercial Rebate Program: How to Get Up to 50% of Your Smart Valve™ Cost Covered",
  "author": { "@type": "Organization", "name": "Perfect Water Valve Team" },
  "publisher": { "@type": "Organization", "name": "Perfect Water Valve", "url": "https://www.perfectwatervalve.com" },
  "datePublished": "2026-03-15",
  "description": "Denver Water's commercial rebate covers up to 50% of Smart Valve™ installation costs — but the budget runs out annually. Here's how to apply before it's gone.",
  "url": "https://www.perfectwatervalve.com/blog/denver-water-rebate-guide",
};

export default function DenverRebate() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Denver Water Commercial Rebate Guide 2025 — Up to 50% Cost Coverage | Perfect Water Valve</title>
        <meta name="description" content="Denver Water's commercial rebate covers up to 50% of Smart Valve™ installation costs — but the budget runs out annually. Here's how to apply before it's gone." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/blog/denver-water-rebate-guide" />
        <meta property="og:title" content="Denver Water Commercial Rebate Guide 2025 — Up to 50% Cost Coverage | Perfect Water Valve" />
        <meta property="og:description" content="Denver Water's commercial rebate covers up to 50% of Smart Valve™ installation costs — but the budget runs out annually. Here's how to apply before it's gone." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/blog/denver-water-rebate-guide" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <StickyAssessmentCTA />
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border bg-yellow-900/40 text-yellow-300 border-yellow-700/40">
              <Tag className="w-3 h-3" /> Rebates &amp; Incentives
            </span>
            <span className="flex items-center gap-1 text-sm text-white/60"><Calendar className="w-4 h-4" /> March 15, 2026</span>
            <span className="flex items-center gap-1 text-sm text-white/60"><User className="w-4 h-4" /> Perfect Water Valve Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15]">
            Denver Water's Commercial Rebate Program: How to Get Up to 50% of Your Smart Valve™ Cost Covered
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            Denver Water offers rebates that can cover up to 50% of the cost of a Smart Valve™ installation — but the budget runs out every year. Here's exactly how to apply before it's gone.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-white font-semibold text-sm">
            <div>✓ Up to 50% Rebate Available</div>
            <div>✓ Denver Water Priority Market</div>
            <div>✓ 15% Savings Guaranteed in Writing</div>
            <div>✓ AWS Handles Pre-Approval</div>
            <div>✓ Budget Is Finite — Apply Now</div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Urgency alert */}
          <div className="flex items-start gap-3 bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-5 mb-10">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-yellow-300 font-semibold mb-1">Annual Budget Warning</p>
              <p className="text-yellow-200/80 text-sm">Denver Water's commercial conservation rebate budget is funded annually and runs out on a first-come, first-served basis. Once the budget is exhausted, no new applications are accepted until the next fiscal year. Facilities that delay risk missing the window.</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-4 mb-4">What Is the Denver Water Commercial Rebate Program?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Denver Water operates one of the most aggressive commercial conservation incentive programs in the country. The Commercial Conservation Rebate Program provides financial incentives to commercial customers who install qualifying water conservation devices — including Smart Valve™.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The rebate covers up to 50% of the total installed cost of a qualifying Smart Valve™ system. For a typical commercial facility, this represents a significant reduction in the payback period — and in many cases, positions the investment for ROI in the first billing cycle alone.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Colorado Is a Priority Market</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <a href="/locations/colorado" className="text-primary hover:underline">Colorado</a> is Perfect Water Valve's designated priority market, and <a href="/locations/colorado/denver" className="text-primary hover:underline">Denver</a> is the center of that market for good reason. Denver Water implemented a 10% rate increase in 2025, with additional increases projected through the decade as the Colorado River Compact continues to tighten supply constraints across the Front Range.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Colorado has minimal existing Smart Valve™ market penetration, meaning facilities that act now are first-movers — locking in the technology, the rebate, and the savings before the market becomes saturated and rebate competition increases.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Eligibility Requirements</h2>
            <p className="text-gray-300 leading-relaxed mb-4">To qualify for the Denver Water Commercial Rebate, your facility must meet the following criteria:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Active commercial water account with Denver Water",
                "Minimum water consumption threshold (contact Perfect Water Valve to verify eligibility)",
                "Installation of a qualifying NSF-certified water conservation device (Smart Valve™ qualifies)",
                "Pre-approval completed before installation — retroactive applications are not accepted",
                "Post-installation M&V verification submitted within the required window",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Application Process</h2>
            <p className="text-gray-300 leading-relaxed mb-4">Perfect Water Valve handles the pre-approval process for all clients in the Denver Water service territory. Here's how it works:</p>

            <div className="space-y-4 mb-8">
              {[
                { step: "1", title: "Free Assessment", desc: "A Perfect Water Valve specialist reviews your water billing history, consumption baseline, and confirms Denver Water account eligibility." },
                { step: "2", title: "Pre-Approval Application", desc: "We submit the pre-approval application to Denver Water on your behalf. This must be completed and approved before installation begins." },
                { step: "3", title: "Installation", desc: "Smart Valve™ is installed at the main supply line. The process takes 2–4 hours with no facility downtime." },
                { step: "4", title: "M&V Documentation", desc: "We prepare and submit all post-installation Measurement and Verification documentation required by Denver Water's rebate program." },
                { step: "5", title: "Rebate Issued", desc: "Denver Water issues the rebate directly. Combined with the guaranteed water bill savings, most facilities achieve full payback within the first year." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 bg-[#121B2E] border border-white/10 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{step}</div>
                  <div>
                    <p className="text-white font-semibold mb-1">{title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Example ROI: Denver Commercial Facility</h2>
            <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-white font-semibold mb-4">Sample: Office Building, 80,000 sq ft, $8,500/month water bill</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300"><span>Annual water spend (pre-installation)</span><span className="text-white font-medium">$102,000</span></div>
                <div className="flex justify-between text-gray-300"><span>Guaranteed minimum savings (15%)</span><span className="text-green-400 font-medium">$15,300/yr</span></div>
                <div className="flex justify-between text-gray-300"><span>Expected savings at 20–30%</span><span className="text-green-400 font-medium">$20,400–$30,600/yr</span></div>
                <div className="flex justify-between text-gray-300 pt-2 border-t border-white/10"><span>Denver Water rebate (up to 50% of install cost)</span><span className="text-yellow-400 font-medium">Reduces capital outlay by 50%</span></div>
                <div className="flex justify-between text-gray-300"><span>Typical payback period (with rebate)</span><span className="text-primary font-medium">&lt; 12 months</span></div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0374A7 0%, #3C6E7F 100%)" }}>
            <h3 className="text-2xl font-bold text-white mb-3">Get Pre-Approved for the Denver Water Rebate</h3>
            <p className="text-white/80 mb-2">The rebate budget is finite and runs out every year. Don't wait until it's gone.</p>
            <p className="text-white/60 text-sm mb-6">Perfect Water Valve handles the entire application process at no cost to you.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
              Start My Pre-Approval <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <a href="/blog" className="text-primary hover:underline text-sm flex items-center gap-1">← Back to Blog</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
