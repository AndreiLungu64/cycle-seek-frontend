import styles from "./ProgressBar.module.css"

export function ProgressBar({ max, value, color, background }: { max: number, value: number, color: string, background: string }) {
    return <progress className={styles.bar} max={max} value={value} style={{ '--bar-color': color, "--bar-bg": background } as React.CSSProperties} />
}