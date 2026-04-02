import { useQuery } from "@tanstack/react-query";

export interface CryptoPrices {
  BTC: number;
  ETH: number;
  SOL: number;
  BNB: number;
  ADA: number;
  DOT: number;
  AVAX: number;
  XRP: number;
}

export function useConverterPrices() {
  return useQuery<CryptoPrices>({
    queryKey: ["converter-prices"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3500/converter");
      const data = await response.json();
      return data;
    },
    staleTime: 30000,
  });
}
