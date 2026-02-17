import styles from "./StatsCard.module.css"

interface StatsCardProps {
    children: React.ReactNode,
    title: string,
}

export function StatsCard({ children, title }: StatsCardProps) {
    return <div className={`${styles.card}`}>
        <h2 className={styles.title}>{title}</h2>
        {children}
    </div >
}