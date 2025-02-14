import styles from './index.module.css'

const StatisticsStatusCard = ({ children, ...rest }) => {
    return (
        <ul className={styles.statusCardList}>
            <li className={styles.statusCard}>
                <div className={styles.statusIcon}></div>
                <h3 className={styles.stausTitle}>진행중 목표</h3>
                <p className={styles.statusCount}>5</p>
          </li>
          <li className={styles.statusCard}>
                <div className={styles.statusIcon}></div>
                <h3 className={styles.stausTitle}>진행중 계획</h3>
                <p className={styles.statusCount}>14</p>
          </li>
          <li className={styles.statusCard}>
                <div className={styles.statusIcon}></div>
                <h3 className={styles.stausTitle}>휴식</h3>
                <p className={styles.statusCount}>3</p>
          </li>
        </ul>
    )
}

export default StatisticsStatusCard
