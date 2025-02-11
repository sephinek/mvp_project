import styles from './index.module.css';
import SectionTitle from '../../atoms/SectionTitle/index.jsx';
import PlansCalender from '../PlansCalendar.jsx/index.jsx';
import PlansList from '../PlansList/index.jsx';

export default function Plans() {
  return (
    <section className={styles.planContainer}>
      <SectionTitle />
      <PlansCalender />
      <PlansList />
    </section>
  );
}
