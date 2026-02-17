import { useState } from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

export function Navbar() {
    return <div className={styles.navbarWrapper}>
        <NavbarBtn text="Dashboard" path="/" />
        <NavbarBtn text="Chart" path="/chart" />
        <NavbarBtn text="Trades" path="/trades" />
    </div>
}

function NavbarBtn({ text, path }: { text: string, path: string }) {
    const selected = useState(false);
    const btnState = selected ? "inactive" : "active";
    return <button className={`${styles.btn} styles.${btnState}`}>
        <Link to={path} className={`${styles.link}`}>{text}</Link>
    </button >

}