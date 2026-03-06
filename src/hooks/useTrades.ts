import { useQuery } from "@tanstack/react-query";

export function useTrades(yearFrom: string) {
  return useQuery({
    queryKey: ["trades"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3500/trades?yearFrom=${yearFrom}`);
      const data = await response.json();
      return data;
    },
    enabled: false,
  });
}
