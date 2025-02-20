import styles from './index.module.css'

const ReflectionPlanCheckState = ({ children, ...rest }) => {
    return (
        <div className={styles.planCheckState}>
            <div className={styles.planCheckStateImage}></div>
            <div className={styles.planCheckStateText}>
                목표달성을 위한 계획 점검이 필요한가요?<br></br>
                계획을 검토하고 필요한 계획만 남겨보세요
            </div>
        </div>
    )
}

export default ReflectionPlanCheckState
