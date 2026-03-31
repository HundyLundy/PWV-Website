import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyAssessmentCTA } from "@/components/StickyAssessmentCTA";

const CATEGORIES = ["All", "Water Rates", "Case Studies", "Industry News", "How It Works", "Rebates & Incentives"];

const POSTS = [
  {
    slug: "commercial-water-rates-rising-2025",
    title: "Commercial Water Rates Are Rising Across Every State in 2025 — Here's What to Do About It",
    category: "Water Rates",
    date: "March 28, 2026",
    excerpt: "Water utilities across all 50 states are implementing rate increases in 2025, with some markets seeing 35–50% hikes. Here's a state-by-state breakdown and what commercial property managers can do right now.",
  },
  {
    slug: "amazon-yyz3-case-study",
    title: "Amazon YYZ3 Achieved 58.69% Water Savings Over 6 Consecutive Quarters — Here's How",
    category: "Case Studies",
    date: "March 20, 2026",
    excerpt: "The Amazon YYZ3 data center is the highest-verified result in the Smart Valve™ portfolio. 58.69% peak savings. Six consecutive quarters. Zero maintenance. Here's the full breakdown.",
  },
  {
    slug: "denver-water-rebate-guide",
    title: "Denver Water's Commercial Rebate Program: How to Get Up to 50% of Your Smart Valve™ Cost Covered",
    category: "Rebates & Incentives",
    date: "March 15, 2026",
    excerpt: "Denver Water offers rebates that can cover up to 50% of the cost of a Smart Valve™ installation — but the budget runs out every year. Here's exactly how to apply before it's gone.",
  },
  {
    slug: "hotel-water-savings-guide",
    title: "How Hotels Cut Water Bills 15–58% Without Touching Guest Experience",
    category: "Industry News",
    date: "March 10, 2026",
    excerpt: "Hotels are one of the highest water-use commercial property types. Smart Valve™ installs on the main supply line in under 4 hours — guests never notice, but the water bill does.",
  },
  {
    slug: "what-is-smart-valve",
    title: "What Is the Smart Valve™ and How Does It Actually Cut Your Water Bill?",
    category: "How It Works",
    date: "March 5, 2026",
    excerpt: "No electricity. No moving parts. No maintenance. Smart Valve™ installs on your main water supply line and cuts your metered bill 15–58%, guaranteed in writing. Here's the science behind it.",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Water Rates": "bg-red-900/40 text-red-300 border-red-700/40",
  "Case Studies": "bg-green-900/40 text-green-300 border-green-700/40",
  "Rebates & Incentives": "bg-yellow-900/40 text-yellow-300 border-yellow-700/40",
  "Industry News": "bg-blue-900/40 text-blue-300 border-blue-700/40",
  "How It Works": "bg-purple-900/40 text-purple-300 border-purple-700/40",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyAssessmentCTA />
      <Navbar onScrollTo={() => {}} />

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #1B4A5C 0%, #3C6E7F 55%, #0374A7 100%)" }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm mb-8">
              📝 Commercial Water Savings Insights
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
              The Perfect Water Valve Blog — Commercial Water Savings Insights, Industry News, and Proven Results
            </h1>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              Rate increases. Rebate deadlines. Real case studies. Everything commercial property managers and facility directors need to know about cutting water costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-white font-semibold text-sm">
            <div className="flex items-center gap-2">✓ 58.69% Peak Savings — Amazon YYZ3</div>
            <div className="flex items-center gap-2">✓ 15% Guaranteed in Writing</div>
            <div className="flex items-center gap-2">✓ NSF 61 &amp; 372 Certified</div>
            <div className="flex items-center gap-2">✓ No Power Required</div>
            <div className="flex items-center gap-2">✓ 99% Meter Compatible</div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-gray-400 border-white/15 hover:border-primary/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="bg-[#121B2E] border border-white/10 rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:bg-[#1A2540] transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[post.category] || "bg-white/10 text-white/60 border-white/10"}`}>
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />{post.date}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors mt-auto"
                >
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">No posts in this category yet.</div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5" style={{ background: "linear-gradient(160deg, #0374A7 0%, #025888 50%, #3C6E7F 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Cut Your Water Bill?</h2>
          <p className="text-white/80 mb-8">Get a free assessment for your commercial property. No obligation. Results guaranteed in writing.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:-translate-y-1" style={{ background: "#DEC600", color: "#0A1F3A", boxShadow: "0 4px 20px rgba(222,198,0,0.4)" }}>
            Get a Free Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
