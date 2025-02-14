import { useSetRecoilState } from 'recoil';
import { addGoalModalState } from '../shared/recoil/addGoalModalState';
// 준비중입니다 모달을 호출하는 hooks 입니다. (쉽게 말하면 그냥 함수입니다.)

const useCallAddGoalModal = () => {
  const setAddGoalModal = useSetRecoilState(addGoalModalState);
  const callAddGoalModal = (
    title = '',
    subTitle = '',
    icon,
    callback = () => {}
  ) => {
    setAddGoalModal({
      isOpen: true,
      title,
      subTitle,
      icon,
      callback,
    });
  };
  return { callAddGoalModal };
};

export default useCallAddGoalModal;
