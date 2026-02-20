import { useState, type Dispatch, type SetStateAction } from 'react';
import styles from "./AggregationToggle.module.css";
import utils from "../../../../styles/utilities.module.css";

export function AggregationToggle() {
    const [active, setActive] = useState("Individual");
    return <div>
        <label className={`${styles.label} ${utils.textSm} ${utils.fontBold}`}>DATA AGGREGATION LEVEL</label>
        <div className={`${utils.cardBase} ${styles.btnWrapper}`}>
            <DataSrcBtn text="Individual" activeBtn={active} onActive={setActive} />
            <DataSrcBtn text="Minute" activeBtn={active} onActive={setActive} />
            <DataSrcBtn text="Aggregated" activeBtn={active} onActive={setActive} />
        </div>
    </div>
}

function DataSrcBtn({ text, activeBtn, onActive }: { text: string, activeBtn: string, onActive: Dispatch<SetStateAction<string>> }) {
    const stateClass = text === activeBtn ? "btnActive" : "btnInactive";
    return <button className={`${utils.btnBase} ${styles.btn} ${styles[stateClass]}`} onClick={() => onActive(text)}>{text}</button>
}