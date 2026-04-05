/**
 * ════════════════════════════════════════════════════════════════════
 *  AMAZON YYZ3 / YYZ4 — VERIFIED M&V DATA
 *  Source: "PWV Amazon Case Study 2025" (formal PDF)
 *  DO NOT EDIT these figures without the updated PDF in hand.
 * ════════════════════════════════════════════════════════════════════
 *
 *  Installation:   Smart Valve™ installed June 2024 at both sites
 *  M&V method:     Year-over-year quarterly comparison (Q3/Q4 2024 vs Q3/Q4 2023)
 *  Cost basis:     $3.00/m³ (water only, excluding sewer)
 *
 *  YYZ3 (Brampton, ON — no interruptions)
 *    Q3 2024 (Jul–Sep):  58.69% reduction year-over-year
 *    Q4 2024 (Oct–Dec):  29.27% reduction year-over-year
 *    Q3/Q4 average:      43.98%
 *    Peak volume (2023): 1,107 m³/month  →  457.30 m³ after install
 *    Flow rate:          5.26 gal/min  →  2.74 gal/min (−2.52 gal/min)
 *
 *  YYZ4 (Brampton, ON — valve removed Sept 5, reinstalled Oct 25 2024)
 *    Q3 2024 (Jul–Sep):  17.36% reduction year-over-year
 *    Q4 2024 (Oct–Dec): −14.44% (usage INCREASE — valve was removed)
 *    Q3/Q4 average:      14.6%  (weighted; Q4 reflects removal, not performance)
 *
 *  Portfolio (YYZ3 + YYZ4 simple average):  29.3%
 *  Contractual minimum guaranteed:          ≥15%
 * ════════════════════════════════════════════════════════════════════
 */

export const AMAZON = {
  installDate: "June 2024",
  mvMethod: "Year-over-year quarterly comparison",
  costPerCubicMeter: 3.00,

  yyz3: {
    q3_2024: 58.69,
    q4_2024: 29.27,
    avg: 43.98,
    peakVolumeBaseline_m3: 1107,
    peakVolumeWithValve_m3: 457.30,
    flowBaseline_gpm: 5.26,
    flowWithValve_gpm: 2.74,
    flowReduction_gpm: 2.52,
  },

  yyz4: {
    q3_2024: 17.36,
    q4_2024: -14.44,
    avg: 14.6,
    q4Note: "Valve removed Sept 5, reinstalled Oct 25, 2024 — Q4 increase is removal-related",
  },

  portfolio: {
    avg: 29.3,
    guaranteedMinimum: 15,
  },

  source: "PWV Amazon Case Study 2025",
} as const;

/** Chart-ready quarterly data — Q3/Q4 2024 only */
export const AMAZON_QUARTERLY_CHART = [
  { period: "Q3 2024 (Jul–Sep)", YYZ3: AMAZON.yyz3.q3_2024, YYZ4: AMAZON.yyz4.q3_2024 },
  { period: "Q4 2024 (Oct–Dec)", YYZ3: AMAZON.yyz3.q4_2024, YYZ4: AMAZON.yyz4.q4_2024 },
] as const;

/** Single-site bar chart data */
export const YYZ3_QUARTERLY_CHART = [
  { period: "Q3 2024 (Jul–Sep)", savings: AMAZON.yyz3.q3_2024 },
  { period: "Q4 2024 (Oct–Dec)", savings: AMAZON.yyz3.q4_2024 },
] as const;

export const YYZ4_QUARTERLY_CHART = [
  { period: "Q3 2024 (Jul–Sep)", savings: AMAZON.yyz4.q3_2024 },
  { period: "Q4 2024 (Oct–Dec)*", savings: AMAZON.yyz4.q4_2024 },
] as const;

/** Portfolio average bar (horizontal chart) */
export const PORTFOLIO_AVG_CHART = [
  { site: "YYZ3", avg: AMAZON.yyz3.avg },
  { site: "YYZ4", avg: AMAZON.yyz4.avg },
  { site: "Portfolio", avg: AMAZON.portfolio.avg },
] as const;

/** Human-readable summary strings — used in meta tags, stat pills, etc. */
export const AMAZON_LABELS = {
  peak:          `${AMAZON.yyz3.q3_2024}%`,
  yyz3Avg:       `${AMAZON.yyz3.avg}%`,
  yyz4Avg:       `${AMAZON.yyz4.avg}%`,
  portfolioAvg:  `${AMAZON.portfolio.avg}%`,
  period:        "Q3/Q4 2024",
  guarantee:     `≥${AMAZON.portfolio.guaranteedMinimum}%`,
  navLabel:      `Amazon YYZ3 — ${AMAZON.yyz3.avg}% avg, ${AMAZON.yyz3.q3_2024}% peak`,
  shortSummary:  `${AMAZON.yyz3.q3_2024}% peak Q3 2024 · ${AMAZON.yyz3.avg}% YYZ3 avg · M&V verified`,
} as const;
