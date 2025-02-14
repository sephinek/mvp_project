import ReflectionTab from '../../components/atoms/ReflectionTab';
import ReflectionTopBar from '../../components/atoms/ReflectionTopBar';
import useNavigationPage from '../../hooks/useNavigationPage';

export default function Reflection() {
  const { state, routePage } = useNavigationPage();

  return (
    <>
      <div>
        <ReflectionTopBar>점검데이</ReflectionTopBar>
        <ReflectionTab></ReflectionTab>
      </div>
    </>
  );
}