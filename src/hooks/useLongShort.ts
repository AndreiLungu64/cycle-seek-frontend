import { useQuery } from "@tanstack/react-query";

export function useLongShort() {
  return useQuery({
    queryKey: ["long-short"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:3500/long-short`);
      const longShort = await data.json();
      return longShort;
    },
  });
}
