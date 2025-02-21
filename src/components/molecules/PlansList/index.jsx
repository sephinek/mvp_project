import PlanItem from '../PlanItem';
import styles from './index.module.css';

export default function PlansList({ plans, onPlanClick }) {
  return (
    <ul className={styles.plansContainer}>
      {plans.length
        ? plans.map((plan) => (
            <PlanItem
              key={plan.id}
              planId={plan.id}
              onPlanClick={() => onPlanClick(plan)}
            />
          ))
        : '아직 계획이 없습니다.'}
    </ul>
  );
}
