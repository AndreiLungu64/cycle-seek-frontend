import SquareCard from "../SquareCard"
import styles from './LongShortCard.module.css'

export function LongShortCard() {
    return <SquareCard title={"Long/Short Ratio"}>
        <LongShortRatio />
        <Sentiment />
    </SquareCard>
}

function LongShortRatio() {
    return <div>
        <p id={styles.longShortRatio}>1.24</p>
        <p className={styles.spaceBetweenContainer}><span id={styles.longPerc} className={styles.percentage}>Longs 55.4%</span><span id={styles.shortPerc} className={styles.percentage}>Shorts 44.6%</span></p>
        <progress id={styles.longShortBar} max="100" value="70">70%</progress>
    </div>
}

function Sentiment() {
    return <p id={styles.sentiment}>Sentiment leans: <span id={styles.sentimentValue}>Bullish</span></p>
}