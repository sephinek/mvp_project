import PlanItem from '../PlanItem';
import styles from './index.module.css';

export default function PlansList({ plans, onPlanClick }) {
  return (
    <ul className={styles.plansContainer}>
      {plans.length
        ? plans.map((plan) => (
            <PlanItem
              key={plan.id}
              plan={plan}
              goalId={plan.goalId}
              goalTitle={plan.goalTitle}
              onPlanClick={() => onPlanClick(plan)}
            />
          ))
        : '아직 계획이 없습니다.'}
    </ul>
  );
}
