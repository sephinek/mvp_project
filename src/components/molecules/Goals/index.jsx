import SectionTitle from '../../atoms/SectionTitle';
import ArrowRightButton from '../../common/Icons/ArrowRightButton';
import styles from './index.module.css';

export default function Goals() {
  return (
    <section className={styles.goalsContainer}>
      <SectionTitle titleEn='Goals' titleKr='목표' />

      <ul className={styles.goalsList}>
        <li className={styles.goalBox}>
          <div className={styles.titleBox}>
            <span className={styles.title}>창의적 활동 지속하기</span>
            <ArrowRightButton alt='next week' onClick={() => {}} />
          </div>
          <div>
            <div className={styles.percentageAndDueDate}>
              <span className={styles.percentage}>0%</span>
              <span className={styles.dueDate}>06/28/2026</span>
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
            <span className={styles.title}>건강한 생활 습관 유지</span>
            <ArrowRightButton alt='next week' onClick={() => {}} />
          </div>
          <div>
            <div className={styles.percentageAndDueDate}>
              <span className={styles.percentage}>0%</span>
              <span className={styles.dueDate}>06/28/2026</span>
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
            <span className={styles.title}>재정적 자유 달성</span>
            <ArrowRightButton alt='next week' onClick={() => {}} />
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
            <span className={styles.title}>업무와 개인 생활 균형 유지</span>
            <ArrowRightButton alt='next week' onClick={() => {}} />
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
