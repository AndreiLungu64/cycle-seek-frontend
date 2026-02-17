import styles from "./SquareCard.module.css"

interface SquareCardProps {
    children: React.ReactNode,
    title: string,
}

export function SquareCard({ children, title }: SquareCardProps) {
    return <div className={`${styles.card}`}>
        <h2 className={styles.title}>{title}</h2>
        {children}
    </div >
}