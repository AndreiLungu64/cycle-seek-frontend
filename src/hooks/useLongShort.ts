import { useQuery } from "@tanstack/react-query";

export function useLongShort() {
  return useQuery({
    queryKey: ["long-short"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3500/long-short`);
      const data = await response.json();
      return data;
    },
  });
}
