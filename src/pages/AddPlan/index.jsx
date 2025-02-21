import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import styles from './index.module.css';
import PlansList from '../../components/molecules/PlansList';
import { useNavigate, useParams } from 'react-router-dom';
import Textfield_default from '../../components/atoms/Textfield_defalt';
import DeleteButton from '../../components/common/Icons/DeleteButton';
import SectionTitle from '../../components/atoms/SectionTitle';
import { useRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import Button from '../../components/atoms/Button';
import { useRef, useState } from 'react';
import Datefield_default from '../../components/molecules/Datefield_default';
import { v4 as uuid } from 'uuid';
import AI_button from '../../components/molecules/Ai_button'
import { useRecoilValue } from 'recoil';
import { getDate } from '../../utils/date';
import SimpleDateGrid from '../../components/atoms/SimpleDateGrid';

export default function AddGoal() {
  const navigate = useNavigate();
  const { goalId } = useParams(); 
  const [planState, setPlanState] = useRecoilState(myPlanState);

  const titleRef = useRef(null);

  const [color, setColor] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const goalArr = useRecoilValue(myPlanState) || { goals: [] };
  const goal = goalArr.goals.find(el => el.id === goalId) || {};

  const goToBackHandler = () => {
    navigate(-1);
  };

  const clickDeleteHandler = () => {
    setPlanState({
      ...planState,
      goals: planState.goals.filter((el) => {
        if (el.id === params.goalId) {
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
      goals: [
        ...planState.goals,
        {
          id: uuid(),
          title: titleRef.current.value,
          color: color,
          startDate: startDate,
          endDate: endDate,
          plans: [],
        },
      ],
    });
    navigate(-1);
  };

  return (
    <section >
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={DeleteButton}
        title='Plan(계획) 추가'
        onClickLeft={goToBackHandler}
        onClickRight={clickDeleteHandler}
      ></TopBar>
      
      <section className={styles.sectionContainer}>
        <ul>
          <li>
            <p className={styles.label}>상위 목표</p>
            <div className={styles.goalBox}>
              {/* 목표 제목 */}
              <div className={styles.goalTitleBox}>
                <div className={styles.color}></div>
                <span className={styles.goalTitle}>창의적 활동 지속하기</span>
              </div>
              {/* 목표 기간 */}
              <div className={styles.goalDate}>
                <div className={styles.icon}></div>
                <div className={styles.infoBox}>
                  <span className={styles.infoText}>2025년 06월 28일</span>
                </div>
              </div>  
            </div>
          </li>
          <li>
            <AI_button title={'루시드가 계획을 한번에 설정해줘요!'}></AI_button>
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
              onEndDateChange={setEndDate}
              isDateRange
            />
          </li>

          <li>
            <SimpleDateGrid></SimpleDateGrid>
          </li>
          <li>

          </li>
        </ul>
      </section>

      <section className={styles.sectionContainer}>
        <SectionTitle titleEn='Plans' titleKr='계획' />
        <PlansList plans={[]} />
      </section>
      <div className={styles.buttonWrap}>
        <Button onClick={clickSubmitHandler}>추가하기</Button>
      </div>
    </section>
  );
}
