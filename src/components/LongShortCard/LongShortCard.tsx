import ProgressBar from "../ProgressBar"
import StatsCard from "../StatsCard"
import styles from './LongShortCard.module.css'
import utils from '../../styles/utilities.module.css';

export function LongShortCard() {
    return <StatsCard title={"Long/Short Ratio"}>
        <LongShortRatio />
        <Sentiment />
    </StatsCard>
}

function LongShortRatio() {
    return <div>
        <p className={styles.longShortRatio}>1.24</p>
        <p className={utils.spaceBetween}><span className={`${styles.longPerc} ${styles.percentage}`} >Longs 55.4%</span><span className={`${styles.shortPerc} ${styles.percentage}`} >Shorts 44.6%</span></p>
        <ProgressBar max={100} value={70} color="#22c55e" background="#ef4444" />
    </div>
}

function Sentiment() {
    return <p className={styles.sentiment}>Sentiment leans: <span className={styles.sentimentValue}>Bullish</span></p>
}