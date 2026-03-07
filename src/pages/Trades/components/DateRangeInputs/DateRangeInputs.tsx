import styles from "./DateRangeInputs.module.css"
import utils from "../../../../styles/utilities.module.css";
import type { DataRangeType } from "../../trades.types";
import { type Dispatch } from 'react';

export function DateRangeInputs({ onQuery, dateRange, setDateRange }: { onQuery: () => void, dateRange: DataRangeType, setDateRange: Dispatch<React.SetStateAction<DataRangeType>> }) {
    return <div className={styles.inputsRowWrapper}>
        <InputsPair label="YEAR RANGE" type="number" value={dateRange.year} onChange={val => setDateRange(prev => ({ ...prev, year: val }))} />
        <InputsPair label="MONTH RANGE" type="number" value={dateRange.month} onChange={val => setDateRange(prev => ({ ...prev, month: val }))} />
        <InputsPair label="DAY RANGE" type="number" value={dateRange.day} onChange={val => setDateRange(prev => ({ ...prev, day: val }))} />
        <BtnQuery onQuery={onQuery} />
    </div>
}

function InputsPair({ label, type, value, onChange }: { label: string, type: string, value: { from: string, to: string }, onChange: (val: { from: string, to: string }) => void }) {
    return <div >
        <label className={`${styles.label} ${utils.textSm} ${utils.fontBold}`}>{label}</label>
        <div className={`${styles.inputsWrapper}`}>
            <input type={type} onChange={e => onChange({ ...value, from: e.target.value })} value={value.from}></input>
            <p className={styles.lightGray}>-</p>
            <input type={type} onChange={e => onChange({ ...value, to: e.target.value })} value={value.to}></input>
        </div >
    </div >
}

function BtnQuery({ onQuery }: { onQuery: () => void }) {
    return <button onClick={onQuery} className={`${utils.btnBase} ${utils.textWhite} ${utils.textPurple} ${styles.btnQuery}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span className={`${utils.fontBold} ${utils.textWhite}`}>Run Query</span>
    </button>
}