import { useSetRecoilState } from 'recoil';
import { addPlanModalState } from '../shared/recoil/addPlanModalState';
// 준비중입니다 모달을 호출하는 hooks 입니다. (쉽게 말하면 그냥 함수입니다.)

const useCallAddPlanModal = () => {
  const setAddPlanModal = useSetRecoilState(addPlanModalState);
  const callAddPlanModal = (
    title = '',
    subTitle = '',
    icon,
    callback = () => {}
  ) => {
    setAddPlanModal({
      isOpen: true,
      title,
      subTitle,
      icon,
      callback,
    });
  };
  return { callAddPlanModal };
};

export default useCallAddPlanModal;
