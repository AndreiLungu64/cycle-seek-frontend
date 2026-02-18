import styles from "./TradingChart.module.css";
import utils from "../../styles/utilities.module.css";
import TradingVeiewWidget from "../TradingViewWidget/TradingVeiewWidget";


export function TradingChart() {
    return <div className={`${styles.sectionWrapper}`}>
        <Banner />
        <TradingVeiewWidget />
    </div >
}

function Banner() {
    return <div className={` ${utils.cardBase} ${styles.banner}`}>
        <p className={`${styles.textBase} ${utils.fontBold} ${utils.textWhite}`}>Advanced Real Time Chart</p>
        <div className={styles.liveWrapper}>
            <div className={styles.dot}></div>
            <p className={`${utils.textSm} ${utils.textGray}`}>LIVE MARKET DATA</p>
        </div>
    </div>
}
