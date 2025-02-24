import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import PlansList from '../../components/molecules/PlansList';
import { useNavigate, useParams } from 'react-router-dom';
import PublihsedRadio from '../published/radio';
import Textfield_default from '../../components/atoms/Textfield_defalt';
import DeleteButton from '../../components/common/Icons/DeleteButton';
import SectionTitle02 from '../../components/atoms/SectionTitle02';
import { useRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import Button from '../../components/atoms/Button';
import { useRef, useState } from 'react';
import DateController from '../../components/molecules/Date_Picker';
import { isAfter } from 'date-fns';
import styles from './index.module.css';

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

  const [color, setColor] = useState(goal?.color);
  const [startDate, setStartDate] = useState(goal?.startDate);
  const [endDate, setEndDate] = useState(goal?.endDate);

  const goToBackHandler = () => {
    navigate(-1);
  };

  const handleEndDateChange = (date /* date */) => {
    if (!isAfter(date, startDate)) {
      alert('종료일은 시작일 후이어야 합니다.');
      return;
    }
    setEndDate(date);
  };

  const clickDeleteHandler = () => {
    navigate('/main');
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
      {goal && (
        <>
          <TopBar
            LeftIcon={ChevronLeftButton}
            RightIcon={DeleteButton}
            title='Goal(목표) 수정'
            onClickLeft={goToBackHandler}
            onClickRight={clickDeleteHandler}
          ></TopBar>
          <section className={styles.sectionContainer}>
            <ul>
              {/* 계획 수정할 때 보이는 컴포넌트 */}
              <li>
                <Textfield_default
                  inputRef={titleRef}
                  label='제목'
                  placeholder={goal?.title}
                />
              </li>

              {/* 계획 추가할 때 보이는 컴포넌트 */}
              <li>
                <div className={styles.periodBox}>
                  <DateController
                    date={startDate}
                    setDate={setStartDate}
                    label='기간'
                  />
                  <span>-</span>
                  <DateController
                    date={endDate}
                    setDate={handleEndDateChange}
                    label={null}
                  />
                </div>
              </li>

              <li>
                <PublihsedRadio onClick={setColor} label='목표색상' />
              </li>
            </ul>
          </section>
          <SectionTitle02 titleEn='Plans' titleKr='계획' />
          <section className={styles.sectionContainer02}>
            <PlansList plans={goal?.plans} />
          </section>
          <div className={styles.buttonWrap}>
            <Button onClick={clickSubmitHandler}>수정하기</Button>
          </div>
        </>
      )}
    </section>
  );
}
