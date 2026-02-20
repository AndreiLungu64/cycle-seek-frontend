import styles from "./Trades.module.css";
import utils from "../../styles/utilities.module.css";
import AggregationToggle from "./components/AggregationToggle";
import DateRangeInputs from "./components/DateRangeInputs";

export function Trades() {
    return <div className={` ${utils.cardBase} ${styles.tradesWrapper}`}>
        <AggregationToggle />
        <DateRangeInputs />
    </div>

}