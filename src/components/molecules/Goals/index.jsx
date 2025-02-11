import styles from './index.module.css';

export default function Goals() {
  return (
    <section className={styles.goalsContainer}>
      {/* Section Title Here */}
      <ul className={styles.goalsList}>
        <li className={styles.goalBox}>
          <div className={styles.titleBox}>
            <span className={styles.title}>리액트 뿌수기</span>
            <img className={styles.icon} />
          </div>
          <div>
            <div className={styles.percentageAndDueDate}>
              <span className={styles.percentage}>0%</span>
              <span className={styles.dueDate}>12/22/2025</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.full}></div>
              <span className={styles.filled}></span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
