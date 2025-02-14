import styles from './index.module.css'

const ReflectionEmptyState = ({ children, ...rest }) => {
    return (
        <div className={styles.emptyState}>
            <div className={styles.emptyStateImage}></div>
            <div className={styles.emptyStateText}>
                아직 아무것도 없네요!<br></br>
                하단의 + 버튼을 눌러<br></br>
                비전보드를 만들어보세요.<br></br>
            </div>
        </div>
    )
}

export default ReflectionEmptyState
