import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import { useNavigate } from 'react-router-dom';
import Textfield_default from '../../components/atoms/Textfield_defalt';
import { useRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import Button from '../../components/atoms/Button';
import { useEffect, useRef, useState } from 'react';
import Datefield_default from '../../components/molecules/Datefield_default';
import { v4 as uuid } from 'uuid';
import AI_button from '../../components/molecules/Ai_button';
import SimpleDateGrid from '../../components/atoms/SimpleDateGrid';
import GoalOverview from '../../components/atoms/GoalOverview';
import Togglebox from '../../components/atoms/Togglebox';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import { isAfter } from 'date-fns';

export default function AddPlan() {
  const navigate = useNavigate();
  const { state, routePage } = useNavigationPage();
  const [planState, setPlanState] = useRecoilState(myPlanState);
  const [isValid, setIsValid] = useState();


  let goalData;
  if (state !== null) {
    goalData =
      state?.goalId && planState.goals.find((el) => el.id === state?.goalId);
  }
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [goal, setGoal] = useState(goalData && goalData.title);
  const titleRef = useRef(null);
  const goalTitles = planState.goals.map((el) => el.title);

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

  const handleEndDateChange = (date /* date */) => {
    if (!isAfter(date, startDate)) {
      alert('종료일은 시작일 후이어야 합니다.');
      return;
    }
    setEndDate(date);
  };

  console.log('******', goalData);

  const clickSubmitHandler = () => {
    setPlanState((prev) => {
      return {
        ...prev,
        goals: prev.goals.map((el) => {
          if (el.title === goal) {
            const result = { ...el, plans: [...el.plans] };
            result.plans.push({
              id: uuid(),
              title: titleRef.current.value,
              startDate: startDate,
              endDate: endDate,
              completedDates: [],
              pausedDates: [],
              repetition: selectedWeek, // 월 화 수 목 금 토 일 최대 7개까지
              plansCount: 12, // repetition가 수정될 때 현재 시간을 기준으로 필요한 count 개수를 계산하고 completedDates.length를 더한다.
              isPaused: isPaused,
            });
            console.log('result', result);
            return result;
          }
          return el;
        }),
      };
    });
    routePage('/main');
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

  return (
    <section className={styles.layoutWrap}>
      <section className={styles.container}>
        <TopBar
          LeftIcon={ChevronLeftButton}
          title='Plan(계획) 추가'
          onClickLeft={goToBackHandler}
        ></TopBar>

        <section className={styles.sectionContainer}>
          <ul>
            {state !== null ? (
              <li>
                <GoalOverview
                  title={goalData.title}
                  date={goalData.endDate}
                  label='상위목표'
                  color={goalData.color}
                />
              </li>
            ) : (
              <li>
                {/* <Textfield_default
                setSelectedOption={setGoal}
                selectedOption={goal}
                label='상위목표'
                type='select'
                options={goalTitles}
                placeholder={'목표를 선택해주세요'}
              /> */}
                {planState.goals.length ? (
                  <Textfield_default
                    setSelectedOption={setGoal}
                    selectedOption={goal}
                    label='상위목표'
                    type='select'
                    options={goalTitles}
                    placeholder={'목표를 선택해주세요'}
                  />
                ) : (
                  <span className={styles.noGoalMessage}>
                    먼저 목표를 최소 1개 설정해주세요.
                  </span>
                )}
              </li>
            )}

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
                placeholder={'계획을 작성해주세요'}
              />
            </li>

            <li>
              <Datefield_default
                label='달성일(목표 달성일 이내)'
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={handleEndDateChange}
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

        <div className={styles.buttonWrap}>
          <Button onClick={clickSubmitHandler} disabled={!isValid}>추가하기</Button>
        </div>
      </section>
    </section>
  );
}
