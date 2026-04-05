/**
 * SOURCE OF TRUTH — Central Avenue Apartments
 * Source PDF: "central-ave-orange-nj.pdf" (Flow Dynamics, LLC Customer Case Study)
 * Saved to: src/data/source-documents/central-ave-orange-nj.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 */

export const CENTRAL_AVE = {
  propertyName:    "Central Avenue Apartments",
  address:         "451 Central Avenue",
  city:            "Orange, NJ",
  propertyType:    "Apartment — 13 Units",
  meterSize:       '1"',
  waterSource:     "Municipal",
  managingAgent:   "T.R.C. Management Co.",

  // Measurement periods
  beforePeriodStart: "4/1/2013",
  beforePeriodEnd:   "3/18/2014",
  afterPeriodStart:  "3/18/2014",
  afterPeriodEnd:    "9/2/2014",

  // Consumption
  beforeGalPerDay:   3310,
  afterGalPerDay:    2891,

  // Financial
  utilityRatePerCCF: 7.18,       // $/CCF
  annualGallonsSaved: 153_000,
  annualDollarsSaved:  1_470,
  paybackMonths:       19,

  // Results
  reductionPct:  12.5,

  // Comments (from PDF)
  comments: "Occupancy unchanged. No central AC.",
} as const;

export const CENTRAL_AVE_LABELS = {
  reduction:     "12.5%",
  annualSavings: "$1,470",
  gallonsSaved:  "153,000",
  payback:       "19 Months",
  utilityRate:   "$7.18/CCF",
  beforeGPD:     "3,310",
  afterGPD:      "2,891",
} as const;

export const CENTRAL_AVE_CONSUMPTION = [
  { period: "Before (Apr 2013–Mar 2014)", gpd: 3310 },
  { period: "After (Mar–Sep 2014)",       gpd: 2891 },
] as const;
