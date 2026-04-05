/**
 * SOURCE OF TRUTH — Orange Apartment Building (500 Main St)
 * Source PDF: "orange-apartment-500-main-orange-nj.pdf" (Flow Dynamics, LLC Customer Case Study)
 * Saved to: src/data/source-documents/orange-apartment-500-main-orange-nj.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 */

export const ORANGE_APARTMENT = {
  propertyName:    "Orange Apartment Building",
  address:         "500 Main Street",
  city:            "Orange, NJ",
  propertyType:    "Apartment — 16 Units",
  meterSize:       '1"',
  waterSource:     "Municipal",
  source:          "Managing Agent",

  // Measurement periods
  beforePeriodStart: "2/15/2013",
  beforePeriodEnd:   "11/13/2013",
  afterPeriodStart:  "11/13/2013",
  afterPeriodEnd:    "9/2/2014",

  // Consumption
  beforeGalPerDay: 3_860,
  afterGalPerDay:  2_842,

  // Financial
  utilityRatePerCCF: 7.18,        // $/CCF
  annualGallonsSaved: 371_000,
  annualDollarsSaved:   3_566,
  paybackMonths:        8,

  // Results
  reductionPct: 26,

  // Comments (from PDF)
  comments: "Occupancy remained constant — minimal turnover. No central AC.",
} as const;

export const ORANGE_APARTMENT_LABELS = {
  reduction:     "26%",
  annualSavings: "$3,566",
  gallonsSaved:  "371,000",
  payback:       "8 Months",
  utilityRate:   "$7.18/CCF",
  beforeGPD:     "3,860",
  afterGPD:      "2,842",
} as const;

export const ORANGE_APARTMENT_CONSUMPTION = [
  { period: "Before (Feb–Nov 2013)", gpd: 3_860 },
  { period: "After (Nov 2013–Sep 2014)", gpd: 2_842 },
] as const;
