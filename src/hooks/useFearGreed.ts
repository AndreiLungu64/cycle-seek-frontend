import { useQuery } from "@tanstack/react-query";

export interface FearGreedData {
  value: number;
}

export default function useFearGeed() {
  return useQuery<FearGreedData>({
    queryKey: ["fear-greed"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:3500/fear-greed`);
      const fearGreed = await data.json();
      return fearGreed;
    },
    staleTime: 60000,
  });
}
