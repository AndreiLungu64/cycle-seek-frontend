import ProgressBar from "../ProgressBar"
import StatsCard from "../StatsCard"
import styles from './LongShortCard.module.css'
import utils from '../../../../styles/utilities.module.css';

export function LongShortCard({ long, short, ratio }: { long: string, short: string, ratio: string }) {
    return <StatsCard title={"Long/Short Ratio"}>
        <LongShortRatio long={long} short={short} ratio={ratio} />
        <Sentiment ratio={ratio} />
    </StatsCard>
}

function LongShortRatio({ long, short, ratio }: { long: string, short: string, ratio: string }) {
    const longPerc = (Number(long) * 100).toFixed(2);
    const shortPerc = (Number(short) * 100).toFixed(2);
    return <div>
        <p className={`${utils.textXl} ${utils.fontBold} ${utils.textWhite} ${styles.ratioMargin}`}>{Number(ratio).toFixed(2)}</p>
        <p className={utils.spaceBetween}><span className={`${utils.textSm} ${utils.fontBold} ${utils.textGreen}`} >Longs {longPerc}%</span><span className={`${utils.textSm} ${utils.fontBold} ${utils.textRed}`} >Shorts {shortPerc}%</span></p>
        <ProgressBar max={100} value={Number(longPerc)} color="#22c55e" background="#ef4444" />
    </div>
}

function Sentiment({ ratio }: { ratio: string }) {
    const ratioNb = Number(ratio);
    const message = ratioNb >= 2 ? "Strongly Bullish"
        : ratioNb > 1 ? "Bullish"
            : ratioNb === 1 ? "Neutral"
                : ratioNb >= 0.5 ? "Bearish"
                    : "Strongly Bearish";
    return <p className={`${utils.textSm} ${utils.textGray}`}>Sentiment leans: <span className={`${utils.textSm} ${utils.fontBold} ${utils.textWhite}`}>{message}</span></p>
}