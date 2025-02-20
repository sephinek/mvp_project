import PlanItem from '../PlanItem';
import styles from './index.module.css';

export default function PlansList({ plans }) {
  return (
    <ul className={styles.plansContainer}>
      {plans
        ? plans.map((plan) => (
            <PlanItem
              key={plan.id}
              plan={plan}
              goalId={plan.goalId}
              goalTitle={plan.goalTitle}
            />
          ))
        : '아직 계획이 없습니다.'}
    </ul>
  );
}
