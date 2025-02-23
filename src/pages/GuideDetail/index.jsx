import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import styles from './index.module.css';
import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';

export default function GuideDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goToBackHandler = () => {
    navigate(-1);
  };  
  return (
    <section>
      <TopBar
        LeftIcon={ChevronLeftButton}
        title='가이드'
        onClickLeft={goToBackHandler}
      ></TopBar>
      <div className={styles.wrap}>
        <div className={styles.guideDetailImage}></div>
        <div className={styles.guideDetail}>
          <div className={styles.guideDetailChip}> 미래 시간 조망 {id}</div>
          <h1>미래를 보는 힘:장기적인 목표 설정이 삶을 어떻게 변화시키는가</h1>
          <ol className={styles.GuideSubText}>
            <li>
              <div className={styles.guideCalendar}></div>
              <span>2025년 2월 26일</span>
            </li>
            <li>
              <div className={styles.guideTime}></div>
              <span>10 min</span>
            </li>
          </ol>
          <br></br>
          <bold>1. 왜 장기적인 목표가 중요한가</bold>
          <p>우리는 하루하루 바쁘게 살아가면서도, 가끔은 ‘나는 어디로 가고 있는 걸까?’라는 질문을 던지게 된다.
            <br></br>
            단기적인 목표는 빠른 성취감을 줄 수 있지만, 장기적인 목표 없이 흘러가는 삶은 방향성을 잃고 방황하기 쉽다.
            <br></br>
            장기 목표는 삶의 나침반과 같다. 그것이 있으면 우리는 우선순위를 정하고, 의미 있는 선택을 하며, 장기적인 성취를 이뤄나갈 수 있다.</p>
          <br></br>
          <bold>2. 장기목표가 주는 삶의 변화</bold>
          <p>1)방향성을 제공한다</p>
          <p>장기 목표는 우리가 단기적인 유혹에 휘둘리지 않도록 돕는다. 예를 들어, 재정적으로 자유로운 삶을 원한다면, 오늘의 충동적인 소비를 줄이고 꾸준한 저축과 투자를 선택할 가능성이 높아진다.</p>        
        </div>
      </div>
    </section>
  )
}
