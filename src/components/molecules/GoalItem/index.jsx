import ArrowRightButton from '../../common/Icons/ArrowRightButton';
import { getDay, getMonth, getYear } from 'date-fns';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function GoalItem({ goal, title, percentage, dueDate, color }) {
  return (
    <Link to={{ pathname: `/goal/${goal.id}` }} state={goal}>
      <li className={styles.goalBox}>
        <div className={styles.titleBox}>
          <span className={styles.title}>{title}</span>
          <ArrowRightButton alt='next week' onClick={() => {}} />
        </div>
        <div>
          <div className={styles.percentageAndDueDate}>
            <span className={styles.percentage}>{percentage}%</span>
            <span className={styles.dueDate}>{`${getMonth(dueDate)}/${getDay(
              dueDate
            )}/${getYear(dueDate)}`}</span>
          </div>
          <div className={styles.bar}>
            <div className={styles.full}>
              <div className={[styles.filled, styles[color]].join(' ')}></div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
