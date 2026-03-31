import styles from "./SignalResults.module.css";
import { SIGNAL_RESULTS } from "./signalResults.data";
import SummaryCards from "./components/SummaryCards";
import ResultsTable from "./components/ResultsTable";
import ComparisonCharts from "./components/ComparisonCharts";

export function SignalResults() {
    return (
        <div className={styles.pageWrapper}>
            <SummaryCards data={SIGNAL_RESULTS} />
            <ResultsTable data={SIGNAL_RESULTS} />
            <ComparisonCharts data={SIGNAL_RESULTS} />
        </div>
    );
}
