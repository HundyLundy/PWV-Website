import { Router, type IRouter } from "express";
import {
  GetSummaryResponse,
  GetQuarterlySavingsResponse,
  GetWaterUsageResponse,
  GetSitesResponse,
  GetCostSavingsResponse,
  GetCustomersResponse,
  GetIndustryComparisonResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/summary", (_req, res): void => {
  const data = GetSummaryResponse.parse({
    portfolioAvgSavings: 16.5,
    guaranteedMinSavings: 15,
    yzz3AvgSavings: 17,
    yzz4AvgSavings: 16,
    yzz3PeakMonthlyUsageBefore: 1107,
    yzz3PeakMonthlyUsageAfter: 457.3,
    yzz4PeakMonthlyUsageBefore: 3932.67,
    yzz4PeakMonthlyUsageAfter: 3249.96,
    gpmReductionYzz3: 2.52,
    costPerCubicMeter: 3.0,
    totalCustomers: 6,
    totalIndustriesServed: 4,
  });
  res.json(data);
});

router.get("/quarterly", (_req, res): void => {
  const data = GetQuarterlySavingsResponse.parse([
    { period: "Jul-Sep 2024", yzz3: 50, yzz4: 24 },
    { period: "Oct-Dec 2024", yzz3: 27, yzz4: 18 },
    { period: "Jan-Mar 2025", yzz3: -17, yzz4: -4 },
    { period: "Apr-Jun 2025", yzz3: -17, yzz4: 17 },
    { period: "Jul-Sep 2025", yzz3: 5, yzz4: 23 },
    { period: "Oct-Dec 2025", yzz3: 20, yzz4: 13 },
  ]);
  res.json(data);
});

router.get("/water-usage", (_req, res): void => {
  const data = GetWaterUsageResponse.parse([
    { site: "YYZ3", period: "Q3 2024", usageBefore: 1107, usageAfter: 457.3, savingsM3: 649.7, savingsPct: 58.69 },
    { site: "YYZ3", period: "Q4 2024", usageBefore: 800, usageAfter: 565.6, savingsM3: 234.4, savingsPct: 29.27 },
    { site: "YYZ3", period: "Q1 2025", usageBefore: 650, usageAfter: 760.5, savingsM3: -110.5, savingsPct: -17 },
    { site: "YYZ3", period: "Q2 2025", usageBefore: 680, usageAfter: 795.6, savingsM3: -115.6, savingsPct: -17 },
    { site: "YYZ3", period: "Q3 2025", usageBefore: 1050, usageAfter: 997.5, savingsM3: 52.5, savingsPct: 5 },
    { site: "YYZ3", period: "Q4 2025", usageBefore: 820, usageAfter: 656, savingsM3: 164, savingsPct: 20 },
    { site: "YYZ4", period: "Q3 2024", usageBefore: 3932.67, usageAfter: 3249.96, savingsM3: 682.71, savingsPct: 17.36 },
    { site: "YYZ4", period: "Q4 2024", usageBefore: 3200, usageAfter: 3661.8, savingsM3: -461.8, savingsPct: -14.44 },
    { site: "YYZ4", period: "Q1 2025", usageBefore: 2800, usageAfter: 2912, savingsM3: -112, savingsPct: -4 },
    { site: "YYZ4", period: "Q2 2025", usageBefore: 3100, usageAfter: 2573, savingsM3: 527, savingsPct: 17 },
    { site: "YYZ4", period: "Q3 2025", usageBefore: 3800, usageAfter: 2926, savingsM3: 874, savingsPct: 23 },
    { site: "YYZ4", period: "Q4 2025", usageBefore: 3200, usageAfter: 2784, savingsM3: 416, savingsPct: 13 },
  ]);
  res.json(data);
});

router.get("/sites", (_req, res): void => {
  const data = GetSitesResponse.parse([
    {
      id: "yzz3",
      name: "Amazon YYZ3 Fulfillment Center",
      address: "7995 Winston Churchill Blvd, Brampton, Ontario L6Y 5Z4",
      installDate: "June 2024",
      avgSavings: 17,
      totalQuarters: 6,
      quartersWithSavings: 4,
      peakSavings: 50,
      avgGpmBefore: 5.26,
      avgGpmAfter: 2.74,
      status: "active",
    },
    {
      id: "yzz4",
      name: "Amazon YYZ4 Fulfillment Center",
      address: "8050 Heritage Road, Brampton, Ontario L6Y 0C9",
      installDate: "June 2024",
      avgSavings: 16,
      totalQuarters: 6,
      quartersWithSavings: 5,
      peakSavings: 24,
      avgGpmBefore: 4.8,
      avgGpmAfter: 4.03,
      status: "reinstalled",
    },
  ]);
  res.json(data);
});

