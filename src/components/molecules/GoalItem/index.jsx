import styles from './index.module.css';
import { getDay, getMonth, getYear } from 'date-fns';

export default function GoalItem({ title, percentage, dueDate }) {
  return (
    <li className={styles.goalBox}>
      <div className={styles.titleBox}>
        <span className={styles.title}>{title}</span>
        <img className={styles.icon} />
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
  );
}
