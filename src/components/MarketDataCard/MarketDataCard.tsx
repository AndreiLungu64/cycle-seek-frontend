import styles from "./MarketDataCard.module.css";

export function MarketDataCard({ title, value, explanation }: { title: string, value: string, explanation: string }) {
    return <div id={styles.card}>
        <h3 id={styles.title}>{title}</h3 >
        <p id={styles.value}>{value}</p>
        <p id={styles.explanation}>{explanation}</p>
    </div>;
}