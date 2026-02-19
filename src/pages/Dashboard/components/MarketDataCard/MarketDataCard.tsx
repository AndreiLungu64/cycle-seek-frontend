import styles from "./MarketDataCard.module.css";
import utils from "../../../../styles/utilities.module.css";

export function MarketDataCard({ title, value, explanation }: { title: string, value: string, explanation: string }) {
    return <div className={`${utils.cardBase} ${styles.card}`}>
        <h3 className={styles.title}>{title}</h3 >
        <p className={styles.value}>{value}</p>
        <p className={styles.explanation}>{explanation}</p>
    </div>;
}