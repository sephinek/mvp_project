import styles from './index.module.css';

export default function PlansItem({ plan }) {
  const {
    title,
    startDate,
    endDate,
    completedDates,
    pausedDates,
    repetition, // 월 화 수 목 금 토 일 최대 7개까지
    plansCount, // repetition가 수정될 때 현재 시간을 기준으로 필요한 count 개수를 계산하고 completedDates.length를 더한다.
    isPaused,
  } = plan;

  return (
    <li className={styles.planBox}>
      <div className={styles.colorAndTitlesBox}>
        <div className={styles.colorBar}></div>
        <div className={styles.goalAndPlanTitles}>
          <span className={styles.goalTitle}>해외 주식</span>
          <span className={styles.planTitle}>{title}</span>
        </div>
      </div>
      <div className={styles.pausedAndCheckboxBox}>
        <span className={styles.paused}>
          {isPaused ? '휴식 중' : '진행 중'}
        </span>
        <button className={styles.checkbox}>C</button>
      </div>
    </li>
  );
}
