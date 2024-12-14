import styles from '@styles/UserInput/UserInput.module.scss'

const UserInput = ({ userInput, setUserInputHandler }) => {
    const onChangeHandler = (value, updatedValue) => {
        let validatedValue = value
        if (value < 1) {
            validatedValue = 1
        }

        setUserInputHandler((prevValues) => {
            return { ...prevValues, [updatedValue]: +validatedValue }
        })
    }

    return (
        <section className={styles.userInputSection}>
            <div className={styles.inputGroup}>
                <p>
                    <label id="initialInvestment">INITIAL INVESTMENT</label>
                    <input
                        onChange={(event) => {
                            onChangeHandler(
                                event.target.value,
                                'initialInvestment'
                            )
                        }}
                        value={userInput.initialInvestment}
                        name="initialInvestment"
                        type="number"
                        required
                    />
                </p>
                <p>
                    <label id="annualInvestment">ANNUAL INVESTMENT</label>
                    <input
                        onChange={(event) => {
                            onChangeHandler(
                                event.target.value,
                                'annualInvestment'
                            )
                        }}
                        value={userInput.annualInvestment}
                        name="annualInvestment"
                        type="number"
                        required
                    />
                </p>
            </div>
            <div className={styles.inputGroup}>
                <p>
                    <label id="expectedReturn">EXPECTED RETURN </label>
                    <input
                        onChange={(event) => {
                            onChangeHandler(
                                event.target.value,
                                'expectedReturn'
                            )
                        }}
                        value={userInput.expectedReturn}
                        name="expectedReturn"
                        type="number"
                        required
                    />
                </p>
                <p>
                    <label id="duration">DURATION</label>
                    <input
                        onChange={(event) => {
                            onChangeHandler(event.target.value, 'duration')
                        }}
                        value={userInput.duration}
                        name="duration"
                        type="number"
                        required
                    />
                </p>
            </div>
        </section>
    )
}

export { UserInput }
