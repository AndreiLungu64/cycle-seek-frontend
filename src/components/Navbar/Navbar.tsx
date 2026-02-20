import styles from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom";
import utils from "../../styles/utilities.module.css"
import Logo from "../Logo";

export function Navbar() {
    return <div className={`${utils.cardBase} ${styles.navbarWrapper}`}>
        <Logo />
        <NavbarMenu />
    </div>
}

function NavbarMenu() {
    const iconSize = "20";
    return <div className={styles.menuWrapper} >
        <NavbarBtn text="Dashboard" path="/"><svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></NavbarBtn>
        <NavbarBtn text="Chart" path="/chart" ><svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg></NavbarBtn>
        <NavbarBtn text="Trades" path="/trades" ><svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></NavbarBtn>
    </ div>
}

function NavbarBtn({ text, path, children }: { text: string, path: string, children?: React.ReactNode }) {
    const { pathname } = useLocation();
    const isActive = pathname === path;
    const btnState = isActive ? "btnActive" : "btnInactive";
    return (
        <Link
            className={`${utils.btnBase} ${styles.btnNavbar} ${styles[btnState]}`}
            to={path}
        ><div className={styles.btnContentWrapper}>
                {children}{text}
            </div>
        </Link>
    );
}