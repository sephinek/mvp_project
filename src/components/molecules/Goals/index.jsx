import SectionTitle from '../../atoms/SectionTitle';
import GoalItem from '../GoalItem';
import styles from './index.module.css';

export default function Goals({ goals }) {
  return (
    <section className={styles.goalsContainer}>
      <SectionTitle titleEn='Goals' titleKr='목표' />

      <div className={styles.goalWrap}>
        <ul className={styles.goalsList}>
          {goals.map((goal) => (
            <GoalItem
              key={goal.id}
              goal={goal}
              title={goal.title}
              percentage={goal.plans.length}
              dueDate={goal.endDate}
              color={goal.color}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
