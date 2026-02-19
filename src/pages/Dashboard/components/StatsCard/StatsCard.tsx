import styles from "./StatsCard.module.css"
import utils from "../../../../styles/utilities.module.css";

interface StatsCardProps {
    children: React.ReactNode,
    title: string,
}

export function StatsCard({ children, title }: StatsCardProps) {
    return <div className={`${utils.cardBase} ${styles.card}`}>
        <h2 className={`${styles.title}`}>{title}</h2>
        {children}
    </div >
}