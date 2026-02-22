import { useQuery } from "@tanstack/react-query";

interface RsiData {
  rsi: number;
}

export function useRsi() {
  return useQuery<RsiData>({
    queryKey: ["rsi"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:3500/rsi`);
      const rsi = await data.json();
      return rsi;
    },
    staleTime: 5 * 60 * 1000,
  });
}
