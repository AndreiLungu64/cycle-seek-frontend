import { useQuery } from "@tanstack/react-query";

export default function useBtcQuotes() {
  return useQuery({
    queryKey: ["quote"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:3500/quote`);
      const quote = await data.json();
      return quote;
    },
    staleTime: 60000,
  });
}
