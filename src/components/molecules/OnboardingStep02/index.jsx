import { useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';

const OnboardingStep02 = ({ nextStep, beforeStep, type }) => {
  const ref = useRef(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    value ? setIsConfirmed(true) : setIsConfirmed(false);
  };

  const handleNextStep = (type) => {
    nextStep(type);
  };

  if (type === 'yes') {
    return (
      <div className={styles.wrap}>
        <div className={styles.goBackBox}>
          <GoBackHeader handler={beforeStep} />
        </div>

        <div className={styles.contentContainer}>
          <OnBoardingTitle secondLine='1줄 이내로 적어주세요.'>
            꿈꾸는 나의
            <br />
            미래의 모습을 적어주세요.
          </OnBoardingTitle>

          <Input inputRef={ref} onChange={handleChange} />
        </div>

        <div className={styles.bottomBtn}>
          <Button
            theme='secondary'
            disabled={!isConfirmed}
            onClick={() => handleNextStep('yes')}
          >
            다음
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>

      <div className={styles.contentContainer}>
        <OnBoardingTitle secondLine='ex) 디자이너, 탐험가, 아티스트'>
          나의 어릴 적 꿈
          <br />
          3가지를 적어보세요!
        </OnBoardingTitle>

        <Input inputRef={ref} onChange={handleChange} />
      </div>

      <div className={styles.bottomBtn}>
        <Button
          theme='secondary'
          disabled={!isConfirmed}
          onClick={() => handleNextStep('no')}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep02;
