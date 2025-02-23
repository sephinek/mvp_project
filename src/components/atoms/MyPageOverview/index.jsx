import styles from './index.module.css'

const MyPageOverview = ({ children, ...rest }) => {
    return (
        <div className={styles.myPageOverview}>
            <div className={styles.myOverviewWrap}>
                <h1 className={styles.myVision}>자유롭게 일하며 삶을 즐기는</h1>
                <p className={styles.myName}>김루시 님</p>
                <h1 className={styles.visionEditButton}>비전 수정하기</h1>
            </div>
            <div className={styles.myImage}></div>
        </div>
    )
}

export default MyPageOverview