router.get("/cost-savings", (_req, res): void => {
  const data = GetCostSavingsResponse.parse([
    { facilityType: "Small (Office/Retail)", monthlyUsageM3: 200, annualSavingsAtMin: 1080, annualSavingsAtAvg: 1188, annualWaterSavedM3: 360, paybackMonths: 6 },
    { facilityType: "Medium (Hotel/Industrial)", monthlyUsageM3: 800, annualSavingsAtMin: 4320, annualSavingsAtAvg: 4752, annualWaterSavedM3: 1440, paybackMonths: 5 },
    { facilityType: "Large (Fulfillment/Warehouse)", monthlyUsageM3: 3000, annualSavingsAtMin: 16200, annualSavingsAtAvg: 17820, annualWaterSavedM3: 5400, paybackMonths: 4 },
    { facilityType: "Enterprise (Multi-site)", monthlyUsageM3: 10000, annualSavingsAtMin: 54000, annualSavingsAtAvg: 59400, annualWaterSavedM3: 18000, paybackMonths: 3 },
  ]);
  res.json(data);
});

router.get("/customers", (_req, res): void => {
  const data = GetCustomersResponse.parse([
    {
      id: "amazon-yzz3",
      clientName: "Amazon YYZ3",
      industry: "logistics",
      location: "Brampton, Ontario",
      installDate: "June 2024",
      avgSavingsPct: 17,
      peakSavingsPct: 50,
      monthlyUsageM3: 890,
      annualWaterSavedM3: 1812,
      annualCostSaved: 5436,
      status: "verified",
      highlight: "58.69% reduction in first quarter — 1,107 m³ down to 457 m³ at peak",
      logoLetter: "A",
    },
    {
      id: "amazon-yzz4",
      clientName: "Amazon YYZ4",
      industry: "logistics",
      location: "Brampton, Ontario",
      installDate: "June 2024",
      avgSavingsPct: 16,
      peakSavingsPct: 24,
      monthlyUsageM3: 3161,
      annualWaterSavedM3: 6063,
      annualCostSaved: 18189,
      status: "verified",
      highlight: "Consistent 13–24% savings across 5 of 6 quarters despite valve reinstall",
      logoLetter: "A",
    },
    {
      id: "1hotel",
      clientName: "1 Hotel",
      industry: "hospitality",
      location: "North America",
      installDate: "2024",
      avgSavingsPct: 18,
      peakSavingsPct: 22,
      monthlyUsageM3: 1200,
      annualWaterSavedM3: 2592,
      annualCostSaved: 7776,
      status: "active",
      highlight: "18% average savings — aligns directly with brand sustainability commitments",
      logoLetter: "1",
    },
    {
      id: "hotel-chain",
      clientName: "Boutique Hotel Portfolio",
      industry: "hospitality",
      location: "Texas, USA",
      installDate: "2024",
      avgSavingsPct: 16,
      peakSavingsPct: 21,
      monthlyUsageM3: 750,
      annualWaterSavedM3: 1440,
      annualCostSaved: 4320,
      status: "active",
      highlight: "16% reduction across multiple properties — immediate ROI within 5 months",
      logoLetter: "H",
    },
    {
      id: "forest-charlton",
      clientName: "Forest Charlton",
      industry: "commercial",
      location: "Canada",
      installDate: "2024",
      avgSavingsPct: 15,
      peakSavingsPct: 19,
      monthlyUsageM3: 420,
      annualWaterSavedM3: 756,
      annualCostSaved: 2268,
      status: "active",
      highlight: "15%+ savings achieved — meeting sustainability targets on schedule",
      logoLetter: "F",
    },
    {
      id: "industrial-facility",
      clientName: "Industrial Manufacturing",
      industry: "industrial",
      location: "Ontario, Canada",
      installDate: "2025",
      avgSavingsPct: 17,
      peakSavingsPct: 23,
      monthlyUsageM3: 5000,
      annualWaterSavedM3: 10200,
      annualCostSaved: 30600,
      status: "projected",
      highlight: "High-usage industrial sites see the fastest payback — under 4 months",
      logoLetter: "I",
    },
  ]);
  res.json(data);
});

router.get("/industry-comparison", (_req, res): void => {
  const data = GetIndustryComparisonResponse.parse([
    { industry: "Logistics & Fulfillment", avgSavingsPct: 16.5, avgMonthlyUsageM3: 2025, avgAnnualSavings: 11812, customerCount: 2, icon: "📦" },
    { industry: "Hospitality & Hotels", avgSavingsPct: 17, avgMonthlyUsageM3: 975, avgAnnualSavings: 6048, customerCount: 2, icon: "🏨" },
    { industry: "Commercial", avgSavingsPct: 15, avgMonthlyUsageM3: 420, avgAnnualSavings: 2268, customerCount: 1, icon: "🏢" },
    { industry: "Industrial", avgSavingsPct: 17, avgMonthlyUsageM3: 5000, avgAnnualSavings: 30600, customerCount: 1, icon: "🏭" },
  ]);
  res.json(data);
});

export default router;
