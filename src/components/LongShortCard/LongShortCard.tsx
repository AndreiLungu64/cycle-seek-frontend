import SquareCard from "../SquareCard"
import styles from './LongShortCard.module.css'

export function LongShortCard() {
    return <SquareCard title={"Long/Short Ratio"}>
        <LongShortRatio />
    </SquareCard>
}

function LongShortRatio() {
    return <>
        <p>1.24</p>
        <progress id={styles.longShortBar} max="100" value="70">70%</progress>
    </>
}