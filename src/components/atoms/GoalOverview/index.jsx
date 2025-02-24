import { format } from 'date-fns';
import styles from './index.module.css';

const GoalOverview = ({ label, title, date, color }) => {
  return (
    <div className={styles.inputContainer}>
      {/* 📌 레이블 */}
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.goalBox}>
        {/* 목표 제목 */}
        <div className={styles.goalTitleBox}>
          <div className={[styles.colorStyle, styles[color]].join(' ')}></div>
          <span className={styles.goalTitle}>{title}</span>
        </div>
        {/* 목표 기간 */}
        <div className={styles.goalDate}>
          <div className={styles.icon}></div>
          <div className={styles.infoBox}>
            <span className={styles.infoText}>
              {format(date, 'yyyy-MM-dd')} {}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalOverview;
