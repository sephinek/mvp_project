import Modal from 'react-modal';

import { useRecoilState } from 'recoil';
import { confirmModalState } from '../../../../shared/recoil/confirmModalState';

const ConfirmModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(confirmModalState);

  const handleClose = () => {
    setModalOpen({ isOpen: false });
  };

  return (
    <Modal
      isOpen={modalOpen.isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      contentLabel='Pop up Message'
      shouldCloseOnOverlayClick={false}
    >
      <div>준비중입니다.</div>
      <button onClick={handleClose}>확인</button>
    </Modal>
  );
};

export default ConfirmModal;
