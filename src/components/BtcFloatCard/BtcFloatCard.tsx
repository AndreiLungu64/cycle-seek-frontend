import btc3dIcon from "../../assets/BtcFloatCard/btc-3d-icon.png";
import styles from "./BtcFloatCard.module.css";

export function BtcFloatCard() {
    return <div>
        <img src={btc3dIcon} className={styles.icon} alt="Bitcoin 3D Icon" />
    </div >
}