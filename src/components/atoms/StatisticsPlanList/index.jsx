import styles from './index.module.css'

const StatisticsPlanList = ({ children, ...rest }) => {
    return (
        <ul className={styles.statisticsPlanList}>
            <li className={styles.statisticsPlan}>
                <p className={styles.statisticsName}>5</p>
                <div className={styles.statisticsStatus}>
                    <p>이번주</p>
                    <span>30%</span>
                    <p>달성</p>
                </div>
          </li>
        </ul>
    )
}

export default StatisticsPlanList
