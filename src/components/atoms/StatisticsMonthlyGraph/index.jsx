import styles from './index.module.css';

const StatisticsMonthlyGraph = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    return (
        <div className={styles.statisticsGraph}>
            <ul className={styles.graphDay}>
                {days.map((day, index) => (
                <li key={index}>{day}</li>
                ))}
            </ul>
            <div className={styles.dailyTracker}></div>
            <span></span>
            <ul className={styles.dailyTrackerView}>
                <li>
                    <div className={styles.dailyTrackerBadge}></div>
                    <p>100% 달성</p>
                </li>
                <li>
                    <div className={styles.dailyTrackerBadge}></div>
                    <p>50% 달성</p>
                </li>
                <li>
                    <div className={styles.dailyTrackerBadge}></div>
                    <p>미달성</p>
                </li>
            </ul>           
        </div>
    );
}

export default StatisticsMonthlyGraph;
