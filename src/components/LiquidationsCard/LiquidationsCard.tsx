import SquareCard from "../SquareCard"
import styles from './LiquidationsCard.module.css'

export function LiquidationsCard() {
    return <SquareCard title={"24 Hours Liquidations"}>
        <LongShortRatio />
        <Liquidation />
    </SquareCard>
}

function LongShortRatio() {
    return <div>
        <p className={styles.totalLiqContainer}><span className={styles.totalLiqPerc}>$42.5M</span><span className={styles.info}>total wrecked</span></p>
        <p className={styles.spaceBetweenContainer}><span className={`${styles.longPerc} ${styles.percentage}`}>Longs 73%</span><span className={`${styles.shortPerc} ${styles.percentage}`}>Shorts 27%</span></p>
        <progress className={styles.longShortBar} max="100" value="73">70%</progress>

    </div>
}

function Liquidation() {
    return <p className={`${styles.splitLiqText} ${styles.spaceBetweenContainer}`}>
        <span>Long Liquidations: <span className={styles.splitLiqValue}>$31.2M</span></span>
        <span>Short Liquidations: <span className={styles.splitLiqValue}> $11.3M</span></span>
    </p>
}