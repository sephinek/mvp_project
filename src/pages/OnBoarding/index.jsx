import { useState } from 'react';
import OnBoardingStep00 from '../../components/molecules/OnboardingStep00';
import OnBoardingStep01 from '../../components/molecules/OnboardingStep01';
import OnBoardingStep02 from '../../components/molecules/OnboardingStep02';
// import useNavigationPage from '../../hooks/useNavigationPage';
import { useSetRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import OnboardingStep03 from '../../components/molecules/OnboardingStep03';
import OnboardingStep04 from '../../components/molecules/OnboardingStep04';
import OnboardingStepVision from '../../components/molecules/OnboardingStepVision';
import OnboardingStep05 from '../../components/molecules/OnboardingStep05';
import OnboardingStep06 from '../../components/molecules/OnboardingStep06';
import OnBoardingStep07 from '../../components/molecules/OnBoardingStep07';
import OnboardingStep08 from '../../components/molecules/OnboardingStep08';
import OnboardingStep09 from '../../components/molecules/OnboardingStep09';
import { v4 as uuid } from 'uuid';
import useNavigationPage from '../../hooks/useNavigationPage';

const OnBoarding = () => {
  const [step, setStep] = useState(0);
  const [onBoardingArr, setOnBoardingArr] = useState([]);
  const setMyPlan = useSetRecoilState(myPlanState);
  const { routePage } = useNavigationPage();

  // 다음 단계로 보내주는 함수
  const nextStep = () => {
    setStep(step + 1);
  };

  // 이전 단계로 보내주는 함수
  const beforeStep = () => {
    setStep(step - 1);
  };

  // 현재 step을 기준으로 배열에 값을 기록하는 함수
  const handleOnBoarding = (item) => {
    const result = [...onBoardingArr];
    result[step] = item;
    setOnBoardingArr(result);
    nextStep();
  };

  const handlePage = (item, vision) => {
    const result = [...onBoardingArr];
    result[step] = item;
    setOnBoardingArr(result);
    setMyPlan((prev) => {
      return { ...prev, vision };
    });
    nextStep();
    // routePage('/main', [...onBoardingArr, item]);
  };

  const completeOnboarding = (item) => {
    setMyPlan((prev) => {
      return {
        ...prev,
        vision: onBoardingArr[6],
        goals: [
          {
            id: uuid(),
            title: onBoardingArr[8],
            color: 'green',
            startDate: new Date(),
            endDate: new Date(),
            plans: [
              {
                id: uuid(),
                title: item,
                startDate: new Date(),
                endDate: new Date(),
                completedDates: [],
                pausedDates: [],
                repetition: [], // 월 화 수 목 금 토 일 최대 7개까지
                plansCount: 1, // repetition가 수정될 때 현재 시간을 기준으로 필요한 count 개수를 계산하고 completedDates.length를 더한다.
                isPaused: false,
              },
            ],
          },
        ],
      };
    });
    routePage('/main');
  };

  // 현재 step을 기준으로 화면에 랜더링될 컴포넌트를 return 해주세요
  // 분기가 나뉘게 되면 이전 step의 값을 참조하여 if문을 이용해 분기를 나눠주세요
  // 각 컴포넌트에는 handleOnBoarding 함수를 넘겨줘 확인 버튼을 누를 때 함께 실행되게 해주세요

  switch (step) {
    case 0:
      return (
        <OnBoardingStep00 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 1:
      return (
        <OnBoardingStep01 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 2:
      return (
        <OnBoardingStep02
          nextStep={handleOnBoarding}
          beforeStep={beforeStep}
          type={onBoardingArr[1]}
        />
      );
    case 3:
      return (
        <OnboardingStep03
          nextStep={handlePage}
          beforeStep={beforeStep}
          type={onBoardingArr[2]}
        />
      );
    case 4:
      return (
        <OnboardingStep04
          nextStep={handlePage}
          beforeStep={beforeStep}
          type={onBoardingArr[3]}
        />
      );
    case 5:
      if (onBoardingArr[4] === 'yes') {
        setOnBoardingArr([
          ...onBoardingArr,
          onBoardingArr[3],
          onBoardingArr[3],
        ]);
        setStep(7);
        return <></>;
      }
      return (
        <OnboardingStep05
          nextStep={handlePage}
          beforeStep={beforeStep}
          type={onBoardingArr[4]}
        />
      );
    case 6:
      return (
        <OnboardingStep06
          nextStep={handlePage}
          beforeStep={beforeStep}
          type={onBoardingArr[5]}
          setOnBoardingArr={setOnBoardingArr}
        />
      );
    case 7:
      return (
        <OnboardingStepVision nextStep={handlePage} type={onBoardingArr[6]} />
      );
    case 8:
      return (
        <OnBoardingStep07
          nextStep={handlePage}
          beforeStep={beforeStep}
          type={onBoardingArr[7]}
        />
      );
    case 9:
      return (
        <OnboardingStep08
          nextStep={handlePage}
          beforeStep={beforeStep}
          type={onBoardingArr[8]}
        />
      );
    case 10:
      return (
        <OnboardingStep09
          nextStep={completeOnboarding}
          beforeStep={beforeStep}
          type={onBoardingArr[9]}
        />
      );
    default:
      return <p>오류가 있습니다 새로고침 해주세요</p>;
  }
};

export default OnBoarding;
