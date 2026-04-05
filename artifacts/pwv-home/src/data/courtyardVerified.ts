/**
 * SOURCE OF TRUTH — Courtyard Apartments, Hackensack NJ
 * Source PDF: "courtyard-apartments-hackensack-nj.pdf"
 *   (Flow Dynamics, LLC Customer Case Study — 11-month update)
 * Saved to: src/data/source-documents/courtyard-apartments-hackensack-nj.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 */

export const COURTYARD = {
  propertyName:    "Courtyard Apartments",
  city:            "Hackensack, NJ",
  propertyType:    "Apartment — 80 Units (Mid-Rise)",
  meterSize:       '3"',
  waterSource:     "Municipal",
  source:          "Management Company",
  units:           80,

  // Measurement periods
  beforePeriodStart: "4/1/2014",
  beforePeriodEnd:   "3/4/2015",
  afterPeriodStart:  "4/15/2015",
  afterPeriodEnd:    "3/2/2016",
  installDate:       "4/15/2015",

  // Consumption (per unit per day)
  beforeGalPerDayPerUnit: 146,
  afterGalPerDayPerUnit:  109,

  // Totals
  beforeGalPerDayTotal: 80 * 146,   // 11,680 gal/day
  afterGalPerDayTotal:  80 * 109,   // 8,720 gal/day

  // Financial (no sewer charge on this property)
  annualGallonsSaved: 842_928,
  annualDollarsSaved:   4_549,
  tenYearProjection:   45_490,      // based on current water rates

  // 11-month billing averages
  avgMonthlyCostBefore: 2096.31,    // $/month
  avgMonthlyCostAfter:  1717.27,    // $/month

  // Results
  reductionPct: 18,

  notes: "Property not subject to sewerage charge.",
} as const;

export const COURTYARD_LABELS = {
  reduction:       "18%",
  annualSavings:   "$4,549",
  gallonsSaved:    "842,928",
  tenYear:         "$45,490",
  beforeGPD:       "11,680",       // 80 × 146
  afterGPD:        "8,720",        // 80 × 109
  beforePerUnit:   "146 gal/unit/day",
  afterPerUnit:    "109 gal/unit/day",
} as const;

export const COURTYARD_CONSUMPTION = [
  { period: "Before (Apr 2014–Mar 2015)", gpd: 80 * 146 },
  { period: "After (Apr 2015–Mar 2016)",  gpd: 80 * 109 },
] as const;

export const COURTYARD_PER_UNIT = [
  { period: "Before", gal: 146 },
  { period: "After",  gal: 109 },
] as const;

export const COURTYARD_MONTHLY_COST = [
  { period: "Before (11-mo avg)", cost: 2096.31 },
  { period: "After (11-mo avg)",  cost: 1717.27 },
] as const;
