import { useEffect, useRef, useState } from 'react';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';
import Input from '../../atoms/Input';
import OnboardingYesIcon from '../../../assets/icons/toss/yes.svg';
import OnboardingCheckList from '../OnboardingCheckList';

const OnboardingStep09 = ({ nextStep, beforeStep, type }) => {
  const ref = useRef(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [target, setTarget] = useState(false);

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
          <OnBoardingTitle secondLine='ex) 창작하는 것, 사람들에게 위로를 주는 것, 큰 성취를 이루는 것'>
            내가 생각하는
            <br />
            나의 꿈을 적어주세요.
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
        <OnBoardingTitle>
          다른 사람들이
          <br />
          많이 꾸는 꿈들을 모아봤어요.
          <br />
          생각했던 꿈이 있으면
          <br />
          선택해주세요
        </OnBoardingTitle>

        <div className={styles.button_wrap}>
          <OnboardingCheckList
            name='step01'
            choice='single'
            items={[
              {
                value: '창의적인 활동을 지속적으로 이어가기',
                children: '창의적인 활동을 지속적으로 이어가기',
                icon: OnboardingYesIcon,
                targetFn: () =>
                  setTarget('창의적인 활동을 지속적으로 이어가기'),
              },
              {
                value: '매달 새로운 지식이나 기술 배우기',
                children: '매달 새로운 지식이나 기술 배우기',
                icon: OnboardingYesIcon,
                targetFn: () => setTarget('매달 새로운 지식이나 기술 배우기'),
              },
              {
                value: '건강한 생활 습관을 유지하기',
                children: '건강한 생활 습관을 유지하기',
                icon: OnboardingYesIcon,
                targetFn: () => setTarget('건강한 생활 습관을 유지하기'),
              },
              {
                value: '재정적인 자유 달성하기',
                children: '재정적인 자유 달성하기',
                icon: OnboardingYesIcon,
                targetFn: () => setTarget('재정적인 자유 달성하기'),
              },
              {
                value: '사회적인 네트워크 구축하기',
                children: '사회적인 네트워크 구축하기',
                icon: OnboardingYesIcon,
                targetFn: () => setTarget('사회적인 네트워크 구축하기'),
              },
            ]}
          />
        </div>
      </div>
      <button onClick={beforeStep}>다시 생성하기</button>

      <div className={styles.bottomBtn}>
        <Button theme='secondary' disabled={!target} onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep09;
