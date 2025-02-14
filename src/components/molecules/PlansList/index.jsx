import PlansItem from '../PlanItem';
import styles from './index.module.css';

export default function PlansList({ plans }) {
  return (
    <ul className={styles.plansContainer}>
      {plans
        ? plans.map((el) => <PlansItem key={el.title} plan={el} />)
        : '아직 계획이 없습니다.'}
    </ul>
  );
}
