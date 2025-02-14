import SectionTitle from '../../atoms/SectionTitle';
import GoalItem from '../GoalItem';
import styles from './index.module.css';

export default function Goals({ goals }) {
  console.log('goals', goals);
  return (
    <section className={styles.goalsContainer}>
      <SectionTitle titleEn='Goals' titleKr='목표' />

      <ul className={styles.goalsList}>
        {goals.map((el) => (
          <GoalItem
            key={el.title}
            title={el.title}
            percentage={el.plans.length}
            dueDate={el.endDate}
          />
        ))}
      </ul>
    </section>
  );
}
