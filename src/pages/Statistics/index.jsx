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

          {/* 여기 자체를 컴포넌트로 만들어도 될 듯*/}
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
          
          <div className={styles.contentBox}>
            <div className={styles.goalWrap}>
              <ul className={styles.goalsList}>
                
                {/* 복사해온 코드*/}
                <li className={styles.goalBox}>
                  <div className={styles.titleBox}>
                    <span className={styles.title}>창의적 활동 지속하기</span>
                  </div>
                  <div>
                    <div className={styles.percentageAndDueDate}>
                      <span className={styles.percentage}>30%</span>
                      <span className={styles.dueDate}>01/01/2026</span>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.full}>
                        <div className={styles.filled}></div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={styles.goalBox}>
                  <div className={styles.titleBox}>
                    <span className={styles.title}>창의적 활동 지속하기</span>
                  </div>
                  <div>
                    <div className={styles.percentageAndDueDate}>
                      <span className={styles.percentage}>30%</span>
                      <span className={styles.dueDate}>01/01/2026</span>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.full}>
                        <div className={styles.filled}></div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={styles.goalBox}>
                  <div className={styles.titleBox}>
                    <span className={styles.title}>창의적 활동 지속하기</span>
                  </div>
                  <div>
                    <div className={styles.percentageAndDueDate}>
                      <span className={styles.percentage}>30%</span>
                      <span className={styles.dueDate}>01/01/2026</span>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.full}>
                        <div className={styles.filled}></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
