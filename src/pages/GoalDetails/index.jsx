import { useNavigate, useParams } from 'react-router-dom';
import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import styles from './index.module.css';
import PlansList from '../../components/molecules/PlansList';
import EditButton from '../../components/common/Icons/EditButton';
import SectionTitle from '../../components/atoms/SectionTitle';
import { useRecoilValue } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import { getDate } from '../../utils/date';
import { useState } from 'react';
import HomePlanBottomSheet from '../../components/organisms/HomePlanBottomSheet';

export default function GoalDetails() {
  // const { state: goal } = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const goalArr = useRecoilValue(myPlanState);

  const goal = goalArr.goals.find((el) => {
    if (el.id === params.goalId) {
      return true;
    }
    return false;
  });

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});

  const goToBackHandler = () => {
    navigate(-1);
  };

  const clickEditHandler = () => {
    navigate(`/goal/edit/${goal.id}`);
  };

  const planClickHandler = (plan) => {
    setSelectedPlan(plan);
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheetHandler = () => setIsBottomSheetOpen(false);

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
          <div className={[styles.color, styles[goal.color]].join(' ')}></div>
          <span className={styles.goalTitle}>{goal.title}</span>
        </div>

        <div className={styles.goalInfoContainer}>
          <ul>
            <li>
              <div className={styles.icon}></div>
              <div className={styles.infoBox}>
                <span className={styles.infoText}>
                  {getDate(goal.startDate)}
                </span>
                <span className={styles.infoDash}>~</span>
                <span className={styles.infoText}>{getDate(goal.endDate)}</span>
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
          <PlansList plans={goal?.plans || []} onPlanClick={planClickHandler} />
        </div>
      </section>

      <HomePlanBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={closeBottomSheetHandler}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
