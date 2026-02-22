import styles from "./Dashboard.module.css"
import BtcDominanceCard from './components/BtcDominanceCard';
import BtcFloatCard from "./components/BtcFloatCard";
import BtcPriceCard from "./components/BtcPriceCard";
import FearAndGreedCard from "./components/FearAndGreedCard";
import LongShortCard from "./components/LongShortCard";
import RsiCard from "./components/RsiCard";
import LiquidationsCard from "./components/LiquidationsCard";
import AltcoinSeasonCard from "./components/AltcoinSeasonCard";
import MarketDataCard from "./components/MarketDataCard";
import useBtcQuotes from "../../hooks/useBtcQuote";
import { OrbitProgress } from 'react-loading-indicators';
import useFearGeed from "../../hooks/useFearGreed";
import { useRsi } from "../../hooks/useRsi";

export function Dashboard() {
    const { data: btcData, isLoading: btcLoading } = useBtcQuotes();
    const { data: fearGreedData, isLoading: fearGreedLoading } = useFearGeed();
    const { data: rsiData, isLoading: rsiLoading } = useRsi();

    if (btcLoading || fearGreedLoading || rsiLoading) return <div className={styles.loadingContainer}>
        <OrbitProgress color="var(--color-btn-active)" size="medium" />
    </div>

    return <div className={styles.dashboardGrid}>
        <div className={`${styles.item1}`}>
            <BtcPriceCard price={btcData.quote.USD.price} priceChange={btcData.quote.USD.percent_change_24h} />
        </div>
        <div className={`${styles.item2}`}>
            <FearAndGreedCard value={fearGreedData!.value} />
        </div>
        <div className={`${styles.item3}`}>
            <RsiCard rsi={rsiData!.rsi} />
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
            <BtcDominanceCard dominance={btcData.quote.USD.market_cap_dominance} />
        </div>
        <div className={`${styles.item8}`}>
            <AltcoinSeasonCard dominance={btcData.quote.USD.market_cap_dominance} />
        </div>
        <div>
            <MarketDataCard title={"MARKET CAP"} value={`$${btcData.quote.USD.market_cap.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`} explanation={"Total value of all mined coins"} />
        </div>
        <div>
            <MarketDataCard title={"VOLUME (24H)"} value={`$${btcData.quote.USD.volume_24h.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`} explanation={"Trading activity"} />
        </div>
        <div>
            <MarketDataCard title={"VOL / MKT CAP"} value={`${(btcData.quote.USD.volume_24h / btcData.quote.USD.market_cap * 100).toFixed(2)}%`} explanation={"Liquidity indicator"} />
        </div>
        <div>
            <MarketDataCard title={"FDV"} value={`$${btcData.quote.USD.fully_diluted_market_cap.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`} explanation={"Fully Diluted Valuation"} />
        </div>
        <div>
            <MarketDataCard title={"CIRCULATING SUPPLY"} value={`${btcData.circulating_supply.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} BTC`} explanation={`${(btcData.circulating_supply * 100 / btcData.max_supply).toFixed(2)}% of Max`} />
        </div>
        <div>
            <MarketDataCard title={"MAX SUPPLY"} value={`${btcData.max_supply.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} BTC`} explanation={"Hard cap limit"} />
        </div>
        <div>
            <MarketDataCard title={"TOTAL SUPPLY"} value={`${btcData.total_supply.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} BTC`} explanation={"Mined coins (incl. lost)"} />
        </div>
        <div>
            <MarketDataCard title={"PRICE CHANGE 30 DAYS"} value={`${btcData.quote.USD.percent_change_30d.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`} explanation={"Monthly price movement"} />
        </div>
    </div>
}