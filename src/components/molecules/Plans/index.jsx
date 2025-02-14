import styles from './index.module.css';
import SectionTitle from '../../atoms/SectionTitle/index.jsx';
import PlansCalender from '../PlansCalendar.jsx/index.jsx';
import PlansList from '../PlansList/index.jsx';
import { useEffect, useState } from 'react';

export default function Plans({ goals }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [plans, setPlans] = useState();

  const getPlans = () => {
    const result = [];
    goals.map((el) => {
      el.plans.map((plan) => {
        if (plan.endDate >= currentDate && plan.startDate <= currentDate) {
          result.push(plan);
        }
      });
    });
    setPlans(result);
  };

  useEffect(() => {
    getPlans();
  }, [currentDate]);

  return (
    <section className={styles.planContainer}>
      <SectionTitle />
      <PlansCalender current={currentDate} setCurrent={setCurrentDate} />
      <PlansList plans={plans} />
    </section>
  );
}
