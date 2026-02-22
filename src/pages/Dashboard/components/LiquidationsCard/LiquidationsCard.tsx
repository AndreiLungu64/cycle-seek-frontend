import StatsCard from "../StatsCard"
import styles from './LiquidationsCard.module.css'
import ProgressBar from "../ProgressBar"
import utils from '../../../../styles/utilities.module.css';

export function LiquidationsCard({ longUsd, shortUsd }: { longUsd: number, shortUsd: number }) {
    return <StatsCard title={"24 Hours Liquidations"}>
        <LiquidationRatio longUsd={longUsd} shortUsd={shortUsd} />
        <Liquidation longUsd={longUsd} shortUsd={shortUsd} />
    </StatsCard>
}

function LiquidationRatio({ longUsd, shortUsd }: { longUsd: number, shortUsd: number }) {
    const total = longUsd + shortUsd;
    const totalMil = (total / 1000000).toFixed(2);
    const longPerc = (longUsd / total * 100).toFixed(0);
    const shortPerc = (shortUsd / total * 100).toFixed(0);
    console.log(longPerc, shortPerc);
    return <div>
        <p className={styles.totalLiqContainer}><span className={`${utils.textXl} ${utils.fontBold} ${utils.textWhite} ${styles.totalLiqValueMargin}`}>${totalMil}M</span><span className={`${utils.textXs} ${utils.textGray}`}>total wrecked</span></p>
        <p className={utils.spaceBetween}><span className={`${utils.textSm} ${utils.fontBold} ${utils.textGreen}`}>Longs {longPerc}%</span><span className={`${utils.textSm} ${utils.fontBold} ${utils.textRed}`}>Shorts {shortPerc}%</span></p>
        <ProgressBar max={100} value={73} color="#22c55e" background="#ef4444" />
    </div>
}

function Liquidation({ longUsd, shortUsd }: { longUsd: number, shortUsd: number }) {
    const longMilUsd = (longUsd / 1000000).toFixed(2);
    const shortMilUsd = (shortUsd / 1000000).toFixed(2);
    return <p className={`${utils.textSm} ${utils.textGray} ${styles.splitLiqLabelMargin} ${utils.spaceBetween}`}>
        <span>Long Liquidations: <span className={`${utils.fontBold} ${utils.textWhite}`}>${longMilUsd}M</span></span>
        <span>Short Liquidations: <span className={`${utils.fontBold} ${utils.textWhite}`}> ${shortMilUsd}M</span></span>
    </p>
}