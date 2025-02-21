import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import BottomNav from '../../components/common/BottomNav';
import useCallModal from '../../hooks/useCallModal';
import { useRecoilValue } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import { useState } from 'react';
import HomePlanBottomSheet from '../../components/organisms/HomePlanBottomSheet';
import styles from './index.module.css';

export default function Main() {
  const myPlan = useRecoilValue(myPlanState);

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const planClickHandler = (plan) => {
    setSelectedPlan(plan);
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
        selectedPlan={selectedPlan}
      />
    </>
  );
}
