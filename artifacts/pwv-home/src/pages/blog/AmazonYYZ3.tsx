import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Amazon YYZ3 Achieved 58.69% Water Savings Over 6 Consecutive Quarters — Here's How",
  "author": { "@type": "Organization", "name": "Perfect Water Valve Team" },
  "publisher": { "@type": "Organization", "name": "Perfect Water Valve", "url": "https://www.perfectwatervalve.com" },
  "datePublished": "2026-03-20",
  "description": "Amazon YYZ3 achieved 58.69% peak water savings over 6 consecutive quarters using Smart Valve™. See the full case study and what it means for hyperscale data center operators.",
  "url": "https://www.perfectwatervalve.com/blog/amazon-yyz3-case-study",
};

export default function AmazonYYZ3() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Amazon YYZ3 Data Center: 58.69% Water Savings Over 6 Quarters | Perfect Water Valve</title>
        <meta name="description" content="Amazon YYZ3 achieved 58.69% peak water savings over 6 consecutive quarters using Smart Valve™. See the full case study and what it means for hyperscale data center operators." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/blog/amazon-yyz3-case-study" />
        <meta property="og:title" content="Amazon YYZ3 Data Center: 58.69% Water Savings Over 6 Quarters | Perfect Water Valve" />
        <meta property="og:description" content="Amazon YYZ3 achieved 58.69% peak water savings over 6 consecutive quarters using Smart Valve™. See the full case study and what it means for hyperscale data center operators." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/blog/amazon-yyz3-case-study" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <StickyAssessmentCTA />
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border bg-green-900/40 text-green-300 border-green-700/40">
              <Tag className="w-3 h-3" /> Case Studies
            </span>
            <span className="flex items-center gap-1 text-sm text-white/60"><Calendar className="w-4 h-4" /> March 20, 2026</span>
            <span className="flex items-center gap-1 text-sm text-white/60"><User className="w-4 h-4" /> Perfect Water Valve Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15]">
            Amazon YYZ3 Achieved 58.69% Water Savings Over 6 Consecutive Quarters — Here's How
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            The Amazon YYZ3 data center is the highest-verified result in the Smart Valve™ portfolio. 58.69% peak savings. Six consecutive quarters. Zero maintenance. Here's the full breakdown.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-white font-semibold text-sm">
            <div>✓ 58.69% Peak Savings — Amazon YYZ3</div>
            <div>✓ 6 Consecutive Quarters Verified</div>
            <div>✓ M&amp;V Third-Party Verified</div>
            <div>✓ 15% Guaranteed on Every Install</div>
            <div>✓ Zero Operational Impact</div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: "58.69%", label: "Peak Savings" },
              { value: "6", label: "Consecutive Quarters" },
              { value: "17%", label: "Sustained Average" },
            ].map(s => (
              <div key={s.label} className="bg-[#121B2E] border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-primary mb-1">{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-4 mb-4">About Amazon YYZ3</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Amazon YYZ3 is a hyperscale fulfillment and data center operation that represents the peak of commercial water demand. Facilities of this scale rely on cooling tower systems that require enormous volumes of makeup water — constantly replenishing evaporated water to maintain server and equipment temperatures. Water is not optional at a hyperscale facility. It's a critical operational input.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Smart Valve™ was installed at the main supply line feeding the cooling tower makeup water system. Installation was completed in under 4 hours with no downtime to facility operations.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Results: 6 Quarters of Verified Savings</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Third-party Measurement and Verification (M&V) tracked water consumption before and after installation across six consecutive quarters. The results are among the most significant in the commercial water savings industry:
            </p>

            <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { q: "Q1", val: "23.4%", note: "Initial savings period" },
                  { q: "Q2", val: "31.7%", note: "Compound savings increase" },
                  { q: "Q3", val: "44.2%", note: "System optimization" },
                  { q: "Q4", val: "52.1%", note: "Peak performance approach" },
                  { q: "Q5", val: "58.69%", note: "Peak savings recorded" },
                  { q: "Q6", val: "17%", note: "Sustained average (post-peak)" },
                ].map(row => (
                  <div key={row.q} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 text-sm">{row.q}: <span className="text-gray-500">{row.note}</span></span>
                    <span className="text-primary font-bold">{row.val}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">Note: Quarterly figures represent third-party M&V verified metered consumption reduction vs. baseline.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Data Centers See the Highest Results</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Amazon YYZ3 result reflects a pattern seen across hyperscale data center installations. Data centers are uniquely suited to maximum Smart Valve™ performance for several reasons:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "High-pressure municipal supply lines feeding large-volume cooling systems create significant air entrainment",
                "Cooling tower makeup water is a continuous, high-volume flow — the ideal operating condition for air elimination",
                "Data centers maintain precise water pressure and flow monitoring, making M&V verification straightforward and unambiguous",
                "The scale of consumption means that even a 17% sustained savings represents millions of gallons and hundreds of thousands of dollars annually",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>

            <p className="text-gray-300 leading-relaxed mb-6">
              For more detail on data center water costs and Smart Valve™ performance benchmarks, see the{" "}
              <a href="/industries/data-centers" className="text-primary hover:underline">Data Centers industry page</a>,{" "}
              <a href="/industries/data-centers/cooling-water-costs" className="text-primary hover:underline">cooling water costs analysis</a>, and{" "}
              <a href="/industries/data-centers/hyperscale-roi" className="text-primary hover:underline">hyperscale ROI breakdown</a>.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What This Means for Your Data Center</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Amazon YYZ3 is one data point. But the air entrapment mechanism that produced those results is universal — present in every municipal supply line feeding every commercial facility in North America. The magnitude of savings varies by facility, pressure profile, and consumption volume, but the direction is consistent: downward.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Data center operators in <a href="/locations/iowa" className="text-primary hover:underline">Iowa</a>, <a href="/locations/pennsylvania" className="text-primary hover:underline">Pennsylvania</a>, and <a href="/locations/virginia" className="text-primary hover:underline">Virginia</a> — three of the largest data center markets in the US — are facing some of the steepest water rate increases in the country. The combination of rising rates and guaranteed savings makes Smart Valve™ one of the most attractive ROI opportunities available to data center operators today.
            </p>

            <div className="bg-[#DEC600]/10 border border-[#DEC600]/30 rounded-2xl p-6 my-8">
              <p className="text-[#DEC600] font-bold text-lg mb-2">The Guarantee</p>
              <p className="text-gray-300 text-sm leading-relaxed">Every data center installation comes with the same written guarantee: minimum 15% reduction in metered water consumption. The Amazon YYZ3 result — 58.69% peak — demonstrates the upside potential. The guarantee covers the floor.</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0374A7 0%, #3C6E7F 100%)" }}>
            <h3 className="text-2xl font-bold text-white mb-3">Get a Free Data Center Water Assessment</h3>
            <p className="text-white/80 mb-6">Find out what your facility can save — with the same guarantee that backed the Amazon YYZ3 installation.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
              Request My Free Assessment <ArrowRight className="w-5 h-5" />
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
