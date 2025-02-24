import { useState } from 'react';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnboardingCheckList from '../OnboardingCheckList';
import OnboardingYesIcon from '../../../assets/icons/toss/yes.svg';
import OnboardingNoIcon from '../../../assets/icons/toss/no.svg';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';

const OnboardingStep01 = ({ nextStep, beforeStep }) => {
  const [target, setTarget] = useState();

  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>
      <div className={styles.contentContainer}>
        <OnBoardingTitle>
          지금 꿈꾸고 있는
          <br />
          나의 미래의 모습이 있나요?
        </OnBoardingTitle>

        <div className={styles.button_wrap}>
          <OnboardingCheckList
            name='step01'
            choice='single'
            items={[
              {
                value: 'yes',
                children: '있어요!',
                icon: OnboardingYesIcon,
                targetFn: () => setTarget('yes'),
              },
              {
                value: 'no',
                children: '아직 없어요',
                icon: OnboardingNoIcon,
                targetFn: () => setTarget('no'),
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.bottomBtn}>
        <Button
          theme='secondary'
          disabled={!target}
          onClick={() => nextStep(target)}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep01;
