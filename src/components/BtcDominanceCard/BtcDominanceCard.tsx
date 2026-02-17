import StatsCard from "../StatsCard"
import styles from "./BtcDominanceCard.module.css"
import Chart from 'react-apexcharts';
import utils from "../../styles/utilities.module.css";

export function BtcDominanceCard() {
    return <StatsCard title={"Bitcoin Dominance"}>
        <Dominance />
        <DominanceChart />
        <DominanceBar />
    </StatsCard>
}

function Dominance() {
    return <div>
        <p className={styles.valueLineWrapper}><span className={`${utils.textXl} ${utils.fontBold} ${utils.textWhite} ${styles.value}`}>54.2%</span><span className={`${utils.textXs} ${utils.textGray}`}>of total market</span></p>
    </div>
}


function DominanceBar() {
    return <progress className={styles.progressBar} value={54.2} max={100}></progress>
}

function DominanceChart() {
    const options = {
        chart: {
            id: "apexchart-example",
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            show: false,
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
            data: [35, 55, 50, 100, 55, 65, 58,]
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
