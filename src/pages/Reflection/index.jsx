import ReflectionEmptyState from '../../components/atoms/ReflectionEmptyState';
import ReflectionPlusButton from '../../components/atoms/ReflectionPlusButton';
import ReflectionTab from '../../components/atoms/ReflectionTab';
import ReflectionTopBar from '../../components/atoms/ReflectionTopBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';

export default function Reflection() {
  const { state, routePage } = useNavigationPage();

  return (
    <>
      <div className={styles.reflectionPage}>
        <ReflectionTopBar>점검데이</ReflectionTopBar>
        <ReflectionTab></ReflectionTab>
        <ReflectionEmptyState></ReflectionEmptyState>
        <ReflectionPlusButton></ReflectionPlusButton>
      </div>
    </>
  );
}