import styles from '@styles/Header/Header.module.scss'

import InvestmentCalculatorLogo from '@images/investment-calculator-logo.png'

const Header = () => {
    return (
        <section className={styles.headerSection}>
            <h1>Investment Calculator</h1>
            <img
                src={InvestmentCalculatorLogo}
                alt="Investment calculator money bag"
            />
        </section>
    )
}

export { Header }
