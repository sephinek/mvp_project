import { Outlet } from 'react-router-dom';
import useNavigationPage from '../../hooks/useNavigationPage';
import StatisticsProfile from '../../components/atoms/StatisticsProfile'
import styles from './index.module.css';
import StatisticsStatusCard from '../../components/atoms/StatisticsStatusCard';

export default function Reflection() {
  const { state, routePage } = useNavigationPage();

  return (
    <>
      <section className={styles.statisticsPage}>
        <StatisticsProfile></StatisticsProfile>
        <div className={styles.statisticsWrap}>
          <StatisticsStatusCard></StatisticsStatusCard>

        </div>
      </section>
    </>
  );
}
