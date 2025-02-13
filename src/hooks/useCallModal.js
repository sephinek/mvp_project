import { useSetRecoilState } from 'recoil';
import { confirmModalState } from '../shared/recoil/confirmModalState';

// 준비중입니다 모달을 호출하는 hooks 입니다. (쉽게 말하면 그냥 함수입니다.)
const useCallModal = () => {
  const setModal = useSetRecoilState(confirmModalState);

  const callModal = () => {
    setModal({ isOpen: true });
  };

  const closeModal = () => {
    setModal({ isOpen: false });
  };

  return { callModal, closeModal };
};

export default useCallModal;
