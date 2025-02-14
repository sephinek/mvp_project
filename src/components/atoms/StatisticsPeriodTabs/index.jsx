import styles from './index.module.css'

const StatisticsPeriodTabs = ({ children, ...rest }) => {
    return (
        <div className={styles.timePeriodTabs}>
            <ul>
                <li className={styles.weeklyTab}>Weekly</li>
                <li className={styles.monthlyTab}>Monthly</li>
            </ul>
        </div>
    )
}

export default StatisticsPeriodTabs
