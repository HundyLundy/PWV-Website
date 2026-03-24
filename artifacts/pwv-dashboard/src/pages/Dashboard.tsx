import { useState, useEffect, useRef, useMemo } from "react";
import logoSrc from "@assets/PWV_perfect_water_favicon_1774323165405.png";
import howItWorksSrc from "@assets/PWV_-_how_valve_works_image_1774323165404.png";
import { useQueryClient } from "@tanstack/react-query";
import {
  useGetSummary,
  useGetQuarterlySavings,
  useGetWaterUsage,
  useGetSites,
  useGetCostSavings,
  useGetCustomers,
  useGetIndustryComparison,
  useGetCarwashSites,
} from "@workspace/api-client-react";
import { CSVLink } from "react-csv";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  RefreshCw,
  ChevronDown,
  Check,
  Sun,
  Moon,
  Download,
  Printer,
  CheckCircle2,
  TrendingDown
} from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CHART_COLORS = {
  blue: "#0079F2",
  purple: "#795EFF",
  green: "#009118",
  red: "#A60808",
  pink: "#ec4899",
};

const DATA_SOURCES: string[] = ["Pilot Verification Data", "Live Sensor Feed"];

const INTERVAL_OPTIONS = [
  { label: "Off", ms: 0 },
  { label: "Every 5 min", ms: 5 * 60 * 1000 },
  { label: "Every 10 min", ms: 10 * 60 * 1000 },
  { label: "Every 30 min", ms: 30 * 60 * 1000 },
];

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "6px",
        padding: "10px 14px",
        border: "1px solid #e0e0e0",
        color: "#1a1a1a",
        fontSize: "13px",
      }}
    >
      <div style={{ marginBottom: "6px", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
        {payload.length === 1 && payload[0].color && payload[0].color !== "#ffffff" && (
          <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "2px", backgroundColor: payload[0].color, flexShrink: 0 }} />
        )}
        {label}
      </div>
      {payload.map((entry: any, index: number) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "3px" }}>
          {payload.length > 1 && entry.color && entry.color !== "#ffffff" && (
            <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "2px", backgroundColor: entry.color, flexShrink: 0 }} />
          )}
          <span style={{ color: "#444" }}>{entry.name}</span>
          <span style={{ marginLeft: "auto", fontWeight: 600 }}>
            {typeof entry.value === "number" ? entry.value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function CustomLegend({ payload }: any) {
  if (!payload || payload.length === 0) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 16px", fontSize: "13px" }}>
      {payload.map((entry: any, index: number) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "2px", backgroundColor: entry.color, flexShrink: 0 }} />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(value);
}

export default function Dashboard() {
  const queryClient = useQueryClient();
  const [isDark, setIsDark] = useState(false);
  
  // Data queries
  const summaryQuery = useGetSummary();
  const quarterlySavingsQuery = useGetQuarterlySavings();
  const waterUsageQuery = useGetWaterUsage();
  const sitesQuery = useGetSites();
  const costSavingsQuery = useGetCostSavings();
  const customersQuery = useGetCustomers();
  const industryComparisonQuery = useGetIndustryComparison();
  const carwashSitesQuery = useGetCarwashSites();

  const loading = summaryQuery.isLoading || summaryQuery.isFetching || 
                  quarterlySavingsQuery.isLoading || quarterlySavingsQuery.isFetching ||
                  waterUsageQuery.isLoading || waterUsageQuery.isFetching ||
                  sitesQuery.isLoading || sitesQuery.isFetching ||
                  costSavingsQuery.isLoading || costSavingsQuery.isFetching ||
                  customersQuery.isLoading || customersQuery.isFetching ||
                  industryComparisonQuery.isLoading || industryComparisonQuery.isFetching ||
                  carwashSitesQuery.isLoading || carwashSitesQuery.isFetching;

  const [isSpinning, setIsSpinning] = useState(false);
  useEffect(() => {
    if (loading) {
      setIsSpinning(true);
    } else {
      const t = setTimeout(() => setIsSpinning(false), 600);
      return () => clearTimeout(t);
    }
  }, [loading]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Refresh controls
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [autoRefreshMs, setAutoRefreshMs] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (autoRefreshMs === 0) return;
    const interval = setInterval(() => {
      queryClient.invalidateQueries();
    }, autoRefreshMs);
    return () => clearInterval(interval);
  }, [autoRefreshMs, queryClient]);

  const handleRefresh = () => {
    queryClient.invalidateQueries();
  };

  const lastRefreshedRaw = summaryQuery.dataUpdatedAt;
  const lastRefreshed = lastRefreshedRaw
    ? (() => {
        const d = new Date(lastRefreshedRaw);
        const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();
        const date = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        return `${time} on ${date}`;
      })()
    : null;

  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "#e5e5e5";
  const tickColor = isDark ? "#98999C" : "#71717a";

  // Chart data
  const quarterlySavings = quarterlySavingsQuery.data || [];
  const waterUsage = waterUsageQuery.data || [];
  const yyz3WaterUsage = waterUsage.filter(w => w.site === "YYZ3");
  const yyz4WaterUsage = waterUsage.filter(w => w.site === "YYZ4");
  const sites = sitesQuery.data || [];
  const costSavings = costSavingsQuery.data || [];
  const summary = summaryQuery.data;
  const customers = customersQuery.data || [];
  const industryComparison = industryComparisonQuery.data || [];
  const carwashSites = carwashSitesQuery.data || [];

  // Table Setup
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = useMemo<ColumnDef<any>[]>(() => [
    { accessorKey: "name", header: "Site Name", cell: ({ row }) => <span className="font-medium">{row.original.name}</span> },
    { accessorKey: "address", header: "Address" },
    { accessorKey: "installDate", header: "Install Date" },
    { 
      accessorKey: "avgSavings", 
      header: "Avg Savings",
      cell: ({ row }) => <span className="text-green-600 font-medium">{row.original.avgSavings}%</span>
    },
    { accessorKey: "peakSavings", header: "Peak Qtr Savings", cell: ({ row }) => `${row.original.peakSavings}%` },
    { accessorKey: "avgGpmBefore", header: "GPM Before", cell: ({ row }) => row.original.avgGpmBefore.toFixed(2) },
    { accessorKey: "avgGpmAfter", header: "GPM After", cell: ({ row }) => row.original.avgGpmAfter.toFixed(2) },
    { accessorKey: "quartersWithSavings", header: "Qtrs w/ Savings", cell: ({ row }) => `${row.original.quartersWithSavings} / ${row.original.totalQuarters}` },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const s = row.original.status;
        return (
          <Badge variant={s === "active" ? "default" : "secondary"} className={s === "active" ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400" : ""}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </Badge>
        );
      }
    }
  ], []);

  const table = useReactTable({
    data: sites,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="min-h-screen bg-background px-5 py-4 pt-[32px] pb-[32px] pl-[24px] pr-[24px]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-1 text-[#0079F2]">
              <img src={logoSrc} alt="Perfect Water Valve logo" className="w-7 h-7 object-contain" />
              <span className="font-bold text-lg tracking-tight">Perfect Water Valve</span>
              <span className="text-sm border-l border-current pl-2 ml-1 opacity-80 font-medium">Guaranteed 15% Water Savings</span>
            </div>
            <h1 className="font-bold text-[32px] mt-2">Smart Valve Sales Dashboard</h1>
            <p className="text-muted-foreground mt-1.5 text-[15px]">Amazon Canada Smart Valve Pilot — Verified Performance Data</p>
            
            {DATA_SOURCES.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mt-3">
                <span className="text-[12px] text-muted-foreground shrink-0">Data Sources:</span>
                {DATA_SOURCES.map((source) => (
                  <span
                    key={source}
                    className="text-[12px] font-bold rounded px-2 py-0.5 truncate print:!bg-[rgb(229,231,235)] print:!text-[rgb(75,85,99)]"
                    title={source}
                    style={{ maxWidth: "20ch", backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgb(229, 231, 235)", color: isDark ? "#c8c9cc" : "rgb(75, 85, 99)" }}
                  >
                    {source}
                  </span>
                ))}
              </div>
            )}
            {lastRefreshed && <p className="text-[12px] text-muted-foreground mt-2">Last refresh: {lastRefreshed}</p>}
          </div>

          <div className="flex items-center gap-3 pt-2 print:hidden">
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center rounded-[6px] overflow-hidden h-[26px] text-[12px] border border-transparent" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }}>
                <button onClick={handleRefresh} disabled={loading} className="flex items-center gap-1 px-2 h-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors disabled:opacity-50">
                  <RefreshCw className={`w-3.5 h-3.5 ${isSpinning ? "animate-spin" : ""}`} />
                  Refresh
                </button>
                <div className="w-px h-4 shrink-0" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }} />
                <button onClick={() => setDropdownOpen((o) => !o)} className="flex items-center justify-center px-1.5 h-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 top-[30px] w-40 bg-popover border border-border rounded-md shadow-md z-50 py-1 text-sm">
                  {INTERVAL_OPTIONS.map((opt) => (
                    <button
                      key={opt.label}
                      className="w-full text-left px-3 py-1.5 hover:bg-accent hover:text-accent-foreground flex items-center justify-between"
                      onClick={() => { setAutoRefreshMs(opt.ms); setDropdownOpen(false); }}
                    >
                      {opt.label}
                      {autoRefreshMs === opt.ms && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => window.print()} disabled={loading} className="flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-colors disabled:opacity-50" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }} aria-label="Export as PDF">
              <Printer className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setIsDark((d) => !d)} className="flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-colors" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }} aria-label="Toggle dark mode">
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              {loading || !summary ? (
                <><Skeleton className="h-4 w-24 mb-2" /><Skeleton className="h-8 w-32" /><Skeleton className="h-3 w-40 mt-2" /></>
              ) : (
                <>
                  <p className="text-sm font-medium text-muted-foreground">Portfolio Avg Savings</p>
                  <p className="text-3xl font-bold mt-2" style={{ color: CHART_COLORS.blue }}>{summary.portfolioAvgSavings}%</p>
                  <p className="text-xs text-muted-foreground mt-2">Guaranteed min: {summary.guaranteedMinSavings}%</p>
                </>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              {loading || !summary ? (
                <><Skeleton className="h-4 w-24 mb-2" /><Skeleton className="h-8 w-32" /><Skeleton className="h-3 w-40 mt-2" /></>
              ) : (
                <>
                  <p className="text-sm font-medium text-muted-foreground">YYZ3 Performance</p>
                  <p className="text-3xl font-bold mt-2 text-green-600 dark:text-green-500">{summary.yzz3AvgSavings}%</p>
                  <p className="text-xs text-muted-foreground mt-2">Amazon Fulfillment Center</p>
                </>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              {loading || !summary ? (
                <><Skeleton className="h-4 w-24 mb-2" /><Skeleton className="h-8 w-32" /><Skeleton className="h-3 w-40 mt-2" /></>
              ) : (
                <>
                  <p className="text-sm font-medium text-muted-foreground">YYZ4 Performance</p>
                  <p className="text-3xl font-bold mt-2 text-green-600 dark:text-green-500">{summary.yzz4AvgSavings}%</p>
                  <p className="text-xs text-muted-foreground mt-2">Amazon Fulfillment Center</p>
                </>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              {loading || !summary ? (
                <><Skeleton className="h-4 w-24 mb-2" /><Skeleton className="h-8 w-32" /><Skeleton className="h-3 w-40 mt-2" /></>
              ) : (
                <>
                  <p className="text-sm font-medium text-muted-foreground">Peak Reduction</p>
                  <p className="text-3xl font-bold mt-2" style={{ color: CHART_COLORS.blue }}>58.69%</p>
                  <p className="text-xs text-muted-foreground mt-2">YYZ3 Q3 2024</p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <Card>
            <CardHeader className="px-5 pt-5 pb-2 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-base">Quarterly Savings Comparison</CardTitle>
                <CardDescription className="text-xs mt-1">YYZ3 vs YYZ4 savings over 6 quarters</CardDescription>
              </div>
              {!loading && quarterlySavings.length > 0 && (
                <CSVLink data={quarterlySavings} filename="quarterly-savings.csv" className="print:hidden flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-colors hover:opacity-80" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }} aria-label="Export chart data as CSV">
                  <Download className="w-3.5 h-3.5" />
                </CSVLink>
              )}
            </CardHeader>
            <CardContent className="p-5 pt-2">
              {loading ? <Skeleton className="w-full h-[320px]" /> : (
                <ResponsiveContainer width="100%" height={320} debounce={0}>
                  <BarChart data={quarterlySavings} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis dataKey="period" tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={false} isAnimationActive={false} />
                    <Legend content={<CustomLegend />} wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar dataKey="yzz3" name="YYZ3 Savings" fill={CHART_COLORS.blue} fillOpacity={0.85} activeBar={{ fillOpacity: 1 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                    <Bar dataKey="yzz4" name="YYZ4 Savings" fill={CHART_COLORS.purple} fillOpacity={0.85} activeBar={{ fillOpacity: 1 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="px-5 pt-5 pb-2 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-base">Cost Savings Projections</CardTitle>
                <CardDescription className="text-xs mt-1">Annual savings by facility tier</CardDescription>
              </div>
              {!loading && costSavings.length > 0 && (
                <CSVLink data={costSavings} filename="cost-savings.csv" className="print:hidden flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-colors hover:opacity-80" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }} aria-label="Export chart data as CSV">
                  <Download className="w-3.5 h-3.5" />
                </CSVLink>
              )}
            </CardHeader>
            <CardContent className="p-5 pt-2">
              {loading ? <Skeleton className="w-full h-[320px]" /> : (
                <ResponsiveContainer width="100%" height={320} debounce={0}>
                  <BarChart data={costSavings} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis dataKey="facilityType" tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={false} isAnimationActive={false} />
                    <Legend content={<CustomLegend />} wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar dataKey="annualSavingsAtMin" name="Min Guaranteed (15%)" fill={CHART_COLORS.green} fillOpacity={0.85} activeBar={{ fillOpacity: 1 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                    <Bar dataKey="annualSavingsAtAvg" name="Avg Achieved (16.5%)" fill={CHART_COLORS.blue} fillOpacity={0.85} activeBar={{ fillOpacity: 1 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 - Before/After Water Usage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader className="px-5 pt-5 pb-2 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-base">YYZ3 Water Usage (Before/After)</CardTitle>
                <CardDescription className="text-xs mt-1">Cubic meters per quarter</CardDescription>
              </div>
              {!loading && yyz3WaterUsage.length > 0 && (
                <CSVLink data={yyz3WaterUsage} filename="yyz3-water-usage.csv" className="print:hidden flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-colors hover:opacity-80" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }} aria-label="Export chart data as CSV">
                  <Download className="w-3.5 h-3.5" />
                </CSVLink>
              )}
            </CardHeader>
            <CardContent className="p-5 pt-2">
              {loading ? <Skeleton className="w-full h-[280px]" /> : (
                <ResponsiveContainer width="100%" height={280} debounce={0}>
                  <BarChart data={yyz3WaterUsage} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis dataKey="period" tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={(v) => `${v}`} tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={false} isAnimationActive={false} />
                    <Legend content={<CustomLegend />} wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar dataKey="usageBefore" name="Usage Before (m³)" fill={CHART_COLORS.red} fillOpacity={0.7} activeBar={{ fillOpacity: 0.9 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                    <Bar dataKey="usageAfter" name="Usage After (m³)" fill={CHART_COLORS.blue} fillOpacity={0.85} activeBar={{ fillOpacity: 1 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="px-5 pt-5 pb-2 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-base">YYZ4 Water Usage (Before/After)</CardTitle>
                <CardDescription className="text-xs mt-1">Cubic meters per quarter</CardDescription>
              </div>
              {!loading && yyz4WaterUsage.length > 0 && (
                <CSVLink data={yyz4WaterUsage} filename="yyz4-water-usage.csv" className="print:hidden flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-colors hover:opacity-80" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }} aria-label="Export chart data as CSV">
                  <Download className="w-3.5 h-3.5" />
                </CSVLink>
              )}
            </CardHeader>
            <CardContent className="p-5 pt-2">
              {loading ? <Skeleton className="w-full h-[280px]" /> : (
                <ResponsiveContainer width="100%" height={280} debounce={0}>
                  <BarChart data={yyz4WaterUsage} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis dataKey="period" tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={(v) => `${v}`} tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={false} isAnimationActive={false} />
                    <Legend content={<CustomLegend />} wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar dataKey="usageBefore" name="Usage Before (m³)" fill={CHART_COLORS.red} fillOpacity={0.7} activeBar={{ fillOpacity: 0.9 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                    <Bar dataKey="usageAfter" name="Usage After (m³)" fill={CHART_COLORS.blue} fillOpacity={0.85} activeBar={{ fillOpacity: 1 }} radius={[3, 3, 0, 0]} isAnimationActive={false} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Site Details Table */}
        <Card className="mb-6">
          <CardHeader className="px-5 pt-5 pb-4">
            <CardTitle className="text-base">Site Performance Details</CardTitle>
            <CardDescription className="text-sm">Summary of installations and metrics at Amazon Fulfillment Centers</CardDescription>
          </CardHeader>
          <CardContent className="p-0 border-t border-border">
            {loading ? (
               <div className="p-5 space-y-3">
                 <Skeleton className="h-10 w-full" />
                 {[...Array(2)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
               </div>
            ) : (
              <Table>
                <TableHeader className="bg-muted/50">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id} onClick={header.column.getToggleSortingHandler()} className="h-11 px-5 cursor-pointer text-xs font-medium">
                          <div className="flex items-center gap-1.5">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{ asc: " 🔼", desc: " 🔽" }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} className="h-14">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="px-5 text-sm">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Key Findings Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full text-blue-600 dark:text-blue-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-lg mb-1">Exceeded Contractual Projections</h3>
                  <p className="text-blue-800/80 dark:text-blue-200/80 text-sm leading-relaxed">
                    Both YYZ3 and YYZ4 sites exceeded the contractual 15% savings projection, achieving 16% to 17% overall average savings. Savings persisted robustly despite operational variability including staffing shifts, varying throughput, and seasonal demand changes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-900/30">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-600 dark:text-green-400 shrink-0">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 text-lg mb-1">Significant Flow & Volume Reductions</h3>
                  <p className="text-green-800/80 dark:text-green-200/80 text-sm leading-relaxed">
                    The Smart Valve installation at YYZ3 showed a dramatic 2.52 gal/min reduction in sustained water usage. This translated into peak monthly usage plummeting from an initial 1,107 m³ down to just 457.30 m³.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="mt-8 mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold">How It Works</h2>
            <p className="text-sm text-muted-foreground">Smart Valve installed on the customer's side of the meter — you only pay for water, not air</p>
          </div>
          <Card>
            <CardContent className="p-6">
              <img
                src={howItWorksSrc}
                alt="How the Smart Valve connects to the water system — before and after diagram"
                className="w-full max-w-3xl mx-auto block rounded"
                style={{ filter: isDark ? "brightness(0.9)" : "none" }}
              />
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                <div className="rounded-lg p-3" style={{ backgroundColor: isDark ? "rgba(0,121,242,0.15)" : "#EFF6FF" }}>
                  <p className="font-semibold text-[#0079F2] mb-1">The Problem</p>
                  <p className="text-muted-foreground">Standard meters register turbulent water with air bubbles — billing customers for compressed air, not just water.</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: isDark ? "rgba(0,145,24,0.15)" : "#F0FDF4" }}>
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-1">The Solution</p>
                  <p className="text-muted-foreground">Smart Valve™ maintains city pressure upstream, eliminating air bubbles before the meter reads flow. You pay only for water.</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: isDark ? "rgba(0,121,242,0.15)" : "#EFF6FF" }}>
                  <p className="font-semibold text-[#0079F2] mb-1">The Result</p>
                  <p className="text-muted-foreground">Guaranteed ≥15% reduction in metered water consumption — verified across all commercial and industrial pilot sites.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Portfolio Section */}
        <div className="mt-8 mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Customer Portfolio</h2>
            <p className="text-sm text-muted-foreground">Smart Valve results across industries</p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-5 w-2/3" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                    <Skeleton className="h-4 w-full mb-4" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {customers.map((customer) => {
                const colors: Record<string, { bg: string, text: string, avatar: string }> = {
                  logistics: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300", avatar: "bg-blue-600" },
                  hospitality: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-800 dark:text-purple-300", avatar: "bg-purple-600" },
                  commercial: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-800 dark:text-green-300", avatar: "bg-green-600" },
                  industrial: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300", avatar: "bg-orange-600" },
                  retail: { bg: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-800 dark:text-pink-300", avatar: "bg-pink-600" },
                  municipal: { bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-800 dark:text-teal-300", avatar: "bg-teal-600" },
                  automotive: { bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-800 dark:text-cyan-300", avatar: "bg-cyan-600" },
                };
                const theme = colors[customer.industry.toLowerCase()] || { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-800 dark:text-gray-300", avatar: "bg-gray-600" };
                
                const statusColors: Record<string, string> = {
                  verified: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                  active: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  projected: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                };

                return (
                  <Card key={customer.id}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${theme.avatar}`}>
                            {customer.logoLetter}
                          </div>
                          <div>
                            <h3 className="font-semibold text-base leading-tight">{customer.clientName}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">{customer.location}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className={statusColors[customer.status] || ""}>
                          {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <Badge variant="outline" className={`mb-2 border-transparent ${theme.bg} ${theme.text}`}>
                          {customer.industry.charAt(0).toUpperCase() + customer.industry.slice(1)}
                        </Badge>
                        <p className="text-sm italic text-muted-foreground">"{customer.highlight}"</p>
                      </div>

                      <div className="space-y-2 text-sm border-t border-border pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Avg Savings</span>
                          <span className="font-medium">{customer.avgSavingsPct}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Peak Savings</span>
                          <span className="font-medium">{customer.peakSavingsPct}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Annual Cost Saved</span>
                          <span className="font-medium text-green-600 dark:text-green-500">
                            {formatCurrency(customer.annualCostSaved)}
                            {customer.currencyNote && (
                              <span className="ml-1 text-[10px] px-1 py-0 bg-muted text-muted-foreground rounded font-normal">{customer.currencyNote}</span>
                            )}
                          </span>
                        </div>
                      </div>

                      {customer.testimonial && (
                        <div className="mt-4 pt-3 border-t border-border">
                          <div className="rounded-md p-3" style={{ borderLeft: "3px solid #0079F2", backgroundColor: isDark ? "rgba(0,121,242,0.08)" : "rgba(0,121,242,0.04)" }}>
                            <span className="text-lg leading-none text-[#0079F2] font-serif select-none">"</span>
                            <p className="text-xs italic text-muted-foreground mt-0.5 leading-relaxed">{customer.testimonial}</p>
                            <p className="text-[11px] font-medium mt-2 text-foreground/70">— {customer.testimonialAuthor}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Caliber Car Wash Section */}
        <div className="mt-8 mb-6">
          <div className="mb-4 flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">Caliber Car Wash — Case Study Spotlight</h2>
                <Badge variant="default" className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white border-transparent">New</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">M&V verified results across 5-site Southeast USA portfolio · Weighted average: 23% savings</p>
            </div>
          </div>

          <Card className="mb-4 border-[#0891b2]/20 dark:border-[#0891b2]/30 bg-gradient-to-r from-transparent to-[#0891b2]/5 dark:to-[#0891b2]/10">
            <CardContent className="p-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-border/50">
                <div className="px-2">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Active Portfolio</p>
                  <p className="text-2xl font-bold text-[#0891b2]">5 Sites</p>
                </div>
                <div className="px-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Weighted Avg Savings</p>
                  <p className="text-2xl font-bold text-[#0891b2]">23%</p>
                </div>
                <div className="px-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Est. Annual Water Saved</p>
                  <p className="text-2xl font-bold text-[#0891b2]">4,120 m³</p>
                </div>
                <div className="px-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Est. Annual Cost Saved</p>
                  <p className="text-2xl font-bold text-[#0891b2]">$12,360</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="h-11 px-5 text-xs font-medium">Site</TableHead>
                    <TableHead className="h-11 px-5 text-xs font-medium">Install Date</TableHead>
                    <TableHead className="h-11 px-5 text-xs font-medium">Savings</TableHead>
                    <TableHead className="h-11 px-5 text-xs font-medium text-right">Monthly Usage (m³)</TableHead>
                    <TableHead className="h-11 px-5 text-xs font-medium text-right">Ann. Cost Saved</TableHead>
                    <TableHead className="h-11 px-5 text-xs font-medium">Status</TableHead>
                    <TableHead className="h-11 px-5 text-xs font-medium">Note</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    [...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell className="px-5"><Skeleton className="h-8 w-32" /></TableCell>
                        <TableCell className="px-5"><Skeleton className="h-4 w-20" /></TableCell>
                        <TableCell className="px-5"><Skeleton className="h-6 w-12" /></TableCell>
                        <TableCell className="px-5"><Skeleton className="h-4 w-24 ml-auto" /></TableCell>
                        <TableCell className="px-5"><Skeleton className="h-4 w-20 ml-auto" /></TableCell>
                        <TableCell className="px-5"><Skeleton className="h-6 w-20" /></TableCell>
                        <TableCell className="px-5"><Skeleton className="h-4 w-32" /></TableCell>
                      </TableRow>
                    ))
                  ) : (
                    carwashSites.map((site) => (
                      <TableRow key={site.id} className="h-14">
                        <TableCell className="px-5 py-3">
                          <div className="font-medium text-sm">{site.siteName}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{site.address}</div>
                        </TableCell>
                        <TableCell className="px-5 py-3 text-sm">{site.installDate}</TableCell>
                        <TableCell className="px-5 py-3">
                          <Badge variant="secondary" className={
                            site.savingsPct >= 20 ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                            site.savingsPct >= 15 ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" :
                            "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                          }>
                            {site.savingsPct}%
                          </Badge>
                        </TableCell>
                        <TableCell className="px-5 py-3 text-sm">
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-muted-foreground">{site.monthlyUsageBeforeM3}</span>
                            <span className="text-muted-foreground/50">→</span>
                            <span className="font-medium">{site.monthlyUsageAfterM3}</span>
                          </div>
                        </TableCell>
                        <TableCell className="px-5 py-3 text-sm font-medium text-green-600 dark:text-green-500 text-right">
                          {formatCurrency(site.annualCostSaved)}
                        </TableCell>
                        <TableCell className="px-5 py-3">
                          <Badge variant="outline" className={
                            site.status === "verified" ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800" :
                            site.status === "limited-data" ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800" :
                            "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
                          }>
                            {site.status === "limited-data" ? "Limited Data" : site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-5 py-3">
                          {site.note ? (
                            <span className="text-xs italic text-muted-foreground max-w-[150px] truncate inline-block align-bottom" title={site.note}>
                              {site.note}
                            </span>
                          ) : (
                            <span className="text-muted-foreground/50">-</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Savings by Industry Section */}
        <div className="mt-8 mb-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">Savings by Industry</h2>
              <p className="text-sm text-muted-foreground">Average verified reduction across facility types</p>
            </div>
            {!loading && industryComparison.length > 0 && (
              <CSVLink data={industryComparison} filename="industry-savings.csv" className="print:hidden flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-colors hover:opacity-80" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F0F1F2", color: isDark ? "#c8c9cc" : "#4b5563" }} aria-label="Export chart data as CSV">
                <Download className="w-3.5 h-3.5" />
              </CSVLink>
            )}
          </div>

          <Card className="mb-4">
            <CardContent className="p-5">
              {loading ? (
                <Skeleton className="w-full h-[300px]" />
              ) : (
                <ResponsiveContainer width="100%" height={300} debounce={0}>
                  <BarChart data={industryComparison} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={true} vertical={false} />
                    <XAxis type="number" tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} />
                    <YAxis dataKey="industry" type="category" tick={{ fontSize: 12, fill: tickColor }} stroke={tickColor} axisLine={false} tickLine={false} width={100} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }} isAnimationActive={false} />
                    <Legend content={<CustomLegend />} wrapperStyle={{ paddingTop: "20px" }} />
                    <ReferenceLine x={15} stroke="#9ca3af" strokeDasharray="3 3" label={{ position: 'top', value: 'Guaranteed Min. (15%)', fill: tickColor, fontSize: 12 }} />
                    <Bar dataKey="avgSavingsPct" name="Avg Savings (%)" fill={CHART_COLORS.blue} fillOpacity={0.85} activeBar={{ fillOpacity: 1 }} radius={[0, 3, 3, 0]} isAnimationActive={false} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Card key={i}><CardContent className="p-4"><Skeleton className="h-12 w-full" /></CardContent></Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {industryComparison.map((ind) => (
                <Card key={ind.industry}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="text-2xl shrink-0">{ind.icon}</div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-medium text-muted-foreground truncate">{ind.industry}</p>
                      <p className="text-sm font-bold truncate text-green-600 dark:text-green-500">{formatCurrency(ind.avgAnnualSavings)}/yr</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{ind.customerCount} sites</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
