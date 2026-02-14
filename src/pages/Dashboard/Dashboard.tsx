import styles from "./Dashboard.module.css"
import BtcDominanceCard from '../../components/BtcDominanceCard';
import BtcFloatCard from "../../components/BtcFloatCard";
import BtcPriceCard from "../../components/BtcPriceCard";
import FearAndGreedCard from "../../components/FearAndGreedCard";
import LongShortCard from "../../components/LongShortCard";
import RsiCard from "../../components/RsiCard";
import LiquidationsCard from "../../components/LiquidationsCard";

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
    </div>
}

