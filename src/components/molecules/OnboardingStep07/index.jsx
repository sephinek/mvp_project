import { useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';

const OnBoardingStep07 = ({ nextStep, beforeStep, type }) => {
  const ref = useRef(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    value ? setIsConfirmed(true) : setIsConfirmed(false);
  };

  const handleNextStep = () => {
    nextStep(ref.current.value);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>

      <div className={styles.contentContainer}>
        <OnBoardingTitle secondLine={`우선 한 가지만 작성해보세요.\n ex) 건강, 재정, 네트워킹, 영어 등`}>
          그 비전을 이루려면 어떤
          <br />
          세부적인 목표가 필요할까요?
        </OnBoardingTitle>

        <Input inputRef={ref} onChange={handleChange} />
      </div>

      <div className={styles.buttonWrap}>
        <Button
          theme='secondary'
          disabled={!isConfirmed}
          onClick={handleNextStep}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnBoardingStep07;
