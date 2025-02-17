import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import styles from './index.module.css';
import { useState } from 'react';
import GoBackHeader from '../../common/GoBackHeader';
import OnboardingCheckList from '../OnboardingCheckList';
import OnboardingYesIcon from '../../../assets/icons/toss/yes.svg';
import OnboardingNoIcon from '../../../assets/icons/toss/no.svg';

const OnBoardingStep01 = ({ nextStep, beforeStep }) => {
  const [target, setTarget] = useState();

  return (
    <div className={styles.wrap}>
      <GoBackHeader handler={beforeStep} />
      <Title>
        지금 꿈꾸고 있는
        <br />
        나의 미래의 모습이 있나요?
      </Title>

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
      <Button disabled={!target} onClick={() => nextStep(target)}>
        다음
      </Button>
    </div>
  );
};

export default OnBoardingStep01;
