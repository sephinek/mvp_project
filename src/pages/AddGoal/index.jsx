import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import PlansList from '../../components/molecules/PlansList';
import { useNavigate, useParams } from 'react-router-dom';
import PublihsedRadio from '../published/radio';
import Textfield_default from '../../components/atoms/Textfield_defalt';
import DeleteButton from '../../components/common/Icons/DeleteButton';
import SectionTitle from '../../components/atoms/SectionTitle';
import { useRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import Button from '../../components/atoms/Button';
import { useEffect, useMemo, useRef, useState } from 'react';
import Datefield_default from '../../components/molecules/Datefield_default';
import { v4 as uuid } from 'uuid';
import useCallModal from '../../hooks/useCallModal';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';

export default function AddGoal() {
  const { routePage } = useNavigationPage();
  const prams = useParams();
  const navigate = useNavigate();
  const [planState, setPlanState] = useRecoilState(myPlanState);

  const titleRef = useRef(null);
  const [isValid, setIsValid] = useState();

  const [color, setColor] = useState('green-apple');
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(
    new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
  );

  const { callModal, closeModal } = useCallModal();

  const id = uuid();
  const goToBackHandler = () => {
    routePage(-1);
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
    routePage('/main');
  };

  const clickSubmitHandler = () => {
    setPlanState({
      ...planState,
      goals: [
        ...planState.goals,
        {
          id: id,
          title: titleRef.current.value,
          color: color,
          startDate: startDate,
          endDate: endDate,
          plans: [],
        },
      ],
    });

    callModal(
      '목표를 추가했습니다!',
      '',
      '홈으로 가기',
      '계획 추가하기',
      () => {
        closeModal();
        navigate('/plan/add');
      },
      () => {
        navigate('/main');
      }
    );
  };

  useEffect(() => {
    const id = setInterval(() => {
      if(titleRef.current === null) return;

      setIsValid(titleRef.current.value && color && startDate && endDate);
    }, 200)

    return () => {
      clearInterval(id);
    }
  }, [titleRef, color, startDate, endDate])

  return (
    <section>
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={DeleteButton}
        title='Goal(목표) 추가'
        onClickLeft={goToBackHandler}
        onClickRight={clickDeleteHandler}
      ></TopBar>

      <section className={styles.sectionContainer}>
        <ul>
          <li>
            <Textfield_default
              inputRef={titleRef}
              label='제목'
              placeholder={'목표 제목을 입력해주세요'}
            />
          </li>
          <li>
            <Datefield_default
              label='기간'
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
              isDateRange
            />
          </li>
          <li>
            <PublihsedRadio onClick={setColor} label='목표 색상' selectedColor={color}/>
          </li>
        </ul>
      </section>

      <SectionTitle titleEn='Plans' titleKr='계획' />
      <section className={styles.sectionContainer}>
        <PlansList plans={[]} />
      </section>
      <div className={styles.buttonWrap}>
        <Button onClick={clickSubmitHandler} disabled={!isValid}>추가하기</Button>
      </div>
    </section>
  );
}
