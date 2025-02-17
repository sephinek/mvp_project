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

export default function EditGoal() {
  const navigate = useNavigate();
  const prams = useParams();
  const [planState, setPlanState] = useRecoilState(myPlanState);
  const goal = planState.goals.find((el) => {
    if (el.id === prams.goalId) {
      return true;
    }
    return false;
  });

  const titleRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [color, setColor] = useState(goal.color);

  const goToBackHandler = () => {
    navigate(-1);
  };

  const clickDeleteHandler = () => {
    setPlanState({
      ...planState,
      goals: planState.goals.filter((el) => {
        if (el.id === prams.goalId) {
          return false;
        } else {
          return true;
        }
      }),
    });
    navigate('/main');
  };

  const clickSubmitHandler = () => {
    setPlanState({
      ...planState,
      goals: planState.goals.map((el) => {
        if (el.id === prams.goalId) {
          const newTitle = titleRef.current.value
            ? titleRef.current.value
            : el.title;
          const newColor = color;
          const newStartDate = startDateRef.current.value
            ? startDateRef.current.value
            : el.startDate;
          const newEndDate = endDateRef.current.value
            ? endDateRef.current.value
            : el.endDate;
          return {
            ...el,
            title: newTitle,
            color: newColor,
            startDate: newStartDate,
            endDate: newEndDate,
          };
        } else {
          return el;
        }
      }),
    });
    navigate(-1);
  };

  return (
    <section>
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={DeleteButton}
        title='Goal(목표) 수정'
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
            <Textfield_default
              inputRef={startDateRef}
              label='기간'
              placeholder={goal.startDate}
            />
            <Textfield_default
              inputRef={endDateRef}
              label='기간'
              placeholder={goal.endDate}
            />
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
