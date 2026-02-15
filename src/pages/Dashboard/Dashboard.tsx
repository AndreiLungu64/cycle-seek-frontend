import styles from "./Dashboard.module.css"
import BtcDominanceCard from '../../components/BtcDominanceCard';
import BtcFloatCard from "../../components/BtcFloatCard";
import BtcPriceCard from "../../components/BtcPriceCard";
import FearAndGreedCard from "../../components/FearAndGreedCard";
import LongShortCard from "../../components/LongShortCard";
import RsiCard from "../../components/RsiCard";
import LiquidationsCard from "../../components/LiquidationsCard";
import AltcoinSeasonCard from "../../components/AltcoinSeasonCard";
import MarketDataCard from "../../components/MarketDataCard";

export function Dashboard() {
    return <div id={styles.dashboardGrid}>
        <div className={`${styles.item1}`}>
            <BtcPriceCard />
        </div>
        <div className={`${styles.item2}`}>
            <FearAndGreedCard />
        </div>
        <div className={`${styles.item3}`}>
            <RsiCard />
        </div>
        <div className={`${styles.item4}`}>
            <BtcFloatCard />
        </div>
        <div className={`${styles.item5}`}>
            <LongShortCard />
        </div>
        <div className={`${styles.item6}`}>
            <LiquidationsCard />
        </div>
        <div className={`${styles.item7}`}>
            <BtcDominanceCard />
        </div>
        <div className={`${styles.item8}`}>
            <AltcoinSeasonCard />
        </div>
        <div>
            <MarketDataCard title={"MARKET CAP"} value={"$1,264,500,000,000.00"} explanation={"Total value of all mined coins"} />
        </div>
        <div>
            <MarketDataCard title={"VOLUME (24H)"} value={"$34,500,000,000.00"} explanation={"Trading activity"} />
        </div>
        <div>
            <MarketDataCard title={"VOL / MKT CAP"} value={"2.72%"} explanation={"Liquidity indicator"} />
        </div>
        <div>
            <MarketDataCard title={"FDV"} value={"$1,348,000,000,000.00"} explanation={"Fully Diluted Valuation"} />
        </div>
        <div>
            <MarketDataCard title={"CIRCULATING SUPPLY"} value={"19.69M BTC"} explanation={"93.7% of Max"} />
        </div>
        <div>
            <MarketDataCard title={"MAX SUPPLY"} value={"21M BTC"} explanation={"Hard cap limit"} />
        </div>
        <div>
            <MarketDataCard title={"TOTAL SUPPLY"} value={"19.69M BTC"} explanation={"Mined coins (incl. lost)"} />
        </div>
        <div>
            <MarketDataCard title={"TREASURY HOLDINGS"} value={"2.45M BTC"} explanation={"Held by companies/govs"} />
        </div>
    </div>
}

