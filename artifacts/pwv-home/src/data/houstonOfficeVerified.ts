/**
 * SOURCE OF TRUTH — Houston Office Building (Ten Story, 180,000 SF)
 * Source PDF: "houston-office-building-tx.pdf"
 *   (Smart Water Valve Texas / The Adjustable Flow Management Valve)
 *   URL in PDF: www.smartwatervalvetexas.com
 * Saved to: src/data/source-documents/houston-office-building-tx.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 *
 * Main meter: 4" valve
 * Measurement: Oct, Nov, Dec 2018 vs same months 2017 (YOY)
 *
 * Irrigation meter: 2" valve (separate meter)
 * Measurement: June, July 2017 vs June, July 2018 (YOY)
 */

export const HOUSTON_OFFICE = {
  propertyName:  "Ten Story Office Building",
  city:          "Houston, TX",
  propertyType:  "Multi-tenant Commercial Office",
  squareFeet:    180_000,
  stories:       10,
  mainValveSize: '4"',
  irrigValveSize:'2"',

  // Main meter — monthly breakdown (2017 vs 2018, Oct–Dec)
  monthly: [
    { month: "October",  before: { costUSD: 4_583, gpd: 15_536 }, after: { costUSD: 2_569, gpd: 10_174 } },
    { month: "November", before: { costUSD: 3_805, gpd: 11_250 }, after: { costUSD: 2_526, gpd:  6_970 } },
    { month: "December", before: { costUSD: 3_182, gpd: 10_000 }, after: { costUSD: 1_992, gpd:  6_207 } },
  ],

  // Main meter — averages
  avgBeforeCostUSD:  3_857,
  avgAfterCostUSD:   2_363,
  avgBeforeGPD:     12_262,
  avgAfterGPD:       7_784,

  // Main meter — results
  gpdReductionPct:   37,   // Average daily usage reduction
  billReductionPct:  39,   // Average bill reduction
  paybackText:       "<12 months",
  costPerSFPerYr:    0.10,  // $/SF/year reduction in water & sewer

  measurementPeriod: "Oct–Dec 2018 vs Oct–Dec 2017",

  // Irrigation meter
  irrigation: {
    valveSize:         '2"',
    gpdReductionPct:   45,
    billReductionPct:  40,
    paybackText:       "<12 months",
    measurementPeriod: "June–July 2018 vs June–July 2017",
    note:              "Irrigation meters can be influenced by scheduling changes — main meter result is primary.",
  },
} as const;

export const HOUSTON_OFFICE_LABELS = {
  gpdReduction:   "37%",
  billReduction:  "39%",
  payback:        "<12 Months",
  costPerSF:      "$0.10/SF/yr",
  avgBeforeCost:  "$3,857",
  avgAfterCost:   "$2,363",
  avgBeforeGPD:   "12,262",
  avgAfterGPD:    "7,784",
  irrigGPD:       "45%",
  irrigBill:      "40%",
} as const;

/** Monthly cost chart (Oct–Dec 2017 vs 2018) */
export const HOUSTON_MONTHLY_COST = [
  { month: "October",  before: 4_583, after: 2_569 },
  { month: "November", before: 3_805, after: 2_526 },
  { month: "December", before: 3_182, after: 1_992 },
] as const;

/** Monthly GPD chart (Oct–Dec 2017 vs 2018) */
export const HOUSTON_MONTHLY_GPD = [
  { month: "October",  before: 15_536, after: 10_174 },
  { month: "November", before: 11_250, after:  6_970 },
  { month: "December", before: 10_000, after:  6_207 },
] as const;

/** Average comparison */
export const HOUSTON_AVG = [
  { label: "Before Smart Valve™ (Avg)", cost: 3_857, gpd: 12_262 },
  { label: "After Smart Valve™ (Avg)",  cost: 2_363, gpd:  7_784 },
] as const;
