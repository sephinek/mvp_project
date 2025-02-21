import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';
import useCallModal from '../../hooks/useCallModal';
import { useRecoilValue } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import { useState } from 'react';
import HomePlanBottomSheet from '../../components/organisms/HomePlanBottomSheet';

export default function Main() {
  const myPlan = useRecoilValue(myPlanState);

  const { callModal } = useCallModal();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState('');

  const handleCallModal = () => {
    callModal('타이틀', '서브타이틀', '취소 버튼', '확인 버튼', () => {
      console.log('확인 버튼 눌렸습니다.');
    });
  };

  const planClickHandler = (planTitle) => {
    setSelectedPlanTitle(planTitle);
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheetHandler = () => setIsBottomSheetOpen(false);

  return (
    <>
      {myPlan && (
        <div className={styles.mainWrap}>
          <Vision />
          <Goals goals={myPlan.goals} />
          <Plans goals={myPlan.goals} onPlanClick={planClickHandler} />
          <BottomNav />
        </div>
      )}
      <HomePlanBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={closeBottomSheetHandler}
        selectedPlanTitle={selectedPlanTitle}
      />
    </>
  );
}
