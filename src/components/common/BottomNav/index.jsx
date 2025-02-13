import styles from './index.module.css';

export default function BottomNav() {
  return (
    <nav className={styles.bottomNavContainer}>
      <ul className={styles.bottomNavBox}>
        <li className={styles.menuBox}>
          <img className={styles.icon} />
          <span className={styles.menuTitle}>홈</span>
        </li>
        <li className={styles.menuBox}>
          <img className={styles.icon} />
          <span className={styles.menuTitle}>점검데이</span>
        </li>
        <li className={styles.menuBox}>
          {/* Absolute로 자리잡기 */}
          <div>
            <img className={styles.icon} />
          </div>
        </li>
        <li className={styles.menuBox}>
          <img className={styles.icon} />
          <span className={styles.menuTitle}>통계</span>
        </li>
        <li className={styles.menuBox}>
          <img className={styles.icon} />
          <span className={styles.menuTitle}>MY</span>
        </li>
      </ul>
    </nav>
  );
}
