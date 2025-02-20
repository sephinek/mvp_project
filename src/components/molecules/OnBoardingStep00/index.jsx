import ButtonSet from '../../atoms/ButtonSet';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';

const OnBoardingStep00 = ({ nextStep }) => {
  return (
    <div className={styles.wrap}>
      <OnBoardingTitle secondLine='루시드와 함께 비전을 향한 여정을 시작해볼까요?'>
        안녕하세요!
      </OnBoardingTitle>

      <ButtonSet
        firstBtnTheme='secondary'
        firstBtnText='좋아요'
        firstOnClick={() => nextStep('yes')}
        secondBtnTheme='tertiary'
        secondBtnText='저는 계정이 있어요'
        secondOnClick={() => nextStep('no')}
      />
    </div>
  );
};

export default OnBoardingStep00;
