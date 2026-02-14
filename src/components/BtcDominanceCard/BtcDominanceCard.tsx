import SquareCard from "../SquareCard"
import styles from "./BtcDominanceCard.module.css"
import Chart from 'react-apexcharts';

export function BtcDominanceCard() {
    return <SquareCard title={"Bitcoin Dominance"}>
        <Dominance />
        <DominanceChart />
    </SquareCard>
}

function Dominance() {
    return <>
        <p id={styles.dominanceLine}><span id={styles.dominancePerc}>54.2%</span><span id={styles.info}>of total market</span></p>
        <progress id={styles.dominanceBar} value={54.2} max={100}></progress>
    </>
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
            data: [35, 55, 50, 60, 55, 65, 58, 70]
        },

    ];
    return (
        <Chart
            options={options}
            series={series}
            type="area"
            width={"100%"}
            height={"100%"}
        />
    );
}
