import StatsCard from "../StatsCard"
import styles from './LiquidationsCard.module.css'
import ProgressBar from "../ProgressBar"
import utils from '../../styles/utilities.module.css';

export function LiquidationsCard() {
    return <StatsCard title={"24 Hours Liquidations"}>
        <LongShortRatio />
        <Liquidation />
    </StatsCard>
}

function LongShortRatio() {
    return <div>
        <p className={styles.totalLiqContainer}><span className={styles.totalLiqPerc}>$42.5M</span><span className={styles.info}>total wrecked</span></p>
        <p className={utils.spaceBetween}><span className={`${styles.longPerc} ${styles.percentage}`}>Longs 73%</span><span className={`${styles.shortPerc} ${styles.percentage}`}>Shorts 27%</span></p>
        <ProgressBar max={100} value={73} color="#22c55e" background="#ef4444" />
    </div>
}

function Liquidation() {
    return <p className={`${styles.splitLiqText} ${utils.spaceBetween}`}>
        <span>Long Liquidations: <span className={styles.splitLiqValue}>$31.2M</span></span>
        <span>Short Liquidations: <span className={styles.splitLiqValue}> $11.3M</span></span>
    </p>
}