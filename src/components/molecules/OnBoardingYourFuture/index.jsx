import { useRef } from 'react'
import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'

const OnBoardingYourFuture = ({ nextStep }) => {
    const ref = useRef(null)

    const handleNextStep = () => {
        const item = ref.current.value
        nextStep(item)
    }

    return (
        <div>
            <Title>꿈꾸고 있는 미래의 모습을 적어줘</Title>
            <Input inputRef={ref} />
            <Button onClick={handleNextStep}>다음</Button>
        </div>
    )
}

export default OnBoardingYourFuture
