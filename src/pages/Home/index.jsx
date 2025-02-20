import OnBoardingTitle from '../../components/atoms/OnboardingTitle';
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
