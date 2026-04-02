import { useState } from "react";
import styles from "./ConverterCard.module.css";
import utils from "../../../../styles/utilities.module.css";
import type { CryptoPrices } from "../../../../hooks/useConverterPrices";

type CryptoKey = keyof CryptoPrices;

export function ConverterCard({ prices }: { prices: CryptoPrices }) {
    const [selectedCrypto, setSelectedCrypto] = useState<CryptoKey>("BTC");
    const [cryptoAmount, setCryptoAmount] = useState<string>("");
    const [usdAmount, setUsdAmount] = useState<string>("");

    const currentPrice = prices[selectedCrypto];

    function handleCryptoChange(value: string) {
        setCryptoAmount(value);
        if (value === "" || isNaN(Number(value))) {
            setUsdAmount("");
            return;
        }
        setUsdAmount((Number(value) * currentPrice).toFixed(2));
    }

    function handleUsdChange(value: string) {
        setUsdAmount(value);
        if (value === "" || isNaN(Number(value))) {
            setCryptoAmount("");
            return;
        }
        setCryptoAmount((Number(value) / currentPrice).toFixed(8));
    }

    function handleCryptoSelect(crypto: CryptoKey) {
        setSelectedCrypto(crypto);
        if (cryptoAmount && !isNaN(Number(cryptoAmount))) {
            setUsdAmount((Number(cryptoAmount) * prices[crypto]).toFixed(2));
        }
    }

    return (
        <div className={`${utils.cardBase} ${styles.card}`}>
            <h2 className={styles.title}>Crypto Converter</h2>
            <p className={styles.priceLabel}>
                1 {selectedCrypto} = ${currentPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>

            <div className={styles.inputGroup}>
                <label className={styles.label}>Crypto</label>
                <div className={styles.inputRow}>
                    <select
                        className={styles.select}
                        value={selectedCrypto}
                        onChange={e => handleCryptoSelect(e.target.value as CryptoKey)}
                    >
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="SOL">SOL</option>
                        <option value="BNB">BNB</option>
                        <option value="ADA">ADA</option>
                        <option value="DOT">DOT</option>
                        <option value="AVAX">AVAX</option>
                        <option value="XRP">XRP</option>
                    </select>
                    <input
                        className={styles.input}
                        type="number"
                        placeholder="0.00"
                        value={cryptoAmount}
                        onChange={e => handleCryptoChange(e.target.value)}
                    />
                </div>
            </div>

            <button className={styles.swapIcon} onClick={() => {
                const prevUsd = usdAmount;
                const prevCrypto = cryptoAmount;
                setCryptoAmount(prevUsd);
                setUsdAmount(prevCrypto);
            }} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="7 3 7 21"></polyline>
                    <polyline points="3 17 7 21 11 17"></polyline>
                    <polyline points="17 21 17 3"></polyline>
                    <polyline points="13 7 17 3 21 7"></polyline>
                </svg>
            </button>

            <div className={styles.inputGroup}>
                <label className={styles.label}>USD</label>
                <input
                    className={styles.input}
                    type="number"
                    placeholder="0.00"
                    value={usdAmount}
                    onChange={e => handleUsdChange(e.target.value)}
                />
            </div>
        </div>
    );
}
