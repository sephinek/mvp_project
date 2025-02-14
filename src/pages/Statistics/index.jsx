import { Outlet } from 'react-router-dom';
import useNavigationPage from '../../hooks/useNavigationPage';
import StatisticsProfile from '../../components/atoms/StatisticsProfile';
import styles from './index.module.css';
import StatisticsStatusCard from '../../components/atoms/StatisticsStatusCard';
import StatisticsPeriodTabs from '../../components/atoms/StatisticsPeriodTabs';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import ChevronRightButton from '../../components/common/Icons/ChevronRightButton';
import StatisticsPlanList from '../../components/atoms/StatisticsPlanList';

export default function Reflection() {
  const { state, routePage } = useNavigationPage();

  return (
    <>
      <section className={styles.statisticsPage}>
        <StatisticsProfile></StatisticsProfile>
        <div className={styles.statisticsWrap}>
          <StatisticsStatusCard></StatisticsStatusCard>
          <div className={styles.contentBox}>
            <StatisticsPeriodTabs></StatisticsPeriodTabs>
            <span></span>
            <div className={styles.yearAndMonthBar}>
              <ChevronLeftButton></ChevronLeftButton>
                <div className={styles.yearnAndMonthBox}>
                  <span>1년</span>
                  <span>1월</span>
                </div>
              <ChevronRightButton></ChevronRightButton>
            </div>
            <span></span>
            <div className={styles.graph}></div>
            <span></span>
            <StatisticsPlanList></StatisticsPlanList>
          </div>

        </div>
      </section>
    </>
  );
}
