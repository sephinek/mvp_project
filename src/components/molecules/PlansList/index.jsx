import PlanItem from '../PlanItem';
import styles from './index.module.css';

export default function PlansList({ plans, onPlanClick, currentDate }) {
  return (
    <ul className={styles.plansContainer}>
      {/* {plans.length ? (
        plans.map((plan) => (
          <PlanItem
            key={plan.id}
            plan={plan}
            goalId={plan.goalId}
            goalTitle={plan.goalTitle}
            onPlanClick={() => onPlanClick(plan)}
          />
        ))
      ) : (
        <div className={styles.emptyPlan}>
          <span>계획을 추가해주세요</span>
        </div>
      )} */}
      {plans.length ? (
        plans.map((plan) => (
          <PlanItem
            key={plan.id}
            planId={plan.id}
            onPlanClick={() => onPlanClick(plan)}
            currentDate={currentDate}
          />
        ))
      ) : (
        <span className={styles.emptyPlan}>아직 추가된 계획이 없어요.</span>
      )}
    </ul>
  );
}
