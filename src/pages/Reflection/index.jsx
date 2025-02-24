import { matchPath, Outlet, useLocation } from 'react-router-dom';
import ReflectionTab from '../../components/atoms/ReflectionTab';
import ReflectionTopBar from '../../components/atoms/ReflectionTopBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';

export default function Reflection() {
  const { state, routePage } = useNavigationPage();
  const location = useLocation();

  const hiddenRoutes = ['reflection/review/:id', 'reflection/guide/:id'];

  const shouldHideElements = hiddenRoutes.some((pattern) =>
    matchPath(pattern, location.pathname)
  );

  return (
    <>
      <section className={styles.reflectionPage}>
        {!shouldHideElements && <ReflectionTopBar>점검데이</ReflectionTopBar>}
        {!shouldHideElements && <ReflectionTab />}
        <div className={styles.reflectionContents}>
          <Outlet />
        </div>
      </section>
    </>
  );
}
