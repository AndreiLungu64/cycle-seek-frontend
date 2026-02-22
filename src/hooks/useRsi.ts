import { useQuery } from "@tanstack/react-query";

interface RsiData {
  rsi: number;
}

export function useRsi() {
  return useQuery<RsiData>({
    queryKey: ["rsi"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3500/rsi`);
      const data = await response.json();
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });
}
