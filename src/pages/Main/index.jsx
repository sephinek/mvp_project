import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';
import useCallModal from '../../hooks/useCallModal';
import { useRecoilValue } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';

export default function Main() {
  const myPlan = useRecoilValue(myPlanState);

  const { callModal } = useCallModal();
  const handleCallModal = () => {
    callModal('타이틀', '서브타이틀', '취소 버튼', '확인 버튼', () => {
      console.log('확인 버튼 눌렸습니다.');
    });
  };

  return (
    <>
      {myPlan && (
        <div className={styles.mainWrap}>
          <Vision />
          <Goals goals={myPlan.goals} />
          <Plans goals={myPlan.goals} />
          <BottomNav />
          <button onClick={handleCallModal}>눌러주세요</button>
        </div>
      )}
    </>
  );
}
