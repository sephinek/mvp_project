import styles from './index.module.css';
import ArrowRightButton from '../../common/Icons/ArrowRightButton';
import { getDay, getMonth, getYear } from 'date-fns';
import { Link } from 'react-router-dom';

export default function GoalItem({ goal, title, percentage, dueDate }) {
  return (
    <Link to={{ pathname: `/goal-details/${goal.id}` }} state={goal}>
      <li className={styles.goalBox}>
        <div className={styles.titleBox}>
          <span className={styles.title}>{title}</span>
          <ArrowRightButton alt='next week' onClick={() => {}} />
        </div>
        <div>
          <div className={styles.percentageAndDueDate}>
            <span className={styles.percentage}>{percentage}%</span>
            <span className={styles.dueDate}>{`${getDay(dueDate)}/${getMonth(
              dueDate
            )}/${getYear(dueDate)}`}</span>
          </div>
          <div className={styles.bar}>
            <div className={styles.full}>
              <div className={styles.filled}></div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
