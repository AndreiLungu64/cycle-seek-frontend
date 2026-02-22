import { useQuery } from "@tanstack/react-query";

export function useLiquidation() {
  return useQuery({
    queryKey: ["liquidation"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3500/liquidation`);
      const data = await response.json();
      return data;
    },
    staleTime: 60000,
  });
}
