import { useState, useEffect, useRef, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useGetSummary,
  useGetQuarterlySavings,
  useGetWaterUsage,
  useGetSites,
  useGetCostSavings,
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
  Droplet,
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

  const loading = summaryQuery.isLoading || summaryQuery.isFetching || 
                  quarterlySavingsQuery.isLoading || quarterlySavingsQuery.isFetching ||
                  waterUsageQuery.isLoading || waterUsageQuery.isFetching ||
                  sitesQuery.isLoading || sitesQuery.isFetching ||
                  costSavingsQuery.isLoading || costSavingsQuery.isFetching;

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
              <Droplet className="w-6 h-6" />
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

      </div>
    </div>
  );
}
