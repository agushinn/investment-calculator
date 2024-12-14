import styles from '@styles/CalculationTable/CalculationTable.module.scss'

import { formatter } from '@utils/investment'

export const CalculationTable = ({ userInput, calculationResult }) => {
    return (
        <section>
            <table className={styles.resultTable}>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {calculationResult.map((result) => {
                        const totalInterest =
                            result.valueEndOfYear -
                            result.annualInvestment * result.year -
                            userInput.initialInvestment

                        const totalAmountInvested =
                            result.valueEndOfYear - totalInterest

                        return (
                            <tr key={result.year}>
                                <td>{result.year}</td>
                                <td>
                                    {formatter.format(result.valueEndOfYear)}
                                </td>
                                <td>{formatter.format(result.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}
