/**
 * SOURCE OF TRUTH — The St. Regis Toronto
 * Source PDF: "pwv-st-regis-toronto.pdf" (Canadian Water Savings / CWS)
 * Saved to: src/data/source-documents/pwv-st-regis-toronto.pdf
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 *
 * NOTE: The PDF states $49,889 CAD savings and "20%+" reduction.
 * Before/After annual cost figures are derived:
 *   Before = $49,889 / 0.20 = $249,445 CAD
 *   After  = $249,445 - $49,889 = $199,556 CAD
 * The PDF does not list explicit before/after totals — only savings and %.
 *
 * Title discrepancy in PDF: body text says "Director of Engineering" but
 * the quote attribution says "Chief Engineer." The site uses "Chief Engineer"
 * per the quote attribution, which is the more authoritative reference.
 */

export const ST_REGIS = {
  propertyName:   "The St. Regis Toronto",
  city:           "Toronto, Ontario",
  propertyType:   "Luxury Hotel",
  brand:          "Marriott International",
  operator:       "Canadian Water Savings (CWS)",
  cwsDirectors:   ["Jordan Hutchinson", "Peter Chochua"],
  chiefEngineer:  "Priyan Jayetileke",

  presentationDate: "January 2024",
  presentationEvent: "H.E.A.T. members at The St. Regis",

  // Financial — CAD
  annualSavingsCAD:      49_889,
  reductionPct:          20,        // "20%+" — using 20 as the stated floor
  // Derived (PDF does not list explicit before/after totals)
  annualBeforeCAD:       249_445,   // 49,889 / 0.20
  annualAfterCAD:        199_556,   // 249,445 - 49,889
  guaranteedMinimumPct:  15,
  guaranteedMinimumCAD:  37_417,    // 249,445 × 0.15

  installDurationText:  "under an hour",
  mvMethod:             "Year-over-year utility comparison",

  // Quote — verbatim from PDF
  quoteText: "It has been a pleasure partnering with CWS Directors Jordan Hutchinson and Peter Chochua ever since their outstanding January 2024 presentation to the H.E.A.T. members at The St. Regis. The CWS Service Team carried that same professionalism through installation—finishing the Smart Valve™ setup in under an hour—and Jordan and Peter have provided consistent follow-up support and collaboration ever since. Now, more than a year later, the results speak for themselves: year-over-year savings of $49,889, representing 20 %+ in water-cost reduction.",
  quoteAttribution: "Priyan Jayetileke, Chief Engineer, The St. Regis Toronto",
} as const;

export const ST_REGIS_LABELS = {
  savings:           "CAD $49,889",
  reduction:         "20%+",
  payback:           "<1 hr install",
  guarantee:         "15% min",
  annualBefore:      "CAD $249,445",
  annualAfter:       "CAD $199,556",
  guaranteedMinimum: "CAD $37,417",
} as const;

/** Annual cost chart (before / after) */
export const ST_REGIS_ANNUAL_COST = [
  { label: "Before Smart Valve™", cost: ST_REGIS.annualBeforeCAD },
  { label: "After Smart Valve™",  cost: ST_REGIS.annualAfterCAD  },
] as const;

/** Savings vs guaranteed minimum chart */
export const ST_REGIS_SAVINGS_BARS = [
  { label: "Annual Savings (CAD)",  value: ST_REGIS.annualSavingsCAD     },
  { label: "Guaranteed Minimum",    value: ST_REGIS.guaranteedMinimumCAD },
] as const;

/** Reduction % vs contractual minimum */
export const ST_REGIS_REDUCTION_VS_GUARANTEE = [
  { name: `St. Regis Result (${ST_REGIS.reductionPct}%+)`, pct: ST_REGIS.reductionPct },
  { name: `Contractual Min (${ST_REGIS.guaranteedMinimumPct}%)`,  pct: ST_REGIS.guaranteedMinimumPct },
] as const;
