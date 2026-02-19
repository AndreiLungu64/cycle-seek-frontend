import styles from "./TradingChart.module.css";
import utils from "../../../../styles/utilities.module.css";
import TradingViewWidget from "../TradingViewWidget/TradingViewWidget";
import tradingViewLogo from "../../../../assets/TradingViewWidget/trading-view.svg";

export function TradingChart() {
    return <div className={styles.sectionWrapper}>
        <Banner />
        <TradingViewWidget />
    </div >
}

function Banner() {
    return <div className={` ${utils.cardBase} ${styles.banner}`}>
        <div className={styles.titleWrapper}>
            <h1 className={`${styles.title} ${utils.fontBold} ${styles.colorBlue}`}>Advanced Real Time Chart by</h1>
            <Logo />
        </div>
        <div className={styles.liveWrapper}>
            <div className={styles.dot}></div>
            <p className={`${utils.textSm} ${utils.textWhite}`}>LIVE MARKET DATA</p>
        </div>
    </div>
}

function Logo() {
    return <div className={styles.svgWraper}>
        <img src={tradingViewLogo} alt="TradingView" />
    </div>
}
