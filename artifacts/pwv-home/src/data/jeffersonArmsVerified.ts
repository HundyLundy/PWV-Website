/**
 * SOURCE OF TRUTH — Jefferson Arms
 * Source PDF: "jefferson-arms-orange-nj.pdf" (Flow Dynamics, LLC Customer Case Study)
 * Saved to: src/data/source-documents/jefferson-arms-orange-nj.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 */

export const JEFFERSON_ARMS = {
  propertyName:    "Jefferson Arms",
  address:         "24 So. Jefferson St.",
  city:            "Orange, NJ",
  propertyType:    "Apartment — 28 Units",
  meterSize:       '2"',
  waterSource:     "Municipal",

  // Measurement periods
  beforePeriodStart: "1/17/2013",
  beforePeriodEnd:   "11/7/2014",
  afterPeriodStart:  "11/20/2014",
  afterPeriodEnd:    "12/30/2014",

  // Consumption
  beforeGalPerDay: 7_400,
  afterGalPerDay:  6_550,

  // Financial
  utilityRatePerCCF: 6.65,       // $/CCF annual
  annualGallonsSaved: 420_000,
  annualDollarsSaved:   3_700,
  paybackMonths:       15,

  // Results
  reductionPct: 14.7,

  // Comments (from PDF)
  comments: "Occupancy constant and consumption consistent.",
} as const;

export const JEFFERSON_ARMS_LABELS = {
  reduction:     "14.7%",
  annualSavings: "$3,700",
  gallonsSaved:  "420,000",
  payback:       "15 Months",
  utilityRate:   "$6.65/CCF",
  beforeGPD:     "7,400",
  afterGPD:      "6,550",
} as const;

export const JEFFERSON_ARMS_CONSUMPTION = [
  { period: "Before (Jan 2013–Nov 2014)", gpd: 7_400 },
  { period: "After (Nov–Dec 2014)",       gpd: 6_550 },
] as const;
