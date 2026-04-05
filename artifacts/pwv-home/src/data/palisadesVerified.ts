/**
 * SOURCE OF TRUTH — 1625 Palisades Avenue, Union City, NJ Smart Valve™ Case Study
 * Source: "1625-Palisades-Case-Study" — Flow Dynamics, LLC
 *
 * DO NOT EDIT these figures without the updated PDF case study in hand.
 */

export const PALISADES = {
  address:           "1625 Palisades Avenue",
  city:              "Union City, NJ",
  propertyType:      "Apartment — 38 units, 5 Stories",
  meterSize:         '2"',
  installDate:       "February 13, 2017",
  waterSource:       "Municipal",

  // Consumption figures
  beforeGalPerDay:   6920,    // Apr 2016 – Jan 2017
  afterGalPerDay:    5980,    // Feb 2017 – Mar 2017
  reductionPct:      14,      // %
  gallonsSavedPerYr: 343000,

  // Financials
  utilityRatePerGal: 0.0149,  // $/gal — water + sewer combined
  annualSavingsUSD:  5125,
  paybackMonths:     7,

  // Notes
  occupancy:         "100%",
  notes:             "Water consumption very consistent; low PSI, no booster pumps",
} as const;

// ── Chart data ──
export const PALISADES_CONSUMPTION = [
  { period: "Before (Apr 2016–Jan 2017)", gpd: PALISADES.beforeGalPerDay },
  { period: "After (Feb–Mar 2017)",       gpd: PALISADES.afterGalPerDay  },
] as const;

// ── Human-readable labels ──
export const PALISADES_LABELS = {
  reduction:      "14%",
  gallonsSaved:   "343,000",
  annualSavings:  "$5,125",
  payback:        "7 months",
  beforeGPD:      "6,920",
  afterGPD:       "5,980",
  utilityRate:    "$0.0149/gal",
} as const;
