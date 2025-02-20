import Lucid01 from '../../components/atoms/Lucid01';
import Lucid02 from '../../components/atoms/Lucid02';
import Lucid03 from '../../components/atoms/Lucid03';
import ReflectionGuide from '../../components/atoms/ReflectionGuide';
import ReflectionPlanCheckState from '../../components/atoms/ReflectionPlanCheckState';
import Title from '../../components/atoms/Title';
import useNavigationPage from '../../hooks/useNavigationPage';

const Home = () => {
  const { state } = useNavigationPage();

  return (
    <>
      <Title>나의 비전은 {state}</Title>
      <ReflectionGuide></ReflectionGuide>
    </>
  );
};

export default Home;
