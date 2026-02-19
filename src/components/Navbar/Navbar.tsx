import styles from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom";
import utils from "../../styles/utilities.module.css"

export function Navbar() {
    return <div className={`${utils.cardBase} ${styles.navbarWrapper}`}>
        <NavbarBtn text="Dashboard" path="/" />
        <NavbarBtn text="Chart" path="/chart" />
        <NavbarBtn text="Trades" path="/trades" />
    </div>
}

function NavbarBtn({ text, path }: { text: string, path: string }) {
    const { pathname } = useLocation();
    const isActive = pathname === path;
    const btnState = isActive ? "btnActive" : "btnInactive";
    return (
        <Link
            className={`${utils.btnBase} ${styles.btnNavbar} ${styles[btnState]}`}
            to={path}
        >
            {text}
        </Link>
    );
}