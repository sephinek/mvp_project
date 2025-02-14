import { Outlet } from 'react-router-dom';
import useNavigationPage from '../../hooks/useNavigationPage';
import StatisticsProfile from '../../components/atoms/StatisticsProfile'
import styles from './index.module.css';

export default function Reflection() {
  const { state, routePage } = useNavigationPage();

  return (
    <>
      <section className={styles.statisticsPage}>
        <StatisticsProfile></StatisticsProfile>
      </section>
    </>
  );
}
