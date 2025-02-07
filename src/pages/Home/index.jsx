import Title from '../../components/atoms/Title';
import useNavigationPage from '../../hooks/useNavigationPage';

const Home = () => {
  const { state } = useNavigationPage();

  return (
    <>
      <Title>나의 비전은 {state}</Title>
    </>
  );
};

export default Home;
