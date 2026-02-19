import styles from "./InputPair.module.css";
import utils from "../../../../styles/utilities.module.css";

export function InputPair({ label, type }: { label: string, type: string }) {
    return <div >
        <label className={`${styles.label} ${styles.lightGray} ${utils.fontBold} ${utils.textSm}`}>{label}</label>
        <div className={`${styles.inputsWrapper}`}>
            <input type={type}></input>
            <p className={styles.lightGray}>-</p>
            <input type={type}></input>
        </div>
    </div>

}