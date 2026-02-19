import styles from './BtcPriceCard.module.css';
import btcIcon from '../../assets/BtcPriceCard/btc-icon.png';
import utils from "../../styles/utilities.module.css";

export default function BtcPriceCard() {
    return <div className={`${utils.cardBase} ${styles.card}`}>
        <BtcNameSec />
        <BtcPriceSec />
        <AnchBtn />
    </div>;
}

function BtcNameSec() {
    return <div className={styles.nameContainer}>
        <img className={styles.btcIcon} src={btcIcon} />
        <div className={styles.nameInnerContainer}>
            <div className={styles.nameRowOne}>
                <p className={`${styles.name}`}>Bitcoin</p >
                <p className={`${styles.symbol}`}>BTC</p >
            </div>
            <div className={styles.nameRowTwo}>
                <div className={`${styles.metaBadge}`}>
                    <p>Rank #1</p>
                </div>
                <div className={`${styles.metaBadge}`}>
                    <p>COIN</p>
                </div>
            </div>
        </div>
    </div >;
}

function BtcPriceSec() {
    return <div className={styles.priceContainer}>
        <p className={styles.priceStyle}>$64,231.45</p>
        <div className={styles.priceBadge}>
            <svg className={styles.trendSvg} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            <p>1.94% (24h)</p>
        </div>
    </div>
}

function AnchBtn() {
    return <button className={`${utils.btnBase} ${styles.btnSeeCharts}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
        <span> See Chart</span >
    </button >
}