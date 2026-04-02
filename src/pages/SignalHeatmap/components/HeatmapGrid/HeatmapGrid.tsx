import styles from "./HeatmapGrid.module.css";
import type { HeatmapCell } from "../../../../hooks/useSignalHeatmap";

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const HOURS = Array.from({ length: 24 }, (_, i) => i);

export function HeatmapGrid({ data }: { data: HeatmapCell[] }) {
    const grid = new Map<string, number>();
    data.forEach(cell => {
        grid.set(`${cell.calendar_day}-${cell.trade_hour}`, Number(cell.signal_count));
    });
    const maxCount = Math.max(...data.map(c => Number(c.signal_count)), 1);

    function getCellColor(count: number): string {
        if (count === 0) return "transparent";
        const opacity = 0.15 + (count / maxCount) * 0.85;
        return `rgba(124, 111, 255, ${opacity})`;
    }

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.row}>
                <div className={styles.cornerCell}></div>
                {HOURS.map(h => (
                    <div key={h} className={styles.hourLabel}>{h}</div>
                ))}
            </div>

            {DAYS.map(day => (
                <div key={`row-${day}`} className={styles.row}>
                    <div className={styles.dayLabel}>{day}</div>
                    {HOURS.map(hour => {
                        const count = grid.get(`${day}-${hour}`) ?? 0;
                        return (
                            <div
                                key={`${day}-${hour}`}
                                className={styles.cell}
                                style={{ backgroundColor: getCellColor(count) }}
                                title={`Day ${day}, ${hour}:00 — ${count} signal${count !== 1 ? "s" : ""}`}
                            >
                                {count > 0 ? count : ""}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
