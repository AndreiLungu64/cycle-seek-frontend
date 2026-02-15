import styles from "./AltcoinSeasonCard.module.css";
import SquareCard from "../SquareCard";

export function AltcoinSeasonCard() {
    return <SquareCard title={"Altcoin Season"}>
        <LongShortRatio />
        <Sentiment />
    </SquareCard>
}

function LongShortRatio() {
    return <div style={{ width: "100%" }}>
        <p id={styles.seasonPerc}>35<span id={styles.seasonTotalPerc}> / 100</span></p>
        <p className={styles.spaceBetweenContainer}><span id={styles.btcSeasonMarker} className={styles.percentage}>Bitcoin season</span><span id={styles.altSeasonMarker} className={styles.percentage}>Altcoin season</span></p>
        <input id={styles.altSeasonBar} type="range" value="20" min="0" max="100" />
    </div>
}

function Sentiment() {
    return <p id={styles.sentiment}>It is currently: <span id={styles.sentimentValue}>Bitcoin season</span></p>
}