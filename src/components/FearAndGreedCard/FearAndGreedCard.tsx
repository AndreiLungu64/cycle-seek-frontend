import { CircularProgressbar } from 'react-circular-progressbar';
import { SquareCard } from '../SquareCard/SquareCard';
import styles from "./FearAndGreedCard.module.css";

export function FearAndGreedCard() {
    return <SquareCard title={"Fear & Greed Index"}>
        <FearGreedGraph />
        <FearGreedText />
    </SquareCard>

}

export function FearGreedGraph() {
    return <div style={{ width: 120, height: 70, overflow: "hidden", lineHeight: 1 }}>
        <CircularProgressbar
            value={10}
            maxValue={100}
            text={`${10}`}
            strokeWidth={10}
            circleRatio={0.50}
            styles={{
                root: {

                },
                path: {
                    stroke: `#84CC16`,
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
                    fontSize: '20px',
                    fontWeight: 700,
                    transform: 'translateX(-9px) translateY(5px)',
                },
            }}
        />
    </ div >
}

function FearGreedText() {
    return <>
        <p className={styles.fearGredValue}>Greed</p>
        <p className={styles.fearGredMessage}>Market sentiment is currently driven by greed.</p>
    </>
}