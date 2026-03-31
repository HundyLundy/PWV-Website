# PWV — Also Serving Cleanup + Colorado Title Tag Fix

Paste this entire prompt into Replit Agent. Two tasks. Push to GitHub when done.

---

## TASK 1 — Remove "Also Serving" from All State Pages (Except Colorado)

**Rule:** The "Also Serving" section should only exist on pages that link to a deeper, more specific page. Right now, state pages link to other state pages in "Also Serving" — that adds no navigation value and distracts from the contact form.

**Action:** Remove the "Also Serving" section entirely from ALL state-level location pages EXCEPT `/locations/colorado`.

This means removing "Also Serving" from:
- All 50 US state pages (Alabama, Alaska, Arizona, Arkansas, California, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming)
- `/locations/europe`
- `/locations/asia`

**Keep "Also Serving" on:**
- All 10 Colorado city pages (`/locations/colorado/denver`, `/locations/colorado/colorado-springs`, `/locations/colorado/aurora`, `/locations/colorado/fort-collins`, `/locations/colorado/lakewood`, `/locations/colorado/boulder`, `/locations/colorado/pueblo`, `/locations/colorado/loveland`, `/locations/colorado/greeley`, `/locations/colorado/arvada`) — these link to other Colorado city pages, which is genuine navigation depth
- `/industries/data-centers` hub page — the state cross-links there are contextually relevant

**Rule going forward (add as a comment in the LocationTemplate component):**
> "Also Serving" section should only be rendered when the page has city-level sub-pages to link to. Do not render it on state-level pages that only link laterally to other state pages.

---

## TASK 2 — Fix the Colorado State Page Title Tag

The `/locations/colorado` page currently uses the generic site-wide title tag. Update it to a Colorado-specific title.

Change the title tag on `/locations/colorado` from:
`Guaranteed 15–58% Commercial Water Savings | Perfect Water Valve`

To:
`Colorado Commercial Water Savings | Smart Valve™ | Perfect Water Valve`

Also update the meta description to:
`Colorado commercial properties face rising water rates from Denver Water, Colorado Springs Utilities, and Aurora Water. Smart Valve™ cuts your metered bill 15–58%, guaranteed. Denver Water rebate covers up to 50% of installation costs.`

And update the og:title to match:
`Colorado Commercial Water Savings | Smart Valve™ | Perfect Water Valve`

---

## COMPLETION CHECKLIST

Before pushing to GitHub, confirm:
- [ ] "Also Serving" section removed from all state pages and international pages
- [ ] "Also Serving" still present on all 10 Colorado city pages
- [ ] "Also Serving" still present on `/industries/data-centers`
- [ ] Colorado state page title tag updated to Colorado-specific version
- [ ] Colorado meta description updated
- [ ] No broken links introduced

Push to GitHub when all items are checked.
