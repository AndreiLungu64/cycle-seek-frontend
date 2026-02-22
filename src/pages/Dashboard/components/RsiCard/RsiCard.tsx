import StatsCard from "../StatsCard"
import styles from "./RsiCard.module.css";
import ProgressBar from "../ProgressBar";
import utils from "../../../../styles/utilities.module.css"

export function RsiCard({ rsi }: { rsi: number }) {
    return <StatsCard title={"Relative Strength Index"}>
        <RsiScore rsi={rsi} />
        <SignalType rsi={rsi} />
    </StatsCard>
}

function RsiScore({ rsi }: { rsi: number }) {
    console.log(rsi);
    return <div>
        <div className={utils.spaceBetween}>
            <p className={`${utils.textSm}`}>RSI (14D)</p>
            <p className={`${utils.textSm} ${utils.fontBold}`}>{rsi}</p>
        </div>
        <div>
            <ProgressBar max={100} value={rsi} color="#3b82f6" background="#1f2937" />
            <p className={`${utils.spaceBetween} ${utils.textSm} ${utils.textGray}`}><span>{"Oversold(<30)"}</span><span>{"Overbought(>70)"}</span></p>
        </div>
    </div>
}

function SignalType({ rsi }: { rsi: number }) {
    const signal = rsi >= 70 ? "Sell" : rsi <= 30 ? "Buy" : "Hold";
    return <div>
        <div className={utils.spaceBetween}>
            <p className={`${utils.textSm} ${utils.textGray}`}>Signal</p>
            <p className={`${utils.textSm} ${utils.fontBold} ${styles.textBlue}`}>{signal}</p>
        </div>
        <div className={styles.line}></div>
    </div>
}