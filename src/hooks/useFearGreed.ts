import { useQuery } from "@tanstack/react-query";

export interface FearGreedData {
  value: number;
}

export default function useFearGeed() {
  return useQuery<FearGreedData>({
    queryKey: ["fear-greed"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3500/fear-greed`);
      const data = await response.json();
      return data;
    },
    staleTime: 60000,
  });
}
