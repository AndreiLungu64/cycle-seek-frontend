import styles from "./AltcoinSeasonCard.module.css";
import StatsCard from "../StatsCard";
import utils from '../../../../styles/utilities.module.css';

export function AltcoinSeasonCard() {
    return <StatsCard title={"Altcoin Season"}>
        <LongShortRatio />
        <Sentiment />
    </StatsCard>
}

function LongShortRatio() {
    return <div>
        <p className={styles.primaryValue}>35<span className={styles.secondaryValue}> / 100</span></p>
        <p className={`${utils.spaceBetween} ${utils.textSm} ${utils.fontBold} ${utils.textWhite}`}><span>Bitcoin season</span><span>Altcoin season</span></p>
        <input className={styles.progressBar} type="range" value="20" min="0" max="100" />
    </div>
}

function Sentiment() {
    return <p className={`${utils.textSm} ${utils.textGray}`}>It is currently: <span className={`${utils.textSm} ${utils.fontBold} ${utils.textWhite}`}>Bitcoin season</span></p >
}