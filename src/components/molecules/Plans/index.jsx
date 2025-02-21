import SectionTitle from '../../atoms/SectionTitle/index.jsx';
import PlansCalender from '../PlansCalendar.jsx/index.jsx';
import PlansList from '../PlansList/index.jsx';
import { useMemo, useState } from 'react';
import { addDays, isAfter, isBefore } from 'date-fns';
import styles from './index.module.css';

export default function Plans({ goals, onPlanClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleCurrentDate = (date) => {
    setCurrentDate(date);
  };

  const plans = useMemo(() => {
    return goals
      .flatMap(({ plans }) => plans)
      .filter(
        ({ startDate, endDate, repetition }) =>
          isAfter(currentDate, addDays(startDate, -1)) &&
          isBefore(currentDate, endDate) &&
          repetition.includes(currentDate.getDay())
      );
  }, [goals, currentDate]);

  return (
    <section className={styles.planContainer}>
      <SectionTitle titleEn='Plans' titleKr='계획' />

      <div className={styles.planWrap}>
        <PlansCalender current={currentDate} setCurrent={handleCurrentDate} />
        <PlansList plans={plans} onPlanClick={onPlanClick} />
      </div>
    </section>
  );
}
