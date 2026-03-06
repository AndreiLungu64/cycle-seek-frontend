import styles from "./Trades.module.css";
import utils from "../../styles/utilities.module.css";
import AggregationToggle from "./components/AggregationToggle";
import DateRangeInputs from "./components/DateRangeInputs";
import { useState } from "react";
import type { dataRangeType } from "./trades.types";

export function Trades() {
    const [aggrLevel, setAggrLevel] = useState("raw_trades");
    const [dateRange, setDateRange] = useState<dataRangeType>({
        year: { from: "", to: "" },
        month: { from: "", to: "" },
        day: { from: "", to: "" },
    });

    return <div className={` ${utils.cardBase} ${styles.tradesWrapper}`}>
        <AggregationToggle aggrLevel={aggrLevel} handleAggrLevel={setAggrLevel} />
        <DateRangeInputs dateRange={dateRange} setDateRange={setDateRange} />
    </div>

}