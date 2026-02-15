import SquareCard from "../SquareCard"
import styles from './LiquidationsCard.module.css'

export function LiquidationsCard() {
    return <SquareCard title={"24 Hours Liquidations"}>
        <LongShortRatio />
        <Liquidation />
    </SquareCard>
}

function LongShortRatio() {
    return <div style={{ width: "100%", display: "stretched" }}>
        <p id={styles.totalLiqContainer}><span id={styles.totalLiqPerc}>$42.5M</span><span id={styles.info}>total wrecked</span></p>
        <p className={styles.spaceBetweenContainer}><span id={styles.longPerc} className={styles.percentage}>Longs 73%</span><span id={styles.shortPerc} className={styles.percentage}>Shorts 27%</span></p>
        <progress id={styles.longShortBar} max="100" value="73">70%</progress>

    </div>
}

function Liquidation() {
    return <p id={styles.splitLiqText} className={styles.spaceBetweenContainer}>
        <span>Long Liquidations: <span className={styles.splitLiqValue}>$31.2M</span></span>
        <span>Short Liquidations: <span className={styles.splitLiqValue}> $11.3M</span></span>
    </p>
}