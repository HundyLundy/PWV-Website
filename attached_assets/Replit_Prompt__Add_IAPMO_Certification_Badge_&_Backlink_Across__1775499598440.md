# Replit Prompt: Add IAPMO Certification Badge & Backlink Across perfectwatervalve.com

---

## CONTEXT

The Smart Valve™ (manufactured by Flow Dynamics LLC) holds an active, verified IAPMO Research and Testing certification for NSF/ANSI/CAN 61-2023 — Drinking Water System Components. This is a government-recognized third-party certification proving the valve is safe for potable water contact. We need this certification prominently displayed across the site with a live backlink to the official public listing.

**I will paste the official IAPMO R&T logo image directly into this conversation. Use that exact image file — do not create, generate, or substitute any other badge or icon.**

**Certification Details (use exactly as written):**
- **Certifying Body:** IAPMO Research and Testing, Inc.
- **File Number:** N-8904
- **Certificate Number:** 18017
- **Standard:** NSF/ANSI/CAN 61-2023
- **Product:** Drinking Water System Components – Health Effects
- **Issued To:** Flow Dynamics LLC
- **Valid Through:** September 2029
- **Public Listing URL:** https://myplc.iapmo.org/certificate#/18017
- **Certificate PDF:** https://thesmartvalve.com/wp-content/uploads/2026/02/N-8904_02-09-2026_Certificate.pdf

---

## LOGO SIZING RULES — FOLLOW EXACTLY

There are three display contexts for this badge. Apply the correct size based on where it appears:

**LARGE (Featured Context)** — 120px wide, auto height, with full certification text beside it
- Use when the certification is the primary subject of the section
- Always pair with the full text block (see Task 5 — Certifications Page)

**MEDIUM (Footer)** — 80px wide, auto height, with one line of text below it
- Use in the global site footer
- Text below logo: *"NSF/ANSI/CAN 61 Certified | File No. N-8904"* in small muted font

**SMALL (Trust Citation)** — 40px wide, auto height, inline or bottom-right of a section
- Use everywhere else: industry pages, homepage hero, product specs, contact page
- No text label needed — the logo alone signals authority
- Position it at the bottom-right corner of the section or module it appears in, not centered, not dominant
- Add an `aria-label` of "IAPMO R&T Certified — NSF/ANSI/CAN 61" for accessibility

**All sizes:** The logo must be a clickable link to `https://myplc.iapmo.org/certificate#/18017` opening in a new tab (`target="_blank" rel="noopener noreferrer"`). Use `object-fit: contain`. Do not stretch or distort the logo.

---

## TASK 1 — Create a Reusable Certification Badge Component

Create a reusable React component called `IapmoBadge` (file: `components/IapmoBadge.tsx` or equivalent).

The component must accept a `size` prop with three values: `"large"`, `"medium"`, or `"small"`.

- `size="large"`: renders the logo at 120px wide + full text block beside it (see sizing rules above)
- `size="medium"`: renders the logo at 80px wide + one-line text below it
- `size="small"`: renders the logo at 40px wide, no text, bottom-right aligned, subtle

All three sizes link to `https://myplc.iapmo.org/certificate#/18017` in a new tab.

The large variant should display this text block beside the logo:
> **NSF/ANSI/CAN 61-2023 Certified**
> Independently certified by IAPMO Research and Testing, Inc. — the recognized authority for drinking water system components. [View Official Listing →](https://myplc.iapmo.org/certificate#/18017)

---

## TASK 2 — Add the Badge to These Specific Pages

### 1. Homepage (`/`)
- **Size:** SMALL (40px)
- **Placement:** Bottom-right corner of the hero section, positioned as a subtle trust signal. Do not interrupt the headline, subheadline, or CTA button layout.

### 2. Product Page (`/product` or `/smart-valve`)
- **Size:** LARGE (120px) — this is a featured context
- **Placement:** In the product specifications section. Place the full `IapmoBadge size="large"` component in its own row directly below the specs table/list, above the CTA. This is the page where buyers make decisions — the cert should be prominent here.

### 3. How It Works Page (`/how-it-works`)
- **Size:** SMALL (40px)
- **Placement:** Bottom-right of the final section on the page. If the page ends with a CTA section, place the badge in the bottom-right corner of that section.

### 4. All Industry Hub Pages (Hotels, Hospitals, Car Washes, Multifamily, Data Centers, Golf Courses — all 6)
- **Size:** SMALL (40px)
- **Placement:** Bottom-right corner of the main content area on each page, above the site footer. Do not add a text label. The logo alone is sufficient as a trust citation.

### 5. Benefits / Plumbing Protection Page (`/benefits/plumbing-protection`)
- **Size:** SMALL (40px)
- **Placement:** Bottom-right of the intro section.

### 6. Contact Page (`/contact`)
- **Size:** SMALL (40px)
- **Placement:** Below the contact form, right-aligned, in a small trust block. If there are other trust signals already on this page (testimonials, guarantee text), group the badge with them.

---

## TASK 3 — Add a Certifications Block to the Global Site Footer

In the global site footer, add a "Certifications" column or row. Use the **MEDIUM (80px)** size badge.

The footer certifications block should contain:
1. `IapmoBadge size="medium"` — links to `https://myplc.iapmo.org/certificate#/18017`
2. Below or beside it, a second line: **"CE Declaration of Conformity"** as a text link to `https://thesmartvalve.com/technical-specs/` (new tab)
3. A small label above both: **"Third-Party Certifications"** in muted/secondary text style

This block appears on every page via the global footer.

---

## TASK 4 — Update Schema Markup on Homepage and Product Page

On the homepage and product page, add the following to the existing `Product` JSON-LD schema. Do not replace existing schema — only add this block:

```json
"hasCertification": {
  "@type": "Certification",
  "name": "NSF/ANSI/CAN 61-2023",
  "certificationBody": {
    "@type": "Organization",
    "name": "IAPMO Research and Testing, Inc.",
    "url": "https://www.iapmort.org"
  },
  "url": "https://myplc.iapmo.org/certificate#/18017"
}
```

---

## TASK 5 — Create a Dedicated Certifications Page at `/certifications`

**Page Title (H1):** Smart Valve™ Certifications & Compliance

**Meta title:** Smart Valve Certifications | NSF/ANSI/CAN 61 | IAPMO Certified | Perfect Water Valve

**Meta description:** The Smart Valve™ by Flow Dynamics is independently certified to NSF/ANSI/CAN 61-2023 by IAPMO Research and Testing. View our full certification documentation.

**Page layout:**

Use the **LARGE (120px)** badge at the top of the first certification section. This is the one page where the certification is the primary subject — make it prominent.

**Section 1: NSF/ANSI/CAN 61 — Potable Water Safety**

Place `IapmoBadge size="large"` here.

Below the badge and text block, add a details table:

| Field | Detail |
|---|---|
| Certifying Body | IAPMO Research and Testing, Inc. |
| Standard | NSF/ANSI/CAN 61-2023 |
| File Number | N-8904 |
| Certificate Number | 18017 |
| Valid Through | September 2029 |

Add two links:
- [View Official IAPMO Listing →](https://myplc.iapmo.org/certificate#/18017) — new tab
- [Download Certificate PDF →](https://thesmartvalve.com/wp-content/uploads/2026/02/N-8904_02-09-2026_Certificate.pdf) — new tab

Add this explanatory paragraph:
> NSF/ANSI/CAN 61 is the North American standard for drinking water system components. Products certified to this standard have been independently tested to ensure they do not leach harmful contaminants into potable water. This certification is required or recognized by plumbing codes in all 50 U.S. states and is the benchmark for potable water safety compliance in commercial buildings.

**Section 2: CE Declaration of Conformity**

No logo needed here — text only.

> The Smart Valve™ carries a CE Declaration of Conformity, demonstrating compliance with applicable European Union directives for pressure equipment used in water distribution systems.

Link: [View CE Declaration →](https://thesmartvalve.com/technical-specs/) — new tab

**Section 3: Certified Models**

Add a table:

| Model Number | Size | Product Name |
|---|---|---|
| 11550 | 0.75" | Smart Valve-G2 |
| 11540 | 1.0" | Smart Valve-G2 |
| 10395 | 1.5" | Smart Valve-G2 |
| 10227 | 2.0" | Smart Valve-G2 |
| 11685 | 3.0" | Smart Valve-G2 |
| 12045 | 4.0" | Smart Valve-G2 |
| 11995 | 6.0" | Smart Valve-G2 |
| 12150 | 8.0" | Smart Valve-G2 |
| 12375 | 10" | Smart Valve-G2 |
| 12285 | 12" | Smart Valve-G2 |

**Add this page to:**
- `sitemap.xml`
- The footer navigation under a "Company" or "Trust & Compliance" section
- Do NOT add to the main top navigation

**Add this JSON-LD schema to the page:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Smart Valve Certifications",
  "url": "https://perfectwatervalve.com/certifications",
  "about": {
    "@type": "Product",
    "name": "Smart Valve™",
    "brand": { "@type": "Brand", "name": "Flow Dynamics" },
    "hasCertification": {
      "@type": "Certification",
      "name": "NSF/ANSI/CAN 61-2023",
      "certificationBody": {
        "@type": "Organization",
        "name": "IAPMO Research and Testing, Inc.",
        "url": "https://www.iapmort.org"
      },
      "url": "https://myplc.iapmo.org/certificate#/18017"
    }
  }
}
```

---

## IMPORTANT NOTES

1. **Use the IAPMO R&T logo image I am pasting into this chat.** Do not create, generate, or substitute any other image. Use it exactly as provided.
2. **All external links must open in a new tab** with `target="_blank" rel="noopener noreferrer"`.
3. **Do not alter any existing page layouts** — add the badge as a supplementary element only.
4. **Preserve all existing schema markup** — only add to it, do not replace.
5. **The badge must never be stretched or distorted** — always use `object-fit: contain` and set only the width, let height be auto.
6. After completing all tasks, **submit the new `/certifications` URL to IndexNow** using the existing IndexNow API key already configured in the project (`c2fdee51ad25cebb52840c49cf5a8c397e2ed98f3a9c0b677ebb9ee65c5d8d54`).
