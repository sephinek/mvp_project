import SectionTitle from '../../atoms/SectionTitle';
import GoalItem from '../GoalItem';
import styles from './index.module.css';

export default function Goals({ goals }) {
  return (
    <section className={styles.goalsContainer}>
      <SectionTitle titleEn='Goals' titleKr='목표' />

      <div className={styles.goalWrap}>
        <ul className={styles.goalsList}>
          {goals.length ? (
            goals.map((goal) => (
              <GoalItem
                key={goal.id}
                goal={goal}
                title={goal.title}
                color={goal.color}
                percentage={goal.plans.length}
                dueDate={goal.endDate}
              />
            ))
          ) : (
            <span className={styles.emptyGoal}>아직 추가된 목표가 없어요.</span>
          )}
        </ul>
      </div>
    </section>
  );
}
