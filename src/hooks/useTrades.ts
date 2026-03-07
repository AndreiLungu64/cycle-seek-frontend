import { useQuery } from "@tanstack/react-query";
import type { DataRangeType, TradesResponse } from "../pages/Trades/trades.types";

export function useTrades(aggrLevel: string, dateRange: DataRangeType) {
  const params = filterEmptyParams(dateRange);
  params.set("aggrLevel", aggrLevel);
  return useQuery<TradesResponse>({
    queryKey: ["trades", aggrLevel, dateRange],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3500/trades?${params}`);
      const data: TradesResponse = await response.json();
      return data;
    },
    enabled: false,
  });
}

function filterEmptyParams(dateRange: DataRangeType) {
  const params = new URLSearchParams({});
  if (dateRange.year.from) params.set("yearFrom", dateRange.year.from);
  if (dateRange.year.to) params.set("yearTo", dateRange.year.to);
  if (dateRange.month.from) params.set("monthFrom", dateRange.month.from.padStart(2, "0"));
  if (dateRange.month.to) params.set("monthTo", dateRange.month.to.padStart(2, "0"));
  if (dateRange.day.from) params.set("dayFrom", dateRange.day.from);
  if (dateRange.day.to) params.set("dayTo", dateRange.day.to);
  return params;
}
