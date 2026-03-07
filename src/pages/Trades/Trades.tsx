import styles from "./Trades.module.css";
import utils from "../../styles/utilities.module.css";
import AggregationToggle from "./components/AggregationToggle";
import DateRangeInputs from "./components/DateRangeInputs";
import TradesList from "./components/TradesList";
import { useState } from "react";
import type { DataRangeType } from "./trades.types";
import { useTrades } from "../../hooks/useTrades";

export function Trades() {
    const [aggrLevel, setAggrLevel] = useState("raw_trades");
    const [dateRange, setDateRange] = useState<DataRangeType>({
        year: { from: "", to: "" },
        month: { from: "", to: "" },
        day: { from: "", to: "" },
    });
    const { data, isLoading, refetch } = useTrades(aggrLevel, dateRange);

    function onQuery() {
        refetch();
    }

    return <div className={styles.tradesWrapper}>
        <div className={` ${utils.cardBase} ${styles.tradesWrapper}`}>
            <AggregationToggle count={data?.count ?? 0} isLoading={isLoading} aggrLevel={aggrLevel} handleAggrLevel={setAggrLevel} />
            <DateRangeInputs onQuery={onQuery} dateRange={dateRange} setDateRange={setDateRange} />
        </div>
        <div className={` ${utils.cardBase} ${styles.tradesWrapper}`}>
            <TradesList trades={data?.sample ?? []} aggrLevel={aggrLevel} />
        </div>
    </div >

}