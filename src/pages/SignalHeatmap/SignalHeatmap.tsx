import styles from "./SignalHeatmap.module.css";
import utils from "../../styles/utilities.module.css";
import { useSignalHeatmap } from "../../hooks/useSignalHeatmap";
import HeatmapGrid from "./components/HeatmapGrid";
import { OrbitProgress } from "react-loading-indicators";

export function SignalHeatmap() {
    const { data, isLoading } = useSignalHeatmap();

    if (isLoading) return (
        <div className={styles.loadingContainer}>
            <OrbitProgress color="var(--color-btn-active)" size="medium" />
        </div>
    );

    return (
        <div className={styles.pageWrapper}>
            <div className={`${utils.cardBase} ${styles.heatmapCard}`}>
                <h2 className={styles.title}>Signal Density Heatmap</h2>
                <p className={styles.subtitle}>Signal distribution across calendar days (1-31) and hours (0-23)</p>
                <HeatmapGrid data={data ?? []} />
            </div>
        </div>
    );
}
