import styles from './index.module.css';
import SectionTitle from '../../atoms/SectionTitle/index.jsx';
import PlansCalender from '../PlansCalendar.jsx/index.jsx';
import PlansList from '../PlansList/index.jsx';
import { useEffect, useState } from 'react';
// import { getDate } from '../../../utils/date.js';

export default function Plans({ goals, onPlanClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [plans, setPlans] = useState([]);

  const handleCurrentDate = (date) => {
    setCurrentDate(new Date(date));
  };

  useEffect(() => {
    const getPlans = () => {
      const result = [];
      goals?.forEach((goal) => {
        goal?.plans?.forEach((plan) => {
          // if (
          //   getDate(plan.endDate) >= getDate(currentDate) &&
          //   getDate(plan.startDate) <= getDate(currentDate)
          // ) {
          result.push({ ...plan, goalId: goal.id, goalTitle: goal.title });
          // }
        });
      });

      setPlans(result);
    };

    getPlans();
  }, [currentDate, goals]);

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
