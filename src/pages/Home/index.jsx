import { useState } from 'react'

import OnBoardingStart from '../../components/molecules/OnBoardingStart'
import OnBoardingYourFuture from '../../components/molecules/OnBoardingYourFuture'

const Home = () => {
    const [step, setStep] = useState(0)
    const [onBoardingArr, setOnBoardingArr] = useState([])

    const nextStep = () => {
        setStep(step + 1)
    }

    const beforeStep = () => {
        setStep(step - 1)
    }

    const handleOnBoarding = item => {
        const result = [...onBoardingArr]
        result[step] = item
        setOnBoardingArr(result)
        nextStep()
    }

    switch (step) {
        case 0:
            return <OnBoardingStart nextStep={handleOnBoarding} />
        case 1:
            if (onBoardingArr[0] === 'yes') {
                return <OnBoardingYourFuture nextStep={handleOnBoarding} />
            } else {
                return <div>아니요 선택함</div>
            }
        case 2:
            return <div>{onBoardingArr[1]}</div>
        default:
            break
    }
}

export default Home
