import { useLocation, useNavigate } from 'react-router-dom';
import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import styles from './index.module.css';
import PlansList from '../../components/molecules/PlansList';
import EditButton from '../../components/common/Icons/EditButton';
import SectionTitle from '../../components/atoms/SectionTitle';

export default function GoalDetails() {
  const { state: goal } = useLocation();
  const navigate = useNavigate();

  const goToBackHandler = () => {
    navigate(-1);
  };

  const clickEditHandler = () => {
    navigate(`/goal/edit/${goal.id}`, {
      state: goal,
    });
  };

  return (
    <div className={styles.goalDetailContainer}>
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={EditButton}
        title='Goal(목표) 상세'
        onClickLeft={goToBackHandler}
        onClickRight={clickEditHandler}
      ></TopBar>

      <section className={styles.goalInfo}>
        <div className={styles.goalTitleBox}>
          <div className={styles.color}></div>
          <span className={styles.goalTitle}>{goal.title}</span>
        </div>

        <div className={styles.goalInfoContainer}>
          <ul>
            <li>
              <div className={styles.icon}></div>
              <div className={styles.infoBox}>
                <span className={styles.infoText}>
                  {goal.startDate.toLocaleDateString()}
                </span>
                <span className={styles.infoDash}>~</span>
                <span className={styles.infoText}>
                  {goal.endDate.toLocaleDateString()}
                </span>
              </div> 
            </li>
            <li>
              <div className={styles.icon}></div>
              <div className={styles.infoBox}>
                <span className={styles.infoText}>D-90</span>
                <span className={styles.infoText}>지금까지 10% 달성했어요</span>
              </div>
            </li>
          </ul>

        </div>
{/* 
        <div className={styles.goalInfoContainer}>
          <div className={styles.icon}></div>
          <div className={styles.infoBox}>
            <span className={styles.infoText}>D-90</span>
            <span className={styles.infoText}>지금까지 10% 달성했어요</span>
          </div>
        </div> */}
      </section>
      <section className={styles.planInfo}>
        <SectionTitle titleEn='Plans' titleKr='계획' />
        <div className={styles.plansWrap}>
          <PlansList plans={goal?.plans} />
        </div>
      </section>
    </div>
  );
}
