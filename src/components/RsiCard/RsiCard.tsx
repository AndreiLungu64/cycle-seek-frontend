import StatsCard from "../StatsCard"
import styles from "./RsiCard.module.css";
import ProgressBar from "../ProgressBar";
import utils from "../../styles/utilities.module.css"

export function RsiCard() {
    return <StatsCard title={"Relative Strength Index"}>
        <RsiScore />
        <SignalType />
    </StatsCard>
}

function RsiScore() {
    return <div>
        <div className={utils.spaceBetween}>
            <p className={styles.numValues}>RSI (14D)</p>
            <p className={styles.numValues}>68.0</p>
        </div>
        <div>
            <ProgressBar max={100} value={70} color="#3b82f6" background="#1f2937" />
            <p className={utils.spaceBetween}><span className={styles.info}>{"Oversold(<30)"}</span><span className={styles.info}>{"Overbought(>70)"}</span></p>
        </div>
    </div>
}

function SignalType() {
    return <div>
        <div className={utils.spaceBetween}>
            <p className={styles.signalTypeInfo}>Signal</p>
            <p className={`${styles.signalTypeInfo} ${styles.hold}`}>Hold</p>
        </div>
        <div className={styles.bottomLine}></div>
    </div>
}