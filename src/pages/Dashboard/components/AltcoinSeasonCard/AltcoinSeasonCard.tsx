import styles from "./AltcoinSeasonCard.module.css";
import StatsCard from "../StatsCard";
import utils from '../../../../styles/utilities.module.css';

export function AltcoinSeasonCard({ dominance }: { dominance: number }) {
    const score = 100 - ((dominance - 34) / 34) * 100;

    return <StatsCard title={"Altcoin Season"}>
        <LongShortRatio dominance={score} />
        <Sentiment score={score} />
    </StatsCard>
}

function LongShortRatio({ dominance }: { dominance: number }) {
    return <div>
        <p className={styles.primaryValue}>{Math.ceil(dominance)}<span className={styles.secondaryValue}> / 100</span></p>
        <p className={`${utils.spaceBetween} ${utils.textSm} ${utils.fontBold} ${utils.textWhite}`}><span>Bitcoin season</span><span>Altcoin season</span></p>
        <input className={styles.progressBar} type="range" value={Math.ceil(dominance)} min="0" max="100" />
    </div>
}

function Sentiment({ score }: { score: number }) {
    const message = score >= 75 ? "Altcoin season" : score >= 50 ? "Neutral" : score >= 25 ? "Bitcoin season" : "Strong Bitcoin season";
    return <p className={`${utils.textSm} ${utils.textGray}`}>It is currently: <span className={`${utils.textSm} ${utils.fontBold} ${utils.textWhite}`}>{message}</span></p >
}

// 35% dominance → score 100 (full altcoin season)
// 70% dominance → score 0 (full bitcoin season)
// 58.4% dominance → score ~33 (bitcoin season)