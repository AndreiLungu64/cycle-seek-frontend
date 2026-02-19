import ProgressBar from "../ProgressBar"
import StatsCard from "../StatsCard"
import styles from './LongShortCard.module.css'
import utils from '../../../../styles/utilities.module.css';

export function LongShortCard() {
    return <StatsCard title={"Long/Short Ratio"}>
        <LongShortRatio />
        <Sentiment />
    </StatsCard>
}

function LongShortRatio() {
    return <div>
        <p className={`${utils.textXl} ${utils.fontBold} ${utils.textWhite} ${styles.ratioMargin}`}>1.24</p>
        <p className={utils.spaceBetween}><span className={`${utils.textSm} ${utils.fontBold} ${utils.textGreen}`} >Longs 55.4%</span><span className={`${utils.textSm} ${utils.fontBold} ${utils.textRed}`} >Shorts 44.6%</span></p>
        <ProgressBar max={100} value={70} color="#22c55e" background="#ef4444" />
    </div>
}

function Sentiment() {
    return <p className={`${utils.textSm} ${utils.textGray}`}>Sentiment leans: <span className={`${utils.textSm} ${utils.fontBold} ${utils.textWhite}`}>Bullish</span></p>
}