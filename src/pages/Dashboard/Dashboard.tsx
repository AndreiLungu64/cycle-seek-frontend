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
        <div className={`${styles.item9}`}>
            <MarketDataCard title={"MARKET CAP"} value={"$1,264,500,000,000.00"} explanation={"Total value of all mined coins"} />
        </div>
    </div>
}

