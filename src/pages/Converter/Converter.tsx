import styles from "./Converter.module.css";
import { useConverterPrices } from "../../hooks/useConverterPrices";
import ConverterCard from "./components/ConverterCard";
import { OrbitProgress } from "react-loading-indicators";

export function Converter() {
    const { data: prices, isLoading } = useConverterPrices();

    if (isLoading) return (
        <div className={styles.loadingContainer}>
            <OrbitProgress color="var(--color-btn-active)" size="medium" />
        </div>
    );

    return (
        <div className={styles.pageWrapper}>
            <ConverterCard prices={prices!} />
        </div>
    );
}
