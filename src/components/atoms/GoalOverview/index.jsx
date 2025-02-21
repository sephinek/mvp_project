import styles from './index.module.css'

const GoalOverview = ({ label }) => {

    return (
        <div className={styles.inputContainer}>
            {/* 📌 레이블 */}
            {label && <label className={styles.label}>{label}</label>}
        
            <div className={styles.goalBox}>
                {/* 목표 제목 */}
                <div className={styles.goalTitleBox}>
                    <div className={styles.colorStyle}></div>
                    <span className={styles.goalTitle}>창의적 활동 지속하기</span>
                </div>
                {/* 목표 기간 */}
                <div className={styles.goalDate}>
                    <div className={styles.icon}></div>
                    <div className={styles.infoBox}>
                        <span className={styles.infoText}>2025년 06월 28일</span>
                    </div>
                </div>  
            </div>
        </div> 
    )
}

export default GoalOverview
