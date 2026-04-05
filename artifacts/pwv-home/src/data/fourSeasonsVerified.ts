/**
 * SOURCE OF TRUTH — Four Seasons Fort Lauderdale Smart Valve™ Case Study
 * Source: "AWS_FourSeasonsPilot_20251212" — American Water Savings Inc., December 2025
 *
 * DO NOT EDIT these figures without the updated PDF M&V report in hand.
 * All numbers are third-party IPMVP-verified.
 */

// ── Summary reductions (6-inch primary domestic service + combined system) ──
export const FOUR_SEASONS = {
  dailyReductionPct:          26,     // % daily water reduction, 6" service
  occNorm6inPct:              34,     // % occupancy-normalized, 6" service
  combinedOccNormPct:         17,     // % combined system occupancy-normalized
  costReductionPerDayPct:     21,     // % water+sewer cost reduction per day
  annualAvoidedCostUSD:      27000,   // ~$27,000 USD per year (current tariffs)
  preInstallDailyCostUSD:   348.21,   // $ per day — water+sewer pre-install
  postInstallDailyCostUSD:  274.07,   // $ per day — water+sewer post-install
  dailySavingUSD:            74.14,   // 348.21 − 274.07
  annualBeforeUSD:          127097,   // 348.21 × 365, rounded
  annualAfterUSD:           100036,   // 274.07 × 365, rounded
} as const;

// ── Monthly occupancy-normalized reduction — 6" service ──
// (August–October 2025; October reflects full post-calibration performance)
export const FOUR_SEASONS_MONTHLY = [
  { month: "August 2025",    reduction: 35 },
  { month: "September 2025", reduction: 10 },
  { month: "October 2025",   reduction: 56 },
] as const;

// ── Service-line comparison ──
export const FOUR_SEASONS_SERVICE = [
  { metric: "6-inch Service — Daily Avg",       reduction: 26 },
  { metric: "6-inch Service — Occ. Normalized", reduction: 34 },
  { metric: "Full System — Occ. Normalized",    reduction: 17 },
] as const;

// ── Daily cost chart data ──
export const FOUR_SEASONS_DAILY_COST = [
  { label: "Pre-Install",  cost: FOUR_SEASONS.preInstallDailyCostUSD  },
  { label: "Post-Install", cost: FOUR_SEASONS.postInstallDailyCostUSD },
] as const;

// ── Annual cost chart data ──
export const FOUR_SEASONS_ANNUAL_COST = [
  { label: "Before Smart Valve™", cost: FOUR_SEASONS.annualBeforeUSD },
  { label: "After Smart Valve™",  cost: FOUR_SEASONS.annualAfterUSD  },
] as const;

// ── Human-readable labels ──
export const FOUR_SEASONS_LABELS = {
  dailyReduction:    "26%",
  occNorm6in:        "34%",
  combinedOccNorm:   "17%",
  costPerDay:        "21%",
  annualAvoided:     "~$27K",
  preInstallDaily:   "$348.21",
  postInstallDaily:  "$274.07",
  annualAvoided$:    "~$27,000",
} as const;
