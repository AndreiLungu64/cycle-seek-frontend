import { type Dispatch, type SetStateAction } from 'react';
import styles from "./AggregationToggle.module.css";
import utils from "../../../../styles/utilities.module.css";

export function AggregationToggle({ count, aggrLevel, isLoading, handleAggrLevel }: { count: number, aggrLevel: string, isLoading: boolean, handleAggrLevel: Dispatch<SetStateAction<string>> }) {
    return <div className={`${styles.aggrToggleWrapper}`}>
        <div>
            <label className={`${styles.label} ${utils.textSm} ${utils.fontBold}`}>DATA AGGREGATION LEVEL</label>
            <div className={`${utils.cardBase} ${styles.btnWrapper}`}>
                <DataSrcBtn text="Individual" aggrLevel={aggrLevel} handleAggrLevel={handleAggrLevel} value="raw_trades" />
                <DataSrcBtn text="Minute" aggrLevel={aggrLevel} handleAggrLevel={handleAggrLevel} value="minute_trades" />
                <DataSrcBtn text="Aggregated" aggrLevel={aggrLevel} handleAggrLevel={handleAggrLevel} value="aggr_trades" />
            </div>
        </div>
        {(!isLoading && count !== 0) && <div className={`${styles.countBadge} ${utils.fontBold}`}>{count} trades found</div>}
    </div>
}

function DataSrcBtn({ text, aggrLevel, handleAggrLevel, value }: { text: string, aggrLevel: string, handleAggrLevel: Dispatch<SetStateAction<string>>, value: string }) {
    const textValMap = new Map([["Individual", "raw_trades"], ["Minute", "minute_trades"], ["Aggregated", "aggr_trades"]]);
    const stateClass = aggrLevel === textValMap.get(text) ? "btnActive" : "btnInactive";
    return <button value={value} className={`${utils.btnBase} ${styles.btn} ${styles[stateClass]}`} onClick={() => handleAggrLevel(value)}>{text}</button>
}