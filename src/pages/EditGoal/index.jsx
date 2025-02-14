import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import styles from './index.module.css';
import PlansList from '../../components/molecules/PlansList';
import { useLocation, useNavigate } from 'react-router-dom';
import PublihsedRadio from '../published/radio';
import Textfield_default from '../../components/atoms/Textfield_defalt';
import DeleteButton from '../../components/common/Icons/DeleteButton';
import Plans from '../../components/molecules/Plans';
import SectionTitle from '../../components/atoms/SectionTitle';

export default function EditGoal() {
  const navigate = useNavigate();
  const { state: goal } = useLocation();

  const goToBackHandler = () => {
    navigate(-1);
  };

  const clickDeleteHandler = () => {};

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
        <div className={styles.inputBox}>
          <Textfield_default label='제목' placeholder={goal.title} />
        </div>

        <div className={styles.inputBox}>
          <div className={styles.periodBox}>
            <Textfield_default label='기간' placeholder={goal.startDate} />
            <Textfield_default label='기간' placeholder={goal.startDate} />
            <span>-</span>
          </div>
        </div>

        <div className={styles.inputBox}>
          <Textfield_default label='목표 색상' />
          <PublihsedRadio />
        </div>
      </section>

      <section className={styles.sectionContainer}>
        <SectionTitle titleEn='Plans' titleKr='계획' />
        <PlansList plans={goal.plans} />
      </section>
    </section>
  );
}
