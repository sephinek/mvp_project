import { useEffect, useRef, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import Input from '../../atoms/Input';
import OnboardingCheckList from '../OnboardingCheckList';
import AiIcon from '../../../assets/icons/humble/ai.svg';

import styles from './index.module.css';

const OnboardingStep09 = ({ nextStep, beforeStep, type }) => {
  const ref = useRef(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [target, setTarget] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    value ? setIsConfirmed(true) : setIsConfirmed(false);
  };

  const handleNextStep = () => {
    if (type === 'yes') {
      nextStep(ref.current.value);
    } else {
      nextStep(target);
    }
  };

  if (type === 'yes') {
    return (
      <div className={styles.wrap}>
        <div className={styles.goBackBox}>
          <GoBackHeader handler={beforeStep} />
        </div>

        <div className={styles.contentContainer}>
          <OnBoardingTitle
            secondLine='우선 한 가지만 작성해보세요.
ex) 매일 30분씩 영어 공부하기'
          >
            그 목표를 달성하려면 어떤 계획을 세워야 할까요?
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
  }

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

        {isLoading ? (
          <div className={styles.loader}>
            <ClimbingBoxLoader color='#ff1b1a' />
          </div>
        ) : (
          <div className={styles.button_wrap}>
            <OnboardingCheckList
              name='step01'
              choice='single'
              items={[
                {
                  value: '창의적인 활동을 지속적으로 이어가기',
                  children: '창의적인 활동을 지속적으로 이어가기',
                  targetFn: () =>
                    setTarget('창의적인 활동을 지속적으로 이어가기'),
                },
                {
                  value: '매달 새로운 지식이나 기술 배우기',
                  children: '매달 새로운 지식이나 기술 배우기',
                  targetFn: () => setTarget('매달 새로운 지식이나 기술 배우기'),
                },
                {
                  value: '건강한 생활 습관을 유지하기',
                  children: '건강한 생활 습관을 유지하기',
                  targetFn: () => setTarget('건강한 생활 습관을 유지하기'),
                },
                {
                  value: '재정적인 자유 달성하기',
                  children: '재정적인 자유 달성하기',
                  targetFn: () => setTarget('재정적인 자유 달성하기'),
                },
                {
                  value: '사회적인 네트워크 구축하기',
                  children: '사회적인 네트워크 구축하기',
                  targetFn: () => setTarget('사회적인 네트워크 구축하기'),
                },
              ]}
            />

            <button className={styles.aiBtn}>
              <img src={AiIcon} className={styles.aiIcon} />
              <span className={styles.aiText}>다시 생성하기</span>
            </button>
          </div>
        )}
      </div>

      <div className={styles.buttonWrap}>
        <Button theme='secondary' disabled={!target} onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep09;
