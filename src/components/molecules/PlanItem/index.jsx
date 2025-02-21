import checkIconDisabled from '../../../assets/icons/humble/checkbox-disabled.svg';
import checkIconChecked from '../../../assets/icons/humble/checkbox-checked.svg';
import checkIconDefault from '../../../assets/icons/humble/checkbox-default.svg';
import { myPlanState } from '../../../shared/recoil/myPlanState';
import { useRecoilState } from 'recoil';
import styles from './index.module.css';
import { useMemo } from 'react';

export default function PlanItem({ planId, onPlanClick }) {
  const [myState, setMyState] = useRecoilState(myPlanState);

  const plan = useMemo(() => {
    return myState.goals.flatMap(({plans}) => plans).filter(({id}) => id === planId)[0];
  }, [
    planId, myState
  ])

  const clickHandler = () => {
    setMyState(state => ({
        goals: state.goals.map(goal => ({
          ...goal,
          plans: goal.plans.map(
            plan => ({...plan,
              isCompleted: !plan.isCompleted
            })
          )
        }))
      })
    );
  };

  return (
    <li className={styles.planBox}>
      <div className={styles.colorAndTitlesBox} onClick={onPlanClick}>
        <div className={styles.colorBar}></div>
        <div className={styles.goalAndPlanTitles}>
          <span className={styles.planTitle}>{plan.title}</span>
        </div>
      </div>
      <div className={styles.pausedAndCheckboxBox}>
        <span className={styles.paused}>{plan.isPaused ? '휴식중' : ''}</span>
        <button className={styles.checkbox} onClick={clickHandler} disabled={plan.isPaused}>
          {plan.isPaused ? (
            <img src={checkIconDisabled} />
          ) : plan.isCompleted ? (
            <img src={checkIconChecked} />
          ) : (
            <img src={checkIconDefault} />
          )}
        </button>
      </div>
    </li>
  );
}
