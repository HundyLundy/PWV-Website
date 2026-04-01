import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Hotels Cut Water Bills 15%–35% annually Without Touching Guest Experience",
  "author": { "@type": "Organization", "name": "Perfect Water Valve Team" },
  "publisher": { "@type": "Organization", "name": "Perfect Water Valve", "url": "https://www.perfectwatervalve.com" },
  "datePublished": "2026-03-10",
  "description": "Hotels are among the highest water users in commercial real estate. Smart Valve™ cuts hotel water bills 15%–35% annually with a 4-hour install and zero impact on guest experience.",
  "url": "https://www.perfectwatervalve.com/blog/hotel-water-savings-guide",
};

export default function HotelWaterSavings() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Hotel Water Savings Guide — Cut Bills 15%–35% annually Without Affecting Guests | Perfect Water Valve</title>
        <meta name="description" content="Hotels are among the highest water users in commercial real estate. Smart Valve™ cuts hotel water bills 15%–35% annually with a 4-hour install and zero impact on guest experience." />
        <link rel="canonical" href="https://www.perfectwatervalve.com/blog/hotel-water-savings-guide" />
        <meta property="og:title" content="Hotel Water Savings Guide — Cut Bills 15%–35% annually Without Affecting Guests | Perfect Water Valve" />
        <meta property="og:description" content="Hotels are among the highest water users in commercial real estate. Smart Valve™ cuts hotel water bills 15%–35% annually with a 4-hour install and zero impact on guest experience." />
        <meta property="og:url" content="https://www.perfectwatervalve.com/blog/hotel-water-savings-guide" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <StickyAssessmentCTA />
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border bg-blue-900/40 text-blue-300 border-blue-700/40">
              <Tag className="w-3 h-3" /> Industry News
            </span>
            <span className="flex items-center gap-1 text-sm text-white/60"><Calendar className="w-4 h-4" /> March 10, 2026</span>
            <span className="flex items-center gap-1 text-sm text-white/60"><User className="w-4 h-4" /> Perfect Water Valve Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15]">
            How Hotels Cut Water Bills 15%–35% annually Without Touching Guest Experience
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            Hotels are one of the highest water-use commercial property types. Smart Valve™ installs on the main supply line in under 4 hours — guests never notice, but the water bill does.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-white font-semibold text-sm">
            <div>✓ $27K/yr — Four Seasons Fort Lauderdale</div>
            <div>✓ 26% Verified Reduction</div>
            <div>✓ Zero Guest Impact</div>
            <div>✓ 15% Guaranteed in Writing</div>
            <div>✓ 4-Hour Install, No Downtime</div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: "$27K/yr", label: "Four Seasons Savings" },
              { value: "26%", label: "Verified Reduction" },
              { value: "≥15%", label: "Guaranteed Min" },
            ].map(s => (
              <div key={s.label} className="bg-[#121B2E] border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-primary mb-1">{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-4 mb-4">Why Hotels Use So Much Water</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Hotels are among the most water-intensive commercial property types in existence. A typical full-service hotel uses 100–200 gallons of water per occupied room per night. For a 200-room hotel running at 70% occupancy, that's 14,000–28,000 gallons daily — before accounting for pools, spas, laundry, kitchen, and irrigation.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">The primary sources of hotel water consumption include:</p>
            <ul className="space-y-2 mb-6">
              {[
                "Guest room use: showers, faucets, toilets — typically 30–40% of total consumption",
                "Laundry: towels, linens, uniforms — typically 15–20% of total",
                "Food & beverage: kitchen prep, dishwashing, bar service",
                "Pool, spa, and recreational water: continuous evaporation and filtration",
                "Cooling towers: HVAC makeup water for large properties",
                "Irrigation: landscaping for resort and full-service properties",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Four Seasons Fort Lauderdale Result</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Four Seasons Fort Lauderdale achieved $27,000 in verified annual water savings following Smart Valve™ installation — a 26% reduction in metered consumption. The installation was completed in under 4 hours. No guest rooms were affected. No pool or spa was taken offline. Staff noticed nothing different except the next water bill.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              This is the defining characteristic of Smart Valve™ for hospitality: the savings mechanism operates at the point of supply, before water reaches any guest-facing system. The building still receives exactly the same water volume it needs. It just stops paying for the air that was being counted as water by the meter.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">States With the Highest Hotel ROI</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Smart Valve™ delivers results in every market, but hotel ROI is highest where water rates are most elevated. Five states stand out:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { state: "Florida", slug: "florida", note: "Miami rates up 7.3% annually. Gulf Coast hospitality markets are among the most water-intensive in the Southeast. Grand Central at Kennedy, Tampa: $50K/year verified." },
                { state: "Nevada", slug: "nevada", note: "Las Vegas hotel water costs are subject to SNWA binding conservation targets. Lake Mead supply constraints make rate increases structural." },
                { state: "Hawaii", slug: "hawaii", note: "Highest water rates in the US per gallon. Resort properties in Maui and the Big Island see immediate double-digit ROI." },
                { state: "New York", slug: "new-york", note: "NYC DEP commercial water rates up 8%. Both water and sewer charges apply — Smart Valve™ reduces both simultaneously." },
                { state: "California", slug: "california", note: "Highest commercial water rates in the continental US. Resort and hotel properties in LA, San Diego, and Palm Springs qualify for multiple conservation incentives." },
              ].map(({ state, slug, note }) => (
                <div key={slug} className="bg-[#121B2E] border border-white/10 rounded-xl p-4">
                  <a href={`/locations/${slug}`} className="text-primary font-bold hover:underline">{state}</a>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Sample ROI: 200-Room Hotel</h2>
            <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-white font-semibold mb-4">Assumptions: 200-room hotel, $8,000/month water bill, 70% average occupancy</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300"><span>Annual water spend</span><span className="text-white font-medium">$96,000</span></div>
                <div className="flex justify-between text-gray-300"><span>Guaranteed minimum savings (15%)</span><span className="text-green-400 font-medium">$14,400/yr</span></div>
                <div className="flex justify-between text-gray-300"><span>Expected range (15–26%)</span><span className="text-green-400 font-medium">$14,400–$24,960/yr</span></div>
                <div className="flex justify-between text-gray-300 pt-2 border-t border-white/10"><span>Installation: no downtime, 4 hours</span><span className="text-primary font-medium">Zero revenue impact</span></div>
                <div className="flex justify-between text-gray-300"><span>Typical payback period</span><span className="text-primary font-medium">6–14 months</span></div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">NSF Certification: Safe for Potable Water Systems</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Hotels cannot use conservation technology that poses any risk to guest water quality. Smart Valve™ is NSF 61 (drinking water system components) and NSF 372 (lead-free) certified — the gold standard for commercial potable water systems. Installation on the main supply line carries no risk to guest water quality, pressure, or flow.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              For more information on the hotel-specific case study portfolio and ROI analysis, visit the <a href="/industries/hotels" className="text-primary hover:underline">Hotels &amp; Hospitality industry page</a>.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0374A7 0%, #3C6E7F 100%)" }}>
            <h3 className="text-2xl font-bold text-white mb-3">Get a Free Hotel Water Assessment</h3>
            <p className="text-white/80 mb-6">We'll calculate your specific savings potential and identify any available rebates in your market. No obligation.</p>
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
