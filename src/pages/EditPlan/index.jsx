import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import styles from './index.module.css';
import PlansList from '../../components/molecules/PlansList';
import { useNavigate, useParams } from 'react-router-dom';
import PublihsedRadio from '../published/radio';
import Textfield_default from '../../components/atoms/Textfield_defalt';
import Datefield_default from '../../components/molecules/Datefield_default';
import DeleteButton from '../../components/common/Icons/DeleteButton';
import SectionTitle from '../../components/atoms/SectionTitle';
import { useRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import Button from '../../components/atoms/Button';
import { useEffect, useMemo, useRef, useState } from 'react';
import DateController from '../../components/molecules/Date_Picker';
import AI_button from '../../components/molecules/Ai_button';
import SimpleDateGrid from '../../components/atoms/SimpleDateGrid';
import Togglebox from '../../components/atoms/Togglebox';
import GoalOverview from '../../components/atoms/GoalOverview';

export default function EditPlan() {
  const navigate = useNavigate();
  const params = useParams();
  const [planState, setPlanState] = useRecoilState(myPlanState);
  const [isValid, setIsValid] = useState();

  const goal = useMemo(() => {
    if (!planState) return;
    return planState.goals.find((goal) =>
      goal.plans.some(({ id }) => id === params.planId)
    );
  }, [params, planState]);

  const plan = useMemo(() => {
    if (!goal) return;
    return goal.plans.find((plan) => plan.id === params.planId);
  }, [goal, params.planId]);

  const [selectedWeek, setSelectedWeek] = useState([]);
  const [isPaused, setIsPaused] = useState(plan.isPaused);
  const [color, setColor] = useState(goal ? goal.color : '');
  const [startDate, setStartDate] = useState(
    plan ? new Date(plan.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(
    plan ? new Date(plan.endDate) : new Date()
  );

  const titleRef = useRef(null);

  const goToBackHandler = () => {
    navigate(-1);
  };

  const selectHandler = (value) => {
    setSelectedWeek((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
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
              repetition: selectedWeek,
              isPaused: isPaused,
            };
          }
          return p;
        }),
      })),
    });
    navigate(-1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if(titleRef.current === null) return;

      setIsValid(titleRef.current.value && startDate && endDate && goal);
    }, 200)

    return () => {
      clearInterval(id);
    }
  }, [titleRef, startDate, endDate, goal])

  useEffect(() => {
    if (!goal) return;

    setColor(goal.color);
  }, [goal]);

  useEffect(() => {
    if (!plan) return;

    setStartDate(new Date(plan.startDate));
    setEndDate(new Date(plan.endDate));
    setSelectedWeek(Array.from(plan.repetition));
  }, [plan]);

  if (!plan) return <div>Please add a plan first!</div>;

  return (
    <section>
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={DeleteButton}
        title='Plan(계획) 수정'
        onClickLeft={goToBackHandler}
        onClickRight={clickDeleteHandler}
      ></TopBar>

      <div className={styles.layoutWrap}>
        <section className={styles.sectionContainer}>
          <ul>
            <li>
              <GoalOverview
                title={goal.title}
                date={goal.endDate}
                label='상위목표'
                color={goal.color}
              />
            </li>
            <li>
              <AI_button
                title={'루시드가 계획을 한번에 설정해줘요!'}
              ></AI_button>
            </li>
          </ul>
        </section>

        <section className={styles.sectionContainer}>
          <ul>
            <li>
              <Textfield_default
                inputRef={titleRef}
                label='제목'
                placeholder={plan.title || '계획을 작성해주세요'}
              />
            </li>

            <li>
              <Datefield_default
                label='달성일(목표 달성일 이내)'
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                isDateRange
              />
            </li>
            <li>
              <SimpleDateGrid
                selected={selectedWeek}
                setSelected={selectHandler}
                label='반복 (미선택 시 To-do로 지정됩니다)'
              />
            </li>
            <li>
              <Togglebox isPaused={isPaused} setIsPaused={setIsPaused} />
            </li>
          </ul>
        </section>
      </div>

      <div className={styles.buttonWrap}>
        <Button onClick={clickSubmitHandler} disabled={!isValid}>수정하기</Button>
      </div>
    </section>
  );
}
