import { useState } from 'react'

import { Header } from '@components/Header/Header'
import { UserInput } from '@components/UserInput/UserInput'
import { CalculationTable } from '@components/CalculationTable/CalculationTable'

import { calculateInvestmentResults } from '@utils/investment'

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

    const calculationResult = calculateInvestmentResults(userInput)

    return (
        <>
            <Header />
            <UserInput
                userInput={userInput}
                setUserInputHandler={setUserInput}
            />
            <CalculationTable
                userInput={userInput}
                calculationResult={calculationResult}
            />
        </>
    )
}

export default App
