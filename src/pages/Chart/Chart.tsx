import styles from "./Chart.module.css";
import Banner from "./components/Banner";
import TradingViewWidget from "./components/TradingViewWidget/TradingViewWidget";

export function Chart() {
    return <div className={styles.sectionWrapper}>
        <Banner />
        <TradingViewWidget />
    </div>
}