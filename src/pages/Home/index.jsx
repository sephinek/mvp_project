import Lucid01 from '../../components/atoms/Lucid01';
import Lucid02 from '../../components/atoms/Lucid02';
import Lucid03 from '../../components/atoms/Lucid03';
import Title from '../../components/atoms/Title';
import useNavigationPage from '../../hooks/useNavigationPage';

const Home = () => {
  const { state } = useNavigationPage();

  return (
    <>
      <Title>나의 비전은 {state}</Title>
      <Lucid01></Lucid01>
      <Lucid02></Lucid02>
      <Lucid03></Lucid03>
    </>
  );
};

export default Home;
