/**
 * SOURCE OF TRUTH — 5100 Park Avenue, West New York, NJ Smart Valve™ Case Study
 * Source: "5100_park_ave_case_study" — Flow Dynamics, LLC
 *
 * DO NOT EDIT these figures without the updated PDF case study in hand.
 */

export const PARK_AVE = {
  address:           "5100 Park Avenue",
  city:              "West New York, NJ",
  propertyName:      "Park Avenue Apartments",
  propertyType:      "Apartments & Commercial",
  meterSize:         '1"',
  waterSource:       "Municipal",

  // Consumption figures
  beforePeriod:      "9/11/2013 – 1/14/2014",
  afterPeriod:       "1/14/2014 – 9/12/2014",
  beforeGalPerDay:   2930,
  afterGalPerDay:    2150,
  reductionPct:      30,      // %
  gallonsSavedPerYr: 285000,

  // Financials
  utilityRatePerGal: 0.0134,  // $/gal — water + sewer combined
  annualSavingsUSD:  3100,
  paybackMonths:     7,

  // Notes
  notes:             "No central AC; vacancy constant under 2.5%",
} as const;

// ── Chart data ──
export const PARK_AVE_CONSUMPTION = [
  { period: "Before (Sep 2013–Jan 2014)", gpd: PARK_AVE.beforeGalPerDay },
  { period: "After (Jan–Sep 2014)",       gpd: PARK_AVE.afterGalPerDay  },
] as const;

// ── Human-readable labels ──
export const PARK_AVE_LABELS = {
  reduction:      "30%",
  gallonsSaved:   "285,000",
  annualSavings:  "$3,100",
  payback:        "7 months",
  beforeGPD:      "2,930",
  afterGPD:       "2,150",
  utilityRate:    "$0.0134/gal",
} as const;
