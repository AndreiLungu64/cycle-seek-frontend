import styles from "./TradesList.module.css";
import type { Trade, RawTrade, MinuteTrade, AggrTrade } from "../../trades.types";

interface TradesListProps {
    trades: Trade[];
    aggrLevel: string;
}

function RawTradesTable({ trades }: { trades: RawTrade[] }) {
    return (
        <table className={styles.tradesTable}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Min</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Quote Vol</th>
                    <th>Side</th>
                </tr>
            </thead>
            <tbody>
                {trades.map((trade) => (
                    <tr key={trade.trade_id}>
                        <td>{trade.trade_date}</td>
                        <td>{trade.trade_hour}</td>
                        <td>{trade.trade_minute}</td>
                        <td>{trade.price}</td>
                        <td>{trade.quantity}</td>
                        <td>{trade.quote_volume}</td>
                        <td className={trade.is_buyer_maker ? styles.sell : styles.buy}>
                            {trade.is_buyer_maker ? "Sell" : "Buy"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function MinuteTradesTable({ trades }: { trades: MinuteTrade[] }) {
    return (
        <table className={styles.tradesTable}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Min</th>
                    <th>Entry</th>
                    <th>Exit</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Buy Vol</th>
                    <th>Sell Vol</th>
                    <th>Trades</th>
                </tr>
            </thead>
            <tbody>
                {trades.map((trade) => (
                    <tr key={`${trade.year_month}-${trade.calendar_day}-${trade.trade_hour}-${trade.trade_minute}`}>
                        <td>{trade.trade_date}</td>
                        <td>{trade.trade_hour}</td>
                        <td>{trade.trade_minute}</td>
                        <td>{trade.entry_price}</td>
                        <td>{trade.exit_price}</td>
                        <td>{trade.highest_price}</td>
                        <td>{trade.lowest_price}</td>
                        <td>{trade.total_buy_volume}</td>
                        <td>{trade.total_sell_volume}</td>
                        <td>{trade.trades_count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function AggrTradesTable({ trades }: { trades: AggrTrade[] }) {
    return (
        <table className={styles.tradesTable}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Window</th>
                    <th>Entry</th>
                    <th>Exit</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Buy Pressure</th>
                    <th>Price Change</th>
                    <th>Trades</th>
                </tr>
            </thead>
            <tbody>
                {trades.map((trade) => (
                    <tr key={`${trade.trade_date}-${trade.trade_hour}-${trade.window_size}-${trade.start_minute}-${trade.end_minute}`}>
                        <td>{trade.trade_date}</td>
                        <td>{trade.trade_hour}</td>
                        <td>{trade.start_minute}–{trade.end_minute} ({trade.window_size}m)</td>
                        <td>{trade.entry_price}</td>
                        <td>{trade.exit_price}</td>
                        <td>{trade.highest_price}</td>
                        <td>{trade.lowest_price}</td>
                        <td>{trade.buy_pressure_ratio}</td>
                        <td>{trade.price_change}</td>
                        <td>{trade.trades_count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default function TradesList({ trades, aggrLevel }: TradesListProps) {
    if (!trades.length) {
        return <p className={styles.emptyState}>No trades to display</p>;
    }

    return (
        <div className={styles.tableWrapper}>
            {aggrLevel === "raw_trades" && (
                <RawTradesTable trades={trades as RawTrade[]} />
            )}
            {aggrLevel === "minute_trades" && (
                <MinuteTradesTable trades={trades as MinuteTrade[]} />
            )}
            {aggrLevel === "aggr_trades" && (
                <AggrTradesTable trades={trades as AggrTrade[]} />
            )}
        </div>
    );
}
