import OnBoardingTitle from '../../atoms/OnboardingTitle';
import Lucid02 from '../../atoms/Lucid01';
import styles from './index.module.css';
import Button from '../../atoms/Button';

const OnboardingStepVision = ({ nextStep, type }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.space}></div>
      <OnBoardingTitle
        type='vision'
        secondLine="루시드는 앞으로 이것을 '비전'이라고 부를거예요.💫"
        thirdLine='비전은 마이페이지에서 변경할 수 있어요.'
      >
        나의 꿈은 &quot;{type}&nbsp;사람&quot; 이에요!
      </OnBoardingTitle>

      <Lucid02 />
      <div className={styles.buttonWrap}>
        <Button theme='secondary' onClick={nextStep}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStepVision;
