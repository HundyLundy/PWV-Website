/**
 * SOURCE OF TRUTH — RWJ Barnabas Ambulatory Care Center, Livingston, NJ
 * Source: "Barnabas-Healthcare-Case-Study" — Flow Dynamics, LLC
 *
 * DO NOT EDIT these figures without the updated PDF case study in hand.
 */

export const RWJ_BARNABAS = {
  propertyName:      "RWJ Barnabas Ambulatory Care Center",
  address:           "200 S. Orange Ave",
  city:              "Livingston, NJ",
  propertyType:      "Multi-Purpose Medical",
  waterSource:       "Municipal",
  meterConfig:       "Two 2\" Smart Valves",
  installDate:       "December 20, 2016",

  // Measurement periods
  beforePeriod:      "Nov 2015 – Nov 2016",
  afterPeriod:       "Dec 20, 2016 – Mar 13, 2017",

  // Consumption figures
  beforeGalPerDay:   19625,
  afterGalPerDay:    15425,
  reductionPct:      19,       // %
  gallonsMeasuredReduced: 1533000,

  // Financials
  utilityRatePerCCF: 7.70,     // $/CCF
  annualCostBefore:  72700,    // USD/yr
  annualCostAfter:   57200,    // USD/yr
  annualSavingsUSD:  15500,

  // Payback
  paybackMonths:     "<6",

  // Quote
  engineerQuote:     "Pressure and flow met requirements for all equipment.",
  engineerName:      "J. Flanagan",
  engineerTitle:     "Facility Engineer, RWJ Barnabas Health",
} as const;

// ── Chart data ──
export const RWJ_DAILY_USAGE = [
  { period: "Before (Nov 2015–Nov 2016)", gallons: RWJ_BARNABAS.beforeGalPerDay },
  { period: "After (Dec 2016–Mar 2017)",  gallons: RWJ_BARNABAS.afterGalPerDay  },
] as const;

export const RWJ_ANNUAL_COST = [
  { label: "Before Smart Valve™", cost: RWJ_BARNABAS.annualCostBefore },
  { label: "After Smart Valve™",  cost: RWJ_BARNABAS.annualCostAfter  },
] as const;

// ── Human-readable labels ──
export const RWJ_LABELS = {
  reduction:      "19%",
  annualSavings:  "$15,500",
  payback:        "<6 months",
  gallonsReduced: "1,533,000",
  beforeGPD:      "19,625",
  afterGPD:       "15,425",
  beforeAnnual:   "$72,700",
  afterAnnual:    "$57,200",
  utilityRate:    "$7.70/CCF",
} as const;
