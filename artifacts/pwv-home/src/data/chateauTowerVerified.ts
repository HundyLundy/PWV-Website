/**
 * SOURCE OF TRUTH — Chateau Tower Condominiums
 * Source PDF: "chateau-tower-tampa-fl.pdf"
 *   (Smart Valve™ Success Story, April 2020 — Gone Green Earth / Flow Dynamics, LLC)
 * Saved to: src/data/source-documents/chateau-tower-tampa-fl.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 */

export const CHATEAU_TOWER = {
  propertyName:    "Chateau Tower Condominiums",
  city:            "near Tampa, Florida",
  propertyType:    "Condominium — HOA",
  valveSize:       '3"',

  // Measurement
  installMonth:    "July 2020",
  beforeMonthlyGal: 550_000,       // gallons/month

  // Results
  reductionPct:     16,            // %
  annualSavings:    11_028,        // USD/yr
  fiveYearProfit:   45_112,        // USD — net 5-year savings after valve cost
  paybackMonths:    9.2,

  // Consulting partner
  partner: "Gone Green Earth",

  // Note from PDF
  notes: "Savings of 16% immediately realized on first bill. No change in water pressure detected by residents.",
} as const;

export const CHATEAU_TOWER_LABELS = {
  reduction:      "16%",
  annualSavings:  "$11,028",
  fiveYearProfit: "$45,112",
  payback:        "9.2 Months",
  beforeMonthly:  "550,000 gal/mo",
} as const;

export const CHATEAU_TOWER_QUOTE = {
  text: "Gone Green Earth carefully analyzed the optimal way to install the SMART VALVE™ before beginning the project. It was seamlessly installed and the solution was undetected by our residents. The valve continues to work perfectly while decreasing our water and sewer costs by over 16%. We are impressed with the numbers and the amazing savings!",
  attribution: "Chateau Tower Board Member",
} as const;

export const CHATEAU_TOWER_MONTHLY_CHART = [
  { label: "Before", gallons: 550_000 },
  { label: "After",  gallons: Math.round(550_000 * 0.84) },  // 16% reduction
] as const;
