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
import Datefield_default from '../../components/molecules/Datefield_default';
import { v4 as uuid } from 'uuid';
import useCallModal from '../../hooks/useCallModal';
import { confirmModalState } from '../../shared/recoil/confirmModalState';
import useNavigationPage from '../../hooks/useNavigationPage';

export default function AddGoal() {
  const { routePage } = useNavigationPage();
  const prams = useParams();
  const navigate = useNavigate();
  const [planState, setPlanState] = useRecoilState(myPlanState);

  const titleRef = useRef(null);

  const [color, setColor] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { callModal, closeModal } = useCallModal();

  const [modalState, setModalState] = useRecoilState(confirmModalState);

  const id = uuid();
  const goToBackHandler = () => {
    routePage(-1);
  };

  const handleColorChange = (selectedColor) => setColor(selectedColor);

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
      }
    );
    setModalState({
      isOpen: true,
      title: '목표를 추가했습니다!',
      subTitle: '',
      cancleButtonName: '홈으로 가기',
      confirmButtonName: '계획 추가하기',
      callback: () => {
        routePage('/plan/add', { goalId: id });
      },
    });
  };

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
              placeholder={'123'}
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
            <PublihsedRadio 
              onClick={setColor} 
              label='목표색상'  
            />
          </li>
        </ul>
      </section>
      
      <SectionTitle titleEn='Plans' titleKr='계획' />
      <section className={styles.sectionContainer}>
        <PlansList plans={[]} />
      </section>
      <div className={styles.buttonWrap}>
        <Button onClick={clickSubmitHandler}>추가하기</Button>
      </div>
    </section>
  );
}
