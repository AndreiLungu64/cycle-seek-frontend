import styles from './BtcPriceCard.module.css';
import btcIcon from '../../assets/BtcPriceCard/btc-icon.png';

export default function BtcPriceCard() {
    return <div className={styles.compContainer}>
        <BtcNameSec />
        <BtcPriceSec />
        <AnchBtn />
    </div>;
}

function BtcNameSec() {
    return <div className={styles.nameContainer}>
        <img id={styles.btcIcon} src={btcIcon} />
        <div id={styles.nameInnerContainer}>
            <div className={styles.nameRowOne}>
                <p className={`${styles.nameStyle}`}>Bitcoin</p >
                <p className={`${styles.symbolStyle}`}>BTC</p >
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
        <p id={styles.priceStyle}>$64,231.45</p>
        <div className={styles.priceBadge}>
            <svg id={styles.trendSvg} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            <p>1.94% (24h)</p>
        </div>
    </div>
}

function AnchBtn() {
    return <button className={styles.seeChartsBtn}><span><svg data-slot="icon" fill="none" stroke-width="1" stroke="currentColor" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path>
    </svg></span>See Chart</button>
}