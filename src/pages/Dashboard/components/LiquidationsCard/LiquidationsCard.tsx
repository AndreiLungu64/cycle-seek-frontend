import StatsCard from "../StatsCard"
import styles from './LiquidationsCard.module.css'
import ProgressBar from "../ProgressBar"
import utils from '../../../../styles/utilities.module.css';

export function LiquidationsCard() {
    return <StatsCard title={"24 Hours Liquidations"}>
        <LongShortRatio />
        <Liquidation />
    </StatsCard>
}

function LongShortRatio() {
    return <div>
        <p className={styles.totalLiqContainer}><span className={`${utils.textXl} ${utils.fontBold} ${utils.textWhite} ${styles.totalLiqValueMargin}`}>$42.5M</span><span className={`${utils.textXs} ${utils.textGray}`}>total wrecked</span></p>
        <p className={utils.spaceBetween}><span className={`${utils.textSm} ${utils.fontBold} ${utils.textGreen}`}>Longs 73%</span><span className={`${utils.textSm} ${utils.fontBold} ${utils.textRed}`}>Shorts 27%</span></p>
        <ProgressBar max={100} value={73} color="#22c55e" background="#ef4444" />
    </div>
}

function Liquidation() {
    return <p className={`${utils.textSm} ${utils.textGray} ${styles.splitLiqLabelMargin} ${utils.spaceBetween}`}>
        <span>Long Liquidations: <span className={`${utils.fontBold} ${utils.textWhite}`}>$31.2M</span></span>
        <span>Short Liquidations: <span className={`${utils.fontBold} ${utils.textWhite}`}> $11.3M</span></span>
    </p>
}