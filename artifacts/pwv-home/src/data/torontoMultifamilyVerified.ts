/**
 * SOURCE OF TRUTH — Toronto Multi-Residential Portfolio
 * Sources: CaseStudy1 (1121 Steeles Ave), CaseStudy2 (797 Don Mills),
 *          CaseStudy3 (21 & 23 Carlton St) — Canadian Water Savings (CWS), Feb 2019
 *
 * DO NOT EDIT these figures without the updated PDF case studies in hand.
 * All M&V conducted by CWS using IPMVP Option B methodology.
 */

// ── Water rate used in all three studies ──
export const CWS_RATE_PER_M3 = 3.8036; // CAD per m³

// ── 1121 Steeles Ave ──
// Valve: 4" | Benchmark: 4,400 m³/month | Sep 2018–Feb 2019
export const STEELES = {
  address:           "1121 Steeles Ave",
  city:              "Toronto, ON",
  valveSize:         '4"',
  benchmarkM3:       4400,
  measurementPeriod: "Sep 2018 – Feb 2019",
  avgSavingsPct:     31,   // average of 6 months below
} as const;

export const STEELES_MONTHLY = [
  { month: "Sep 2018", pct: 10,    actualM3: 3942.65,  savedM3: 457.35  },
  { month: "Oct 2018", pct: 23,    actualM3: 3399.81,  savedM3: 1000.19 },
  { month: "Nov 2018", pct: 29,    actualM3: 3130.72,  savedM3: 1269.28 },
  { month: "Dec 2018", pct: 48.90, actualM3: 2244.54,  savedM3: 2155.46 },
  { month: "Jan 2019", pct: 48.77, actualM3: 2254.206, savedM3: 2145.79 },
  { month: "Feb 2019", pct: 24.40, actualM3: 3326.69,  savedM3: 1073.31 },
] as const;

// ── 797 Don Mills ──
// Valve: 4" | Benchmark: 2,802 m³/month | Oct 2018–Feb 2019
export const DONMILLS = {
  address:           "797 Don Mills",
  city:              "Toronto, ON",
  valveSize:         '4"',
  benchmarkM3:       2802,
  measurementPeriod: "Oct 2018 – Feb 2019",
  avgSavingsPct:     18,   // average of 5 months below
} as const;

export const DONMILLS_MONTHLY = [
  { month: "Oct 2018", pct: 14,   actualM3: 2420.40,  savedM3: 381.60 },
  { month: "Nov 2018", pct: 14,   actualM3: 2420.40,  savedM3: 381.60 },
  { month: "Dec 2018", pct: 14,   actualM3: 2420.40,  savedM3: 381.60 },
  { month: "Jan 2019", pct: 28,   actualM3: 2028.27,  savedM3: 773.73 },
  { month: "Feb 2019", pct: 21.3, actualM3: 2204.99,  savedM3: 597.01 },
] as const;

// ── 21 & 23 Carlton St ──
// Valve installed end of June 2018.
// Pre-install: demand trending +16.25% above 2017 baseline (Mar–Jun 2018 vs Mar–Jun 2017)
// Post-install: consumption moderated to ~2017 levels — saving ~15% vs demand trajectory
export const CARLTON = {
  address:           "21 & 23 Carlton St",
  city:              "Toronto, ON",
  installDate:       "End of June 2018",
  preInstallTrend:   "+16.25% above 2017 baseline (Mar–Jun 2018 vs 2017)",
  savingsPct:        15,   // approximate savings vs demand trend
  notes:             "SmartValve moderates increased demand, bringing consumption close to 2017 levels",
} as const;

// Pre/post install monthly comparison data (2017 vs 2018, m³)
export const CARLTON_MONTHLY = [
  { month: "Mar", y2017: 4676, y2018: 5489, pctChange: +17 },
  { month: "Apr", y2017: 4499, y2018: 5010, pctChange: +11 },
  { month: "May", y2017: 4447, y2018: 5332, pctChange: +20 },
  { month: "Jun", y2017: 4889, y2018: 5737, pctChange: +17 },
  // SmartValve installed end of June 2018
  { month: "Jul", y2017: 5389, y2018: 5612, pctChange:  +4 },
  { month: "Aug", y2017: 5238, y2018: 5420, pctChange:  +3 },
] as const;

// ── Portfolio summary comparison (for chart) ──
export const TORONTO_PORTFOLIO_COMPARISON = [
  { property: "1121 Steeles Ave", avg: STEELES.avgSavingsPct  },
  { property: "797 Don Mills",    avg: DONMILLS.avgSavingsPct },
  { property: "21 & 23 Carlton", avg: CARLTON.savingsPct     },
] as const;
