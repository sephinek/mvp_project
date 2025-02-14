import { useLocation } from 'react-router-dom';
import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import ChevronRightButton from '../../components/common/Icons/ChevronRightButton';
import styles from './index.module.css';
import PlansList from '../../components/molecules/PlansList';

export default function GoalDetails() {
  const { state: goal } = useLocation();

  return (
    <section>
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={ChevronRightButton}
        title='Goal(목표) 상세'
      ></TopBar>

      <section className={styles.goalInfo}>
        <div className={styles.goalTitleBox}>
          <div className={styles.color}></div>
          <span className={styles.goalTitle}>{goal.title}</span>
        </div>

        <div className={styles.goalInfoContainer}>
          <div className={styles.icon}></div>
          <div className={styles.infoBox}>
            <span className={styles.infoText}>
              {goal.startDate.toLocaleDateString()}
            </span>
            <span className={styles.infoText}>~</span>
            <span className={styles.infoText}>
              {goal.endDate.toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className={styles.goalInfoContainer}>
          <div className={styles.icon}></div>
          <div className={styles.infoBox}>
            <span className={styles.infoText}>D-90</span>
            <span className={styles.infoText}>지금까지 10% 달성했어요</span>
          </div>
        </div>
      </section>
      <PlansList plans={goal?.plans} />
    </section>
  );
}
