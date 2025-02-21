import OnBoardingTitle from '../../atoms/OnboardingTitle';
import Lucid03 from '../../atoms/Lucid03';
import styles from './index.module.css';
import Button from '../../atoms/Button';

const OnBoardingStep11 = ({ nextStep }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.space}></div>
      <OnBoardingTitle secondLine='루시드와 함께 비전을 향한 여정을 시작하세요'>
        이제 직접
        <br />
        시작해 볼 시간이에요!
      </OnBoardingTitle>
      <Lucid03 />
      <Button onClick={nextStep}>시작할래요!</Button>
    </div>
  );
};

export default OnBoardingStep11;
