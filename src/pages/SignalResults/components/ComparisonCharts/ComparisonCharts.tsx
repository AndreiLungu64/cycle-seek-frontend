import Chart from "react-apexcharts";
import utils from "../../../../styles/utilities.module.css";
import styles from "./ComparisonCharts.module.css";
import type { SignalResultRow } from "../../signalResults.data";

export function ComparisonCharts({ data }: { data: SignalResultRow[] }) {
    const labels = data.map(r => r.code);

    const tradableOptions = {
        chart: {
            id: "tradable-signals",
            toolbar: { show: false },
            background: "transparent",
        },
        xaxis: {
            categories: labels,
            labels: {
                style: { colors: "#6b7280", fontSize: "10px" },
                rotate: -45,
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: { style: { colors: "#6b7280" } },
        },
        colors: ["#22c55e", "#3b82f6", "#6b7280"],
        plotOptions: {
            bar: { borderRadius: 4, columnWidth: "60%" },
        },
        dataLabels: { enabled: false },
        grid: { show: false },
        tooltip: {
            theme: "dark" as const,
        },
        legend: {
            labels: { colors: "#a1abbc" },
        },
    };

    const tradableSeries = [
        { name: "Strong", data: data.map(r => r.strongTradable) },
        { name: "Moderate", data: data.map(r => r.moderateTradable) },
        { name: "Weak", data: data.map(r => r.weakTradable) },
    ];

    const totalTradableOptions = {
        chart: {
            id: "total-tradable",
            toolbar: { show: false },
            background: "transparent",
        },
        xaxis: {
            categories: labels,
            labels: {
                style: { colors: "#6b7280", fontSize: "10px" },
                rotate: -45,
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: { style: { colors: "#6b7280" } },
        },
        colors: ["#7c6fff"],
        plotOptions: {
            bar: { borderRadius: 4, columnWidth: "50%" },
        },
        dataLabels: { enabled: false },
        grid: { show: false },
        tooltip: {
            theme: "dark" as const,
        },
    };

    const totalTradableSeries = [
        { name: "Tradable Signals", data: data.map(r => r.tradable) },
    ];

    return (
        <div className={styles.chartsWrapper}>
            <div className={`${utils.cardBase} ${styles.chartCard}`}>
                <h3 className={styles.title}>Tradable Signals per Configuration</h3>
                <Chart options={totalTradableOptions} series={totalTradableSeries} type="bar" height={280} />
            </div>
            <div className={`${utils.cardBase} ${styles.chartCard}`}>
                <h3 className={styles.title}>Tradable Signals by Strength</h3>
                <Chart options={tradableOptions} series={tradableSeries} type="bar" height={280} />
            </div>
        </div>
    );
}
