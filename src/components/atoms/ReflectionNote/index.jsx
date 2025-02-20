import styles from './index.module.css'

const ReflectionNote = ({ children, ...rest }) => {
    return (
        <div className={styles.wrap} {...rest}>
            <ul className={styles.reflectionNote}>
                <li className={styles.noteContent}>
                    <p>창의적 활동 지속하기</p>
                    <h2>끝없는 목표 속에서</h2>
                    <ol>
                        <li>
                            <div className={styles.calendar}></div>
                            <span>2024년 03월 11일</span>
                        </li>
                    </ol>
                </li>
                <li className={styles.noteContent}>
                    <p>재정적 자유 달성하기</p>
                    <h2>올해부터는 나도 달라져야겠다!</h2>
                    <ol>
                        <li>
                            <div className={styles.calendar}></div>
                            <span>2024년 01월 01일</span>
                        </li>
                    </ol>
                </li>
                <li className={styles.noteContent}>
                    <p>건강한 생활 습관 유지하기</p>
                    <h2>오늘은 정말루 힘들었다</h2>
                    <ol>
                        <li>
                            <div className={styles.calendar}></div>
                            <span>2023년 08월 17일</span>
                        </li>
                    </ol>
                </li>
                <li className={styles.noteContent}>
                    <p>창의적 활동 지속하기</p>
                    <h2>모든 아름다움의 발견: 나탈리 카르푸센코 사진전 후기</h2>
                    <ol>
                        <li>
                            <div className={styles.calendar}></div>
                            <span>2023년 01월 04일</span>
                        </li>
                    </ol>
                </li>
                <li className={styles.noteContent}>
                    <p>건강한 생활 습관 유지하기</p>
                    <h2>수영 시작: 드디어 오늘 문화센터에 등록했다</h2>
                    <ol>
                        <li>
                            <div className={styles.calendar}></div>
                            <span>2022년 09월 23일</span>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    )
}

export default ReflectionNote
