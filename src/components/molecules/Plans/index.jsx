import styles from './index.module.css';
import SectionTitle from '../../atoms/SectionTitle/index.jsx';
import PlansCalender from '../PlansCalendar.jsx/index.jsx';
import PlansList from '../PlansList/index.jsx';
import { useEffect, useState } from 'react';

export default function Plans({ goals }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [plans, setPlans] = useState([]);

  const handleCurrentDate = (date) => {
    // setCurrentDate(format(date, 'yyyy-MM-dd HH:mm:ss.SSS'));
    setCurrentDate(new Date(date));
  };

  useEffect(() => {
    const getPlans = () => {
      const result = [];
      goals?.map((goal) => {
        goal?.plans?.map((plan) => {
          if (plan.endDate >= currentDate && plan.startDate <= currentDate) {
            result.push(plan);
          }
        });
      });

      setPlans(result);
    };

    getPlans();
  }, [currentDate, goals]);

  console.log(goals, plans);

  return (
    <section className={styles.planContainer}>
      <SectionTitle titleEn='Plans' titleKr='계획' />
      <div className={styles.planWrap}>
        <PlansCalender current={currentDate} setCurrent={handleCurrentDate} />
        <PlansList plans={plans} />
      </div>
    </section>
  );
}
