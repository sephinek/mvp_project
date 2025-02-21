import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import styles from './index.module.css';
import PlansList from '../../components/molecules/PlansList';
import { useNavigate, useParams } from 'react-router-dom';
import PublihsedRadio from '../published/radio';
import Textfield_default from '../../components/atoms/Textfield_defalt';
import DeleteButton from '../../components/common/Icons/DeleteButton';
import SectionTitle from '../../components/atoms/SectionTitle';
import { useRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import Button from '../../components/atoms/Button';
import { useRef, useState } from 'react';
import DateController from '../../components/molecules/Date_Picker';

export default function EditPlan() {
  const navigate = useNavigate();
  const params = useParams();
  const [planState, setPlanState] = useRecoilState(myPlanState);

  const plan = planState.goals
    .flatMap((goal) => goal.plans)
    .find((plan) => plan.id === params.planId);

  const goal = planState.goals.find((goal) => goal.plans.includes(plan));

  const [color, setColor] = useState(goal ? goal.color : '');
  const [startDate, setStartDate] = useState(
    plan ? plan.startDate : new Date()
  );
  const [endDate, setEndDate] = useState(plan ? plan.endDate : new Date());

  const titleRef = useRef(null);

  const goToBackHandler = () => {
    navigate(-1);
  };

  const clickDeleteHandler = () => {
    setPlanState({
      ...planState,
      goals: planState.goals.map((goal) => ({
        ...goal,
        plans: goal.plans.filter((p) => p.id !== params.planId),
      })),
    });
    navigate('/main');
  };

  const clickSubmitHandler = () => {
    setPlanState({
      ...planState,
      goals: planState.goals.map((goal) => ({
        ...goal,
        plans: goal.plans.map((p) => {
          if (p.id === params.planId) {
            const newTitle = titleRef.current.value || p.title;
            return {
              ...p,
              title: newTitle,
              startDate: startDate,
              endDate: endDate,
            };
          }
          return p;
        }),
      })),
    });
    navigate(-1);
  };

  if (!plan) return <div>Please add a plan first!</div>;

  return (
    <section>
      플랜 수정 페이지~.~ 뚝딱뚝딱
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={DeleteButton}
        title='Plan(계획) 수정'
        onClickLeft={goToBackHandler}
        onClickRight={clickDeleteHandler}
      ></TopBar>
      <section className={styles.sectionContainer}>
        <div className={styles.inpuㅡtBox}>
          <Textfield_default
            inputRef={titleRef}
            label='제목'
            placeholder={goal.title}
          />
        </div>

        <div className={styles.inputBox}>
          <div className={styles.periodBox}>
            <DateController date={endDate} setDate={setEndDate} />
            <span>-</span>
          </div>
        </div>

        <div className={styles.inputBox}>
          <Textfield_default label='목표 색상' />
          <PublihsedRadio onClick={setColor} />
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <SectionTitle titleEn='Plans' titleKr='계획' />
        <PlansList plans={goal.plans} />
      </section>
      <Button onClick={clickSubmitHandler}>수정하기</Button>
    </section>
  );
}
