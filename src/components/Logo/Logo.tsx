import LogoImg from "../../assets/Logo/logo.png"
import styles from "./Logo.module.css"

export function Logo() {
    return <div className={styles.logoWrapper}>
        <img src={LogoImg} className={styles.logo} alt="Logo" />
        <p className={styles.logoText}>CycleSeek</p>
    </div>


}