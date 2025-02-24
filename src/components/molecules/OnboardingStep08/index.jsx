import { useState } from 'react';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';
import OnboardingCheckList from '../OnboardingCheckList';
import OnboardingYesIcon from '../../../assets/icons/toss/yes.svg';
import CassandraIcon from '../../../assets/icons/toss/cassandra.svg';

const OnboardingStep08 = ({ nextStep, beforeStep, type }) => {
  const [target, setTarget] = useState();

  const handleNextStep = () => {
    if (!target) return;
    console.log('target', target);
    nextStep(target);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>

      <div className={styles.contentContainer}>
        <OnBoardingTitle secondLine='어렵다면 계획을 추천 받을 수 있어요!'>
          그 목표를 달성하려면
          <br />
          어떤 계획을 세워야 할까요?
        </OnBoardingTitle>

        <div className={styles.button_wrap}>
          <OnboardingCheckList
            name='step01'
            choice='single'
            items={[
              {
                value: 'yes',
                children: '제가 직접 작성할게요',
                icon: OnboardingYesIcon,
                targetFn: () => setTarget('yes'),
              },
              {
                value: 'no',
                children: '추천 받을래요',
                icon: CassandraIcon,
                targetFn: () => setTarget('no'),
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.buttonWrap}>
        <Button theme='secondary' disabled={!target} onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep08;
