import { matchPath, Outlet, useLocation } from 'react-router-dom';
import ReflectionTab from '../../components/atoms/ReflectionTab';
import ReflectionTopBar from '../../components/atoms/ReflectionTopBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';

export default function Reflection() {
  const { state, routePage } = useNavigationPage();
  const location = useLocation();

  const hiddenRoutes = ['reflection/review/:id'];

  const shouldHideTab = hiddenRoutes.some((pattern) =>
    matchPath(pattern, location.pathname)
  );

  return (
    <>
      <section className={styles.reflectionPage}>
        <ReflectionTopBar>점검데이</ReflectionTopBar>
        {!shouldHideTab && <ReflectionTab />}
        <div className={styles.reflectionContents}>
          <Outlet />
        </div>
      </section>
    </>
  );
}
