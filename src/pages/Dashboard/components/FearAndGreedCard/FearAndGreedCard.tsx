import { CircularProgressbar } from 'react-circular-progressbar';
import { StatsCard } from '../StatsCard/StatsCard';
import styles from "./FearAndGreedCard.module.css";
import utils from "../../../../styles/utilities.module.css"
import type { FearGreedData } from '../../../../hooks/useFearGreed';

export function FearAndGreedCard({ value }: FearGreedData) {

    function getFearGreedColor(value: number) {
        if (value >= 75) return "#84CC16";
        if (value >= 55) return "#A3E635";
        if (value >= 50) return "#FACC15";
        if (value >= 25) return "#F97316";
        return "#EF4444";
    }

    const color = getFearGreedColor(value);

    return <StatsCard title={"Fear & Greed Index"}>
        <FearGreedGraph value={value} color={color} />
        <FearGreedText value={value} color={color} />
    </StatsCard>

}

export function FearGreedGraph({ value, color }: { value: number, color: string }) {
    return <div className={styles.graphicWrapper}>
        <CircularProgressbar
            value={value}
            maxValue={100}
            text={`${value}`}
            strokeWidth={10}
            circleRatio={0.50}
            styles={{
                root: {

                },
                path: {
                    stroke: color,
                    strokeLinecap: 'round',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    transform: 'rotate(0.75turn)',
                    transformOrigin: 'center center',
                },

                trail: {
                    stroke: '#333333',
                    strokeLinecap: 'round', // butt or round
                    transform: 'rotate(0.75turn)',
                    transformOrigin: 'center center',
                },

                text: {
                    fill: 'rgb(239, 239, 239)',
                    fontSize: 'var(--font-lg)',
                    fontWeight: 'var(--font-weight-bold)',
                    transform: 'translateX(-9px) translateY(5px)',
                },
            }}
        />
    </ div >
}

function FearGreedText({ value, color }: { value: number, color: string }) {
    const label = value >= 75 ? "Extreme Greed"
        : value >= 55 ? "Greed"
            : value >= 50 ? "Neutral"
                : value >= 25 ? "Fear"
                    : "Extreme Fear";

    const message = value >= 75 ? "Market sentiment is driven by extreme greed."
        : value >= 55 ? "Market sentiment is currently driven by greed."
            : value >= 50 ? "Market sentiment is currently neutral."
                : value >= 25 ? "Market sentiment is currently driven by fear."
                    : "Market sentiment is driven by extreme fear.";
    return <>
        <p className={styles.value} style={{ color }}>{label}</p >
        <p className={`${utils.textSm} ${utils.textGray} ${styles.message}`}>{message}</p>
    </>
}