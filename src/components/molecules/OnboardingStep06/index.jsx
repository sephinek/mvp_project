import { useState } from 'react';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';
import OnboardingCheckList from '../OnboardingCheckList';
import OnboardingYesIcon from '../../../assets/icons/toss/yes.svg';
import OnboardingNoIcon from '../../../assets/icons/toss/no.svg';
import OnboardingQuestionIcon from '../../../assets/icons/toss/question-mark.svg';

const OnboardingStep06 = ({ nextStep, beforeStep, type, setOnBoardingArr }) => {
  const [target, setTarget] = useState();

  const handleNextStep = () => {
    if (!target) return;

    if (target !== 'yes') {
      setOnBoardingArr((prev) => {
        const result = [...prev];
        result[4] = target;
        return result;
      });
      beforeStep();
    } else {
      nextStep(type);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>

      <div className={styles.contentContainer}>
        <OnBoardingTitle>
          나의 꿈은 &quot;{type} 사람&quot; 인가요?
        </OnBoardingTitle>

        <div className={styles.button_wrap}>
          <OnboardingCheckList
            name='step01'
            choice='single'
            items={[
              {
                value: 'yes',
                children: '맞아요',
                icon: OnboardingYesIcon,
                targetFn: () => setTarget('yes'),
              },
              {
                value: 'no',
                children: '아니요',
                icon: OnboardingNoIcon,
                targetFn: () => setTarget('no'),
              },
              {
                value: 'dontKnow',
                children: '잘 모르겠어요',
                icon: OnboardingQuestionIcon,
                targetFn: () => setTarget('dontKnow'),
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

export default OnboardingStep06;
