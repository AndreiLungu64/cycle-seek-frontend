import { CircularProgressbar } from 'react-circular-progressbar';

export function FearAndGreedCard() {
    return <div>
        <FearGreedProgressbar />
    </div>
}

function FearGreedProgressbar() {
    return <div style={{ width: 100, height: 100 }}>
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
                    fontSize: '16px',
                    fontWeight: 700,
                    transform: 'translateX(-8px) translateY(5px)',
                },
            }}
        />
    </div>
}