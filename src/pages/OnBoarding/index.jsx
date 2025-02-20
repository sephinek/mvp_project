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

const Home = () => {
  const [step, setStep] = useState(0);
  const [onBoardingArr, setOnBoardingArr] = useState([]);
  const setMyPlan = useSetRecoilState(myPlanState);
  // const { routePage } = useNavigationPage();

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
      console.log('이전 상태', prev);
      console.log('새로운 vision 값', vision);
      return { ...prev, vision };
    });
    nextStep();
    // routePage('/main', [...onBoardingArr, item]);
  };

  // 아래 주석 건드리지 마세요!!!
  // useEffect(() => {
  //   const data = localStorage.getItem('onboardingData');
  //   if (JSON.parse(data)) {
  //     routePage('/main', [...onBoardingArr, JSON.parse(data)]);
  //   }
  // });

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
      return (
        <OnboardingStepVision nextStep={handlePage} type={onBoardingArr[4]} />
      );

    default:
      return <p>오류가 있습니다 새로고침 해주세요</p>;
  }
};

export default Home;
