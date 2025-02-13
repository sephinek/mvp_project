import styles from './index.module.css';

export default function PlansList() {
  return (
    <ul className={styles.plansContainer}>
      <li className={styles.planBox}>
        <div className={styles.colorAndTitlesBox}>
          <div className={styles.colorBar}></div>
          <div className={styles.goalAndPlanTitles}>
            <span className={styles.goalTitle}>해외 주식</span>
            <span className={styles.planTitle}>
              해외 장 열리고, 자동 매수 확인
            </span>
          </div>
        </div>
        <div className={styles.pausedAndCheckboxBox}>
          <span className={styles.paused}>휴식 중</span>
          <button className={styles.checkbox}>C</button>
        </div>
      </li>
      <li className={styles.planBox}>
        <div className={styles.colorAndTitlesBox}>
          <div className={styles.colorBar}></div>
          <div className={styles.goalAndPlanTitles}>
            <span className={styles.goalTitle}>해외 주식</span>
            <span className={styles.planTitle}>
              해외 장 열리고, 자동 매수 확인
            </span>
          </div>
        </div>
        <div className={styles.pausedAndCheckboxBox}>
          <span className={styles.paused}>휴식 중</span>
          <button className={styles.checkbox}>C</button>
        </div>
      </li>
      <li className={styles.planBox}>
        <div className={styles.colorAndTitlesBox}>
          <div className={styles.colorBar}></div>
          <div className={styles.goalAndPlanTitles}>
            <span className={styles.goalTitle}>해외 주식</span>
            <span className={styles.planTitle}>
              해외 장 열리고, 자동 매수 확인
            </span>
          </div>
        </div>
        <div className={styles.pausedAndCheckboxBox}>
          <span className={styles.paused}>휴식 중</span>
          <button className={styles.checkbox}>C</button>
        </div>
      </li>
    </ul>
  );
}
