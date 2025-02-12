import SectionTitle from '../../atoms/SectionTitle';
import styles from './index.module.css';

export default function Goals() {
  return (
    <section className={styles.goalsContainer}>
      <SectionTitle titleEn='Goals' titleKr='목표' />

      <ul className={styles.goalsList}>
        <li className={styles.goalBox}>
          <div className={styles.titleBox}>
            <span className={styles.title}>Figma 정복하기</span>
            <img className={styles.icon} />
          </div>
          <div>
            <div className={styles.percentageAndDueDate}>
              <span className={styles.percentage}>0%</span>
              <span className={styles.dueDate}>12/22/2025</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.full}>
                <div className={styles.filled}></div>

              </div>
            </div>
          </div>
        </li>
        <li className={styles.goalBox}>
          <div className={styles.titleBox}>
            <span className={styles.title}>리액트 뿌수기 뿌수기 뿌수기 뿌수기</span>
            <img className={styles.icon} />
          </div>
          <div>
            <div className={styles.percentageAndDueDate}>
              <span className={styles.percentage}>0%</span>
              <span className={styles.dueDate}>12/22/2025</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.full}>
                <div className={styles.filled}></div>

              </div>
            </div>
          </div>
        </li>
        <li className={styles.goalBox}>
          <div className={styles.titleBox}>
            <span className={styles.title}>다이어트</span>
            <img className={styles.icon} />
          </div>
          <div>
            <div className={styles.percentageAndDueDate}>
              <span className={styles.percentage}>0%</span>
              <span className={styles.dueDate}>12/22/2025</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.full}>
                <div className={styles.filled}></div>

              </div>
            </div>
          </div>
        </li>
        <li className={styles.goalBox}>
          <div className={styles.titleBox}>
            <span className={styles.title}>저축</span>
            <img className={styles.icon} />
          </div>
          <div>
            <div className={styles.percentageAndDueDate}>
              <span className={styles.percentage}>0%</span>
              <span className={styles.dueDate}>12/22/2025</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.full}>
                <div className={styles.filled}></div>

              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
