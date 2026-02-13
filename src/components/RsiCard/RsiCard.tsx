import SquareCard from "../SquareCard"
import styles from "./RsiCard.module.css";

export function RsiCard() {
    return <SquareCard title={"Relative Strength Index"}>
        <RsiScore />
        <SignalType />
    </SquareCard>
}

function RsiScore() {
    return <div className={styles.rsiScoreContainer}>
        <div className={styles.spaceBetweenBontainer}>
            <p>RSI (14D)</p>
            <p>68.0</p>
        </div>
        <div>
            <progress className={styles.rsiBar} id=" file" max="100" value="70">70%</progress>
            <p className={styles.spaceBetweenBontainer}><span className={styles.info}>{"Oversold(<30)"}</span><span className={styles.info}>{"Overbought(>70)"}</span></p>

        </div>
    </div>
}

function SignalType() {
    return <div className={styles.signalTypeContainer}>
        <div className={styles.spaceBetweenBontainer}>
            <p className={styles.signalTypeInfo}>Signal</p>
            <p className={styles.signalTypeInfo} id={styles.hold}>Hold</p>
        </div>
        <div className={styles.bottomLine}></div>
    </div>
}