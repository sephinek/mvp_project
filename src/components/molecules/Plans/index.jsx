import styles from './index.module.css';
import SectionTitle from '../../atoms/SectionTitle/index.jsx';
import PlansCalender from '../PlansCalendar.jsx/index.jsx';
import PlansList from '../PlansList/index.jsx';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Plans({ goals }) {
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS')
  );
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
          console.log(
            'currentDate',
            currentDate,
            '***',
            typeof plan.startDate,
            '***',
            plan.endDate,
            '***'
          );
          if (plan.endDate >= currentDate && plan.startDate <= currentDate) {
            result.push(plan);
          }
        });
      });

      setPlans(result);
    };

    getPlans();
  }, [currentDate]);

  console.log(goals, plans);

  return (
    <section className={styles.planContainer}>
      <SectionTitle titleEn='Plans' titleKr='계획' />
      <PlansCalender current={currentDate} setCurrent={handleCurrentDate} />
      <PlansList plans={plans} />
    </section>
  );
}
