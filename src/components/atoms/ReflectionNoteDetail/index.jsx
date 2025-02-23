import { useParams } from 'react-router-dom';
import styles from './index.module.css';
import TopBar from '../../../components/atoms/TopBar';
import ChevronLeftButton from '../../../components/common/Icons/ChevronLeftButton';

const ReflectionNoteDetail = ({ children, ...rest }) => {
  const { id } = useParams();
  
  const goToBackHandler = () => {
    navigate(-1);
  };
  return (
    <section>
      <TopBar
        LeftIcon={ChevronLeftButton}
        title='회고 상세'
        onClickLeft={goToBackHandler}
      ></TopBar>
      <div className={styles.wrap} {...rest}>
        <div className={styles.reflectionNoteDetail}>
          <div className={styles.reflectionNoteTag}> 창의적 활동 지속하기 {id}</div>
          <h1>끝없는 목표 속에서</h1>
          <span>작성일: 2025년 2월 26일</span>
          <br></br>
          <p>이번 주는 정말 버거웠다. 새로운 목표를 세우고 실행하는 건 늘 즐거운 일이라고 생각했는데, 이번에는 뭔가 달랐다. 해야 할 일이 너무 많았고, 정작 왜 이걸 하고 있는지에 대한 확신이 부족했다. 하루하루 밀려오는 일정에 치이면서도 또 새로운 목표를 추가하고 있는 나를 보면서, 정말 이게 맞는 건가 하는 생각이 들었다.</p>
          <br></br>
          <p>마라톤 연습도 해야 했고, 자격증 공부도 해야 했고, 저축 계획도 세워야 했는데, 결국 어느 하나 제대로 집중하지 못했다. 하루를 마무리할 때마다 ‘오늘도 그냥 바쁘기만 했네’라는 느낌이 들었다. 목표를 세우는 건 쉬운데, 끝까지 밀고 나가는 게 이렇게 어려운 일이었나 싶다.</p>
          <br></br>
          <p>그래도 포기하고 싶진 않다. 다만, 다음 주에는 무작정 실행하는 것보다 나한테 진짜 중요한 게 뭔지 다시 한번 정리해봐야겠다. 지금의 이 답답함이 단순한 피로 때문인지, 아니면 방향을 제대로 잡지 못해서인지 곰곰이 생각해봐야 할 것 같다.</p>        
        </div>
      </div>
    </section>
  );
};

export default ReflectionNoteDetail;
