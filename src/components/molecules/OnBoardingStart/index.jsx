import Button from '../../atoms/Button'
import Title from '../../atoms/Title'

const OnBoardingStart = ({ nextStep }) => {
    return (
        <div>
            <Title>지금 꿈꾸고 있는 나의 미래의 모습이 있나요?</Title>
            <Button onClick={() => nextStep('yes')}>예</Button>
            <Button onClick={() => nextStep('no')}>아니요</Button>
        </div>
    )
}

export default OnBoardingStart
