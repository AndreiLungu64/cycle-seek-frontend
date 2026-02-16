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
        <p className={styles.longShortRatio}>1.24</p>
        <p className={styles.spaceBetweenContainer}><span className={`${styles.longPerc} ${styles.percentage}`} >Longs 55.4%</span><span className={`${styles.shortPerc} ${styles.percentage}`} >Shorts 44.6%</span></p>
        <progress className={styles.longShortBar} max="100" value="70">70%</progress>
    </div>
}

function Sentiment() {
    return <p className={styles.sentiment}>Sentiment leans: <span className={styles.sentimentValue}>Bullish</span></p>
}