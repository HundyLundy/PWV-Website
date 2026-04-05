/**
 * SOURCE OF TRUTH — Institutional Customer Showcase
 * Source PDF: "customer-showcase-institutional-aws.pdf"
 *   (Smart Valve™ — Enterprise & Global Deployments — AWS / Flow Dynamics)
 * Saved to: src/data/source-documents/customer-showcase-institutional-aws.pdf
 *
 * This file documents all named enterprise clients from the AWS Customer Showcase.
 * Use this list as the authoritative reference for any "Also Installed" or logo bars.
 *
 * DO NOT EDIT without the updated PDF in hand.
 */

export const SHOWCASE_CLIENTS = {
  globalLogisticsManufacturing: [
    {
      name:     "Amazon",
      detail:   "Canada & USA Full Network Rollout | Distribution & Robotics Sorting Facilities",
      notes:    "National-scale deployment across fulfillment, sortation, and robotics sites. High-flow, pressure-volatile infrastructure environments. Standardized deployment following pilot validation.",
      hasStats: true,
    },
    {
      name:     "Linamar",
      detail:   "Canada, USA & Mexico — Global Manufacturing Network Rollout (Underway)",
      notes:    "Automotive and industrial manufacturing campuses. Multi-country standardization under a single technical framework.",
      hasStats: false,
    },
  ],
  foodBeverage: [
    {
      name:     "Labatt Brewing Company",
      detail:   "Large-scale brewing and bottling operations",
      notes:    "Water as a core production input. Deployed to stabilize flow and reduce non-revenue water.",
      hasStats: false,
    },
    {
      name:     "Guinness",
      detail:   "High-volume brewing operations",
      notes:    "Tight tolerances around pressure, flow, and metering accuracy.",
      hasStats: false,
    },
    {
      name:     "Commercial Bakeries Inc",
      detail:   "Industrial baking facilities with cyclical, high-demand water loads",
      notes:    "Focus on consistency and infrastructure protection.",
      hasStats: false,
    },
    {
      name:     "Kerry Group",
      detail:   "Canada — Ingredient manufacturing and processing facilities",
      notes:    "Emphasis on operational efficiency and input control.",
      hasStats: false,
    },
  ],
  hospitalityLuxury: [
    {
      name:     "St. Regis Hotel & Residences",
      detail:   "Luxury hotel and residential tower",
      notes:    "High sensitivity to pressure events and guest experience. Suitable for premium assets with zero tolerance for disruption.",
      hasStats: true,
    },
    {
      name:     "Four Seasons Hotels and Resorts",
      detail:   "Global Partnership",
      notes:    "Portfolio-wide engagement across flagship properties. Institutional validation following pilot and performance review.",
      hasStats: true,
    },
  ],
  institutionalRealEstate: [
    {
      name:     "Starlight Investments",
      detail:   "Full Canada Network Rollout — Large multi-residential portfolio",
      notes:    "Standardized deployment across assets. Demonstrates portfolio-level scalability.",
      hasStats: false,
    },
    {
      name:     "Akelius",
      detail:   "Toronto-Wide Rollout — Dense urban multi-residential assets",
      notes:    "Focus on infrastructure protection and utility normalization.",
      hasStats: false,
    },
  ],
} as const;

/** Flat list for "Also Installed" bars — no published stats */
export const SHOWCASE_NO_STATS = [
  "Linamar",
  "Labatt Brewing",
  "Guinness",
  "Commercial Bakeries",
  "Kerry Group (CA)",
  "Starlight Investments",
  "Akelius",
] as const;
