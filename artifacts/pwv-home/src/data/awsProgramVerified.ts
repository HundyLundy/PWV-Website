/**
 * SOURCE OF TRUTH — AWS Program-Wide Statistics
 * Source: "AWS_SalesKit_2025" — American Water Savings Inc., 2025
 *
 * DO NOT EDIT these figures without the updated PDF in hand.
 */

export const AWS_PROGRAM = {
  businessesServed:        32000,  // "Over 32,000 businesses in North America on our programs"
  businessesServedLabel:   "32,000+",
  savingsRangeMin:         15,     // % — guaranteed minimum
  savingsRangeMax:         35,     // % — typical maximum
  savingsRangeLabel:       "15%–35%",
  yearsExperience:         65,     // "Over 65 years' experience in commodity management"
  yearsExperienceLabel:    "65+",
} as const;

/**
 * TESTIMONIALS (verbatim from Sales Kit)
 * These quotes appear in the PDF and may be shown on the site.
 * Do not alter the wording without the updated PDF.
 */
export const AWS_TESTIMONIALS = {
  houstonianEstates: {
    client:   "Houstonian Estates (High Rise Condominium)",
    contact:  "Doug Horn, General Manager",
    quote:    "Installing the Smart Valve™ saved us a considerable amount of money — approximately 6,000 gallons per day or 16%. When you are looking at over 13 million gallons a year, that's a lot of water saved.",
    savingsPct: 16,
    galPerDay:  6000,
    annualGal:  13_000_000,
  },
  ctrcManagement: {
    client:   "C.T.R.C. Management Co., Essex County, NJ",
    contact:  "Greg",
    quote:    "We have purchased and installed 12 Smart Valves in our apartment properties over the past 6 months. Savings have ranged from 11% to 23%. We intend to install in our other buildings by the end of the year.",
    savingsRangeMin: 11,
    savingsRangeMax: 23,
    valvesInstalled: 12,
  },
  grandCentralTampa: {
    client:   "Grand Central at Kennedy",
    city:     "Tampa, FL",
    contact:  "Bob Pack, General Manager",
    quote:    "In two years since installed, our savings on water and sewer charge are averaging 23%. We are reducing our line item for water and sewer charges by $50,000 (from $240,000 to $190,000).",
    savingsPct:     23,
    annualSavings:  50000,
    billBefore:     240000,
    billAfter:      190000,
    verificationPeriod: "2 years",
  },
  dashinDye: {
    client:   "Dashin Dye Manufacturing",
    city:     "Cerritos, CA",
    contact:  "President",
    quote:    "We saved over $5,000 in our first month after installing the Smart Valve! We highly recommend it to anyone who wants to save money.",
    firstMonthSavings: 5000,
  },
} as const;
