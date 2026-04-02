import { useQuery } from "@tanstack/react-query";

export interface HeatmapCell {
  calendar_day: number;
  trade_hour: number;
  signal_count: string;
}

export function useSignalHeatmap() {
  return useQuery<HeatmapCell[]>({
    queryKey: ["signal-heatmap"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3500/signals/heatmap");
      const data = await response.json();
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });
}
