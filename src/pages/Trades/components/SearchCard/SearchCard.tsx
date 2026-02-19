import styles from "./SearchCard.module.css"
import utils from "../../../../styles/utilities.module.css"
import { useState, type Dispatch, type SetStateAction } from 'react'
import InputPair from "../InputPair";

export function SearchCard() {
    return <div className={`${utils.cardBase} ${styles.cardWrapper}`}>
        <DataSrcSelector />
        <div className={styles.inputsRowWrapper}>
            <InputPair label="YEAR RANGE" type="number" />
            <InputPair label="MONTH RANGE" type="number" />
            <InputPair label="DAY RANGE" type="number" />
            <BtnQuery />
        </div>
    </ div>
}

export function DataSrcSelector() {
    const [active, setActive] = useState("Individual");
    return <div>
        <label className={`${styles.label} ${utils.textSm} ${utils.fontBold}`}>DATA AGGREGATION LEVEL</label>
        <div className={`${utils.cardBase} ${styles.dataSrcBtnWrapper}`}>
            <DataSrcBtn text="Individual" activeBtn={active} onActive={setActive} />
            <DataSrcBtn text="Minute" activeBtn={active} onActive={setActive} />
            <DataSrcBtn text="Aggregated" activeBtn={active} onActive={setActive} />
        </div>
    </div>
}

function DataSrcBtn({ text, activeBtn, onActive }: { text: string, activeBtn: string, onActive: Dispatch<SetStateAction<string>> }) {
    const stateClass = text === activeBtn ? "active" : "inactive";
    return <button className={`${utils.btnBase} ${styles.btnDataSrc} ${styles[stateClass]}`} onClick={() => onActive(text)}>{text}</button>
}

function BtnQuery() {
    return <button className={`${utils.btnBase} ${utils.textWhite} ${utils.textPurple} ${styles.btnQuery}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span className={`${utils.fontBold} ${utils.textWhite}`}>Run Query</span>
    </button>
}