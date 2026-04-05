/**
 * SOURCE OF TRUTH — Park Gardens
 * Source PDF: "park-gardens-east-orange-nj.pdf" (Flow Dynamics, LLC Customer Case Study)
 * Saved to: src/data/source-documents/park-gardens-east-orange-nj.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 *
 * NOTE: The PDF lists gallons saved and payback but does not state an explicit dollar savings figure.
 * Annual dollar savings below is derived: 434,350 gal × $0.0188/gal = $8,166/yr (water + sewer).
 */

export const PARK_GARDENS = {
  propertyName:    "Park Gardens",
  address:         "162 Park Avenue",
  city:            "East Orange, NJ",
  propertyType:    "Apartment — 48 Units",
  meterSize:       '2"',
  waterSource:     "Municipal",

  // Measurement periods
  beforePeriodStart: "12/2/2014",
  beforePeriodEnd:   "12/7/2015",
  afterPeriodStart:  "1/21/2016",
  afterPeriodEnd:    "4/1/2016",

  // Consumption
  beforeGalPerDay: 5_776,
  afterGalPerDay:  4_586,

  // Financial
  utilityRatePerGal: 0.0188,     // $/gal (water + sewer combined)
  annualGallonsSaved: 434_350,
  // Derived: 434,350 × $0.0188 = $8,165.78 — no explicit dollar figure in PDF
  annualDollarsSaved: 8_166,
  paybackMonths: 15,

  // Results
  reductionPct: 21,
  occupancyPct: 98,

  // Comments (from PDF)
  comments: "Occupancy 98%. Billing on Water & Sewer.",
} as const;

export const PARK_GARDENS_LABELS = {
  reduction:     "21%",
  annualSavings: "$8,166",       // derived: 434,350 gal × $0.0188/gal
  gallonsSaved:  "434,350",
  payback:       "15 Months",
  utilityRate:   "$0.0188/gal",
  beforeGPD:     "5,776",
  afterGPD:      "4,586",
  occupancy:     "98%",
} as const;

export const PARK_GARDENS_CONSUMPTION = [
  { period: "Before (Dec 2014–Dec 2015)", gpd: 5_776 },
  { period: "After (Jan–Apr 2016)",       gpd: 4_586 },
] as const;
