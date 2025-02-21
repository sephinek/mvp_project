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
  const prams = useParams();
  const [planState, setPlanState] = useRecoilState(myPlanState);
  const goal = planState.goals.find((el) => {
    if (el.id === prams.goalId) {
      return true;
    }
    return false;
  });

  const titleRef = useRef(null);

  const [color, setColor] = useState(goal.color);
  const [startDate, setStartDate] = useState(goal.startDate);
  const [endDate, setEndDate] = useState(goal.endDate);

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
          return {
            ...el,
            title: newTitle,
            color: newColor,
            startDate: startDate,
            endDate: endDate,
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
            <DateController date={startDate} setDate={setStartDate} />
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
