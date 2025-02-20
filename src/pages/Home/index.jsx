import OnBoardingTitle from '../../components/atoms/OnboardingTitle';
import Lucid01 from '../../components/atoms/Lucid01';
import Lucid02 from '../../components/atoms/Lucid02';
import Lucid03 from '../../components/atoms/Lucid03';
import ReflectionGuide from '../../components/atoms/ReflectionGuide';
import ReflectionPlanCheckState from '../../components/atoms/ReflectionPlanCheckState';
import Title from '../../components/atoms/Title';
import useNavigationPage from '../../hooks/useNavigationPage';

const Home = () => {
  const { state } = useNavigationPage();
  console.log(state);

  return (
    <>
      <OnBoardingTitle>나의 꿈은 {state} 사람 이에요!</OnBoardingTitle>
    </>
  );
};

export default Home;
