import styles from './index.module.css'

const ReflectionGuide = ({ children, ...rest }) => {
    return (
        <div className={styles.wrap} {...rest}>
            <ul className={styles.guide}>
                <li className={styles.guideContent}>
                    <div className={styles.guideContentLeft}>
                        <div>
                            <h2>미래를 보는 힘: 장기적인 목표 설정이 삶을 어떻게 변화 시키는가에 대해서 알아볼건데 니가 몰알아</h2>
                            <ol>
                                <li>
                                    <div className={styles.guideCalendar}></div>
                                    <span>2024년 03월 11일</span>
                                </li>
                                <li>
                                    <div className={styles.guideTime}></div>
                                    <span>10 min</span>
                                </li>
                            </ol>
                         </div>
                        <div>
                            <span className={styles.guideChip}>미래 시간 조망</span>
                        </div>
                    </div>
                    <div className={styles.guideContentRight}></div>
                </li>
                <li className={styles.guideContent}>
                    <div className={styles.guideContentLeft}>
                        <div>
                            <h2>장기적인 목표에 실패하는 5가지 이유와 해결책</h2>
                            <ol>
                                <li>
                                    <div className={styles.guideCalendar}></div>
                                    <span>2023년 12월 03일</span>
                                </li>
                                <li>
                                    <div className={styles.guideTime}></div>
                                    <span>7 min</span>
                                </li>
                            </ol>
                         </div>
                        <div>
                            <span className={styles.guideChip}>장기목표</span>
                        </div>
                    </div>
                    <div className={styles.guideContentRight}></div>
                </li>
                <li className={styles.guideContent}>
                    <div className={styles.guideContentLeft}>
                        <div>
                            <h2>성공한 사람들은 왜 비전보드를 사용할까?</h2>
                            <ol>
                                <li>
                                    <div className={styles.guideCalendar}></div>
                                    <span>2023년 6월 16일</span>
                                </li>
                                <li>
                                    <div className={styles.guideTime}></div>
                                    <span>6 min</span>
                                </li>
                            </ol>
                         </div>
                        <div>
                            <span className={styles.guideChip}>비전보드</span>
                            <span className={styles.guideChip}>성공</span>
                        </div>
                    </div>
                    <div className={styles.guideContentRight}></div>
                </li>
                <li className={styles.guideContent}>
                    <div className={styles.guideContentLeft}>
                        <div>
                            <h2>비전이 명확할수록 삶이 단순해지는 이유</h2>
                            <ol>
                                <li>
                                    <div className={styles.guideCalendar}></div>
                                    <span>2023년 5월 28일</span>
                                </li>
                                <li>
                                    <div className={styles.guideTime}></div>
                                    <span>4 min</span>
                                </li>
                            </ol>
                         </div>
                        <div>
                            <span className={styles.guideChip}>비전</span>
                        </div>
                    </div>
                    <div className={styles.guideContentRight}></div>
                </li>
            </ul>

        </div>
    )
}

export default ReflectionGuide
