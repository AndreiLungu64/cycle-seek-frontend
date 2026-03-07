export type DataRangeType = {
  year: { from: string; to: string };
  month: { from: string; to: string };
  day: { from: string; to: string };
};

export interface RawTrade {
  trade_id: number;
  trade_date: string;
  year_month: string;
  price: string;
  quantity: string;
  quote_volume: string;
  timestamp_ms: number;
  is_buyer_maker: boolean;
  calendar_day: number;
  trade_hour: number;
  trade_minute: number;
}

export interface MinuteTrade {
  trade_date: string;
  year_month: string;
  calendar_day: number;
  trade_hour: number;
  trade_minute: number;
  total_buy_volume: string;
  total_sell_volume: string;
  trades_count: number;
  entry_price: string;
  exit_price: string;
  highest_price: string;
  lowest_price: string;
}

export interface AggrTrade {
  trade_date: string;
  year_month: string;
  calendar_day: number;
  trade_hour: number;
  start_minute: number;
  end_minute: number;
  window_size: number;
  buy_pressure_ratio: string;
  price_change: string;
  trades_count: number;
  entry_price: string;
  exit_price: string;
  highest_price: string;
  lowest_price: string;
}

export type Trade = RawTrade | MinuteTrade | AggrTrade;

export interface TradesResponse {
  count: number;
  sample: Trade[];
}
