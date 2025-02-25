import { useSetRecoilState } from 'recoil';
import { initState, confirmModalState } from '../shared/recoil/confirmModalState';
// 준비중입니다 모달을 호출하는 hooks 입니다. (쉽게 말하면 그냥 함수입니다.)

const useCallModal = () => {
  const setModal = useSetRecoilState(confirmModalState);
  
  const callModal = (
    title = '',
    subTitle = '',
    cancleButtonName = '취소',
    confirmButtonName = '확인',
    callback = () => {} ,
    handleClickCancelButton = undefined,
    handleClickConfirmButton = undefined,
  ) => {
    setModal({
      isOpen: true,
      title,
      subTitle,
      cancleButtonName,
      confirmButtonName,
      callback,
      handleClickCancelButton,
      handleClickConfirmButton,
    });
  };

  const closeModal = () => {
    setModal(() => ({...initState}));
  };
  return { callModal, closeModal };
};
export default useCallModal;
