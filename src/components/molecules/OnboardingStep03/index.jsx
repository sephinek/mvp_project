import { useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';

const OnboardingStep03 = ({ nextStep, beforeStep, type }) => {
  const ref = useRef(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    value ? setIsConfirmed(true) : setIsConfirmed(false);
  };

  const handleNextStep = () => {
    nextStep(ref.current.value);
  };

  if (type === 'yes') {
    return (
      <div className={styles.wrap}>
        <div className={styles.goBackBox}>
          <GoBackHeader handler={beforeStep} />
        </div>

        <div className={styles.contentContainer}>
          <OnBoardingTitle secondLine={`ex) 창작하는 것, 사람들에게 위로를 주는 것,\n 큰 성취를 이루는 것 등`}>
            그 꿈의 가치가
            <br />
            무엇이라고 생각하나요?
          </OnBoardingTitle>

          <Input inputRef={ref} type='visible' onChange={handleChange} />
        </div>

        <div className={styles.bottomBtn}>
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
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>

      <div className={styles.contentContainer}>
        <OnBoardingTitle secondLine='ex) 자유로운 방식을 추구하는 것, 모험을 즐기는 것, 새로운 경험을 추구하는 것'>
          그 세 가지 꿈의 공통점이
          <br />
          무엇이라고 생각하나요?
        </OnBoardingTitle>

        <Input inputRef={ref} type='visible' onChange={handleChange} />
      </div>

      <div className={styles.bottomBtn}>
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

export default OnboardingStep03;
