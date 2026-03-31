import styles from "./ResultsTable.module.css";
import utils from "../../../../styles/utilities.module.css";
import type { SignalResultRow } from "../../signalResults.data";

export function ResultsTable({ data }: { data: SignalResultRow[] }) {
    return (
        <div className={`${utils.cardBase} ${styles.card}`}>
            <h2 className={styles.heading}>Test Configurations & Results</h2>
            <div className={styles.tableWrapper}>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th>Test</th>
                            <th>Code</th>
                            <th>Set</th>
                            <th>Total Tested</th>
                            <th>Tradable</th>
                            <th>Dir. Accuracy</th>
                            <th>Mag. Accuracy</th>
                            <th>Strong</th>
                            <th>Moderate</th>
                            <th>Weak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.testName}</td>
                                <td className={styles.code}>{row.code}</td>
                                <td>{row.set}</td>
                                <td>{row.totalTested}</td>
                                <td className={row.tradable > 0 ? styles.tradable : ""}>{row.tradable}</td>
                                <td>{row.directionAccuracy}</td>
                                <td>{row.magnitudeAccuracy}</td>
                                <td className={row.strongTradable > 0 ? styles.strong : ""}>{row.strongTradable}</td>
                                <td className={row.moderateTradable > 0 ? styles.moderate : ""}>{row.moderateTradable}</td>
                                <td className={row.weakTradable > 0 ? styles.weak : ""}>{row.weakTradable}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
