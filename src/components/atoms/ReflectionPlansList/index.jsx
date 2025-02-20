import styles from './index.module.css'
import SectionTitleCheck from '../SectionTitleCheck'

const ReflectionPlansList = ({ children, ...rest }) => {
    return (
        <>
        <SectionTitleCheck titleEn='Plans' titleKr='계획' />
        <div  className={styles.wrap}>
            <ul className={styles.plansList}>
                <li>
                    <div className={styles.plansBar}></div>
                    <div className={styles.plans}>
                        <span>건강한 생활 습관 유지</span>
                        <h1>매주 3회 운동하기</h1>
                    </div>
                    <div className={styles.checkbox}>
                        <span>0%</span>
                        <div className={styles.check}></div>
                    </div>
                </li>
                <li>
                    <div className={styles.plansBar}></div>
                    <div className={styles.plans}>
                        <span>건강한 생활 습관 유지</span>
                        <h1>건강체크 - 몸상태 관리하기 관리 관리관리 관리 관리과ㅣㄴ리</h1>
                    </div>
                    <div className={styles.checkbox}>
                        <span>10%</span>
                        <div className={styles.check}></div>
                    </div>
                </li>
                <li>
                    <div className={styles.plansBar}></div>
                    <div className={styles.plans}>
                        <span>재정적 자유 달성하기</span>
                        <h1>3년 적금 만기</h1>
                    </div>
                    <div className={styles.checkbox}>
                        <span>100%</span>
                        <div className={styles.check}></div>
                    </div>
                </li>
                <li>
                    <div className={styles.plansBar}></div>
                    <div className={styles.plans}>
                        <span>재정적 자유 달성하기</span>
                        <h1>주식 투자 공부하기</h1>
                    </div>
                    <div className={styles.checkbox}>
                        <span>24%</span>
                        <div className={styles.check}></div>
                    </div>
                </li>
                <li>
                    <div className={styles.plansBar}></div>
                    <div className={styles.plans}>
                        <span>창의적 활동 지속하기</span>
                        <h1>아이디어 시간 가지기</h1>
                    </div>
                    <div className={styles.checkbox}>
                        <span>12%</span>
                        <div className={styles.check}></div>
                    </div>
                </li>
            </ul>

        </div>
        </>
    )
}

export default ReflectionPlansList
