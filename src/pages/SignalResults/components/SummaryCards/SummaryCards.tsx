import styles from "./SummaryCards.module.css";
import utils from "../../../../styles/utilities.module.css";
import type { SignalResultRow } from "../../signalResults.data";

export function SummaryCards({ data }: { data: SignalResultRow[] }) {
    const totalConfigs = data.length;
    const totalTested = data.reduce((sum, r) => sum + r.totalTested, 0);
    const totalTradable = data.reduce((sum, r) => sum + r.tradable, 0);
    const totalCorrectlyDefined = data.reduce((sum, r) => sum + r.correctlyDefined, 0);

    return (
        <div className={styles.summaryGrid}>
            <SummaryCard title="CONFIGURATIONS" value={`${totalConfigs}`} explanation="Total test configurations" />
            <SummaryCard title="SIGNALS TESTED" value={totalTested.toLocaleString()} explanation="Across all configurations" />
            <SummaryCard title="CORRECTLY DEFINED" value={totalCorrectlyDefined.toLocaleString()} explanation="Passed initial validation" />
            <SummaryCard title="TRADABLE SIGNALS" value={`${totalTradable}`} explanation="Met all criteria" />
        </div>
    );
}

function SummaryCard({ title, value, explanation }: { title: string; value: string; explanation: string }) {
    return (
        <div className={`${utils.cardBase} ${styles.card}`}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.value}>{value}</p>
            <p className={styles.explanation}>{explanation}</p>
        </div>
    );
}
