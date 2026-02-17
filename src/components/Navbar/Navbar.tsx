import styles from "./Navbar.module.css"

export function Navbar() {
    return <div className={styles.navbarWrapper}>
        <NavbarBtn text="Dashboard" />
        <NavbarBtn text="Chart" />
        <NavbarBtn text="Trades" />
    </div>
}

function NavbarBtn({ text }: { text: string }) {
    return <button className={styles.btn}>{text}</button>
}