import checkIconDisabled from '../../../assets/icons/humble/checkbox-disabled.svg';
import checkIconChecked from '../../../assets/icons/humble/checkbox-checked.svg';
import checkIconDefault from '../../../assets/icons/humble/checkbox-default.svg';
import { myPlanState } from '../../../shared/recoil/myPlanState';
import { useRecoilState } from 'recoil';
import styles from './index.module.css';
import { useMemo } from 'react';

export default function PlanItem({ planId, onPlanClick, currentDate }) {
  const [myState, setMyState] = useRecoilState(myPlanState);


  const plan = useMemo(() => {
    return myState.goals.flatMap(({plans}) => plans).filter(({id}) => id === planId)[0];
  }, [
    planId, myState
  ])
  const _currentDate = useMemo(() => currentDate.toISOString(), [currentDate])

  const isCompleted = useMemo(() => plan.completedDates.includes(_currentDate), [_currentDate, plan])

  const clickHandler = () => {
    setMyState(state => ({
        goals: state.goals.map(goal => ({
          ...goal,
          plans: goal.plans.map(
            plan => ({...plan,
              completedDates: (() => {
                if(plan.id !== planId) return plan.completedDates;
                if(isCompleted) return plan.completedDates.filter(dateString => dateString !== _currentDate);
                return [...plan.completedDates, _currentDate];
              })(),
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
          ) : isCompleted ? (
            <img src={checkIconChecked} />
          ) : (
            <img src={checkIconDefault} />
          )}
        </button>
      </div>
    </li>
  );
}
