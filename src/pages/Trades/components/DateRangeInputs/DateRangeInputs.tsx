import styles from "./DateRangeInputs.module.css"
import utils from "../../../../styles/utilities.module.css";
import { useState } from "react";

// const range = {
//     year: {
//         from: "",
//         to: "",
//     },
//     month: {
//         from: "",
//         to: "",
//     },
//     year: {
//         from: "",
//         to: "",
//     },
// }

export function DateRangeInputs() {
    return <div className={styles.inputsRowWrapper}>
        <InputsPair label="YEAR RANGE" type="number" />
        <InputsPair label="MONTH RANGE" type="number" />
        <InputsPair label="DAY RANGE" type="number" />
        <BtnQuery />
    </div>

}

function InputsPair({ label, type }: { label: string, type: string }) {
    const [fromVal, setFromVal] = useState("");
    const [toVal, setToVal] = useState("");

    function handleFrom(e: React.ChangeEvent<HTMLInputElement>) {
        setFromVal(e.target.value);
        console.log(e.target.value);
    }

    function handleTo(e: React.ChangeEvent<HTMLInputElement>) {
        setToVal(e.target.value);
        console.log(e.target.value);
    }

    return <div >
        <label className={`${styles.label} ${utils.textSm} ${utils.fontBold}`}>{label}</label>
        <div className={`${styles.inputsWrapper}`}>
            <input type={type} onChange={handleFrom} value={fromVal}></input>
            <p className={styles.lightGray}>-</p>
            <input type={type} onChange={handleTo} value={toVal}></input>
        </div>
    </div>
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