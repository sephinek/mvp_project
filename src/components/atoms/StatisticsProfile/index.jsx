import styles from './index.module.css'

const StatisticsProfile = ({ children, ...rest }) => {
    return (
        <div className={styles.profileOverView}>
            <div className={styles.profileText}>"자유롭게 일하며 삶을 즐기는 박보영님"</div>
            <div className={styles.profileTitle}>오늘까지의 여정</div>
        </div>
    )
}

export default StatisticsProfile
