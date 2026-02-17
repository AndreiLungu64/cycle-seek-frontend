import styles from "./AltcoinSeasonCard.module.css";
import StatsCard from "../StatsCard";
import utils from '../../styles/utilities.module.css';

export function AltcoinSeasonCard() {
    return <StatsCard title={"Altcoin Season"}>
        <LongShortRatio />
        <Sentiment />
    </StatsCard>
}

function LongShortRatio() {
    return <div>
        <p className={styles.seasonPerc}>35<span className={styles.seasonTotalPerc}> / 100</span></p>
        <p className={utils.spaceBetween}><span className={styles.percentage}>Bitcoin season</span><span className={styles.percentage}>Altcoin season</span></p>
        <input className={styles.altSeasonBar} type="range" value="20" min="0" max="100" />
    </div>
}

function Sentiment() {
    return <p className={styles.sentiment}>It is currently: <span className={styles.sentimentValue}>Bitcoin season</span></p>
}