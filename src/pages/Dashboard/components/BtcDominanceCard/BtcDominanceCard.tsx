import StatsCard from "../StatsCard"
import styles from "./BtcDominanceCard.module.css"
import Chart from 'react-apexcharts';
import utils from "../../../../styles/utilities.module.css";

export function BtcDominanceCard({ dominance }: { dominance: number }) {
    const fDominance = Number(dominance.toFixed(2));
    return <StatsCard title={"Bitcoin Dominance"}>
        <Dominance dominance={fDominance} />
        <DominanceChart dominance={fDominance} />
        <DominanceBar dominance={fDominance} />
    </StatsCard>
}

function Dominance({ dominance }: { dominance: number }) {
    return <div>
        <p className={styles.valueLineWrapper}><span className={`${utils.textXl} ${utils.fontBold} ${utils.textWhite} ${styles.value}`}>{`${dominance}`}%</span><span className={`${utils.textXs} ${utils.textGray}`}>of total market</span></p>
    </div>
}


function DominanceBar({ dominance }: { dominance: number }) {
    return <progress className={styles.progressBar} value={dominance} max={100}></progress>
}

function DominanceChart({ dominance }: { dominance: number }) {
    const options = {
        chart: {
            id: "apexchart-example",
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            show: false,
            categories: [1, 2, 3, 4, 5, 6, 7],
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: { show: false },
            tooltip: { enabled: false },
        },
        yaxis: {
            max: 100,
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        stroke: {
            curve: 'smooth' as const,
            width: 3,
        },
        colors: ['#F7931A'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                colorStops: [
                    { offset: 0, color: '#F7931A', opacity: 0.5 },
                    { offset: 100, color: '#F7931A', opacity: 0 }
                ],
                opacityFrom: 1,
                opacityTo: 0.,
                stops: [0, 20, 100],
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    };

    const series = [
        {
            name: "series-1",
            data: [35, 55, 50, 70, 55, 65, dominance]
        },

    ];
    return (
        <div className={styles.graphicWrapper}>
            <Chart
                options={options}
                series={series}
                type="area"
                width={"100%"}
                height={"100%"}
            />
        </div>

    );
}
