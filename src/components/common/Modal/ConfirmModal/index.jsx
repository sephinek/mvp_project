import Modal from 'react-modal';

import { useRecoilState } from 'recoil';
import { initState, confirmModalState } from '../../../../shared/recoil/confirmModalState';

import styles from './index.module.css';
import Button from '../../../atoms/Button';

const ConfirmModal = () => {
  const [modalState, setModalState] = useRecoilState(confirmModalState);
  const {
    isOpen,
    title,
    subTitle,
    confirmButtonName,
    cancleButtonName,
    callback,
    handleClickConfirmButton,
    handleClickCancelButton,
  } = modalState;
  
  const handleClose = () => {
    setModalState({ ...initState });
    if(typeof handleClickCancelButton !== 'function') {
      callback();
      return;
    }
    handleClickCancelButton();
  };

  const handleConfirm = () => {
    setModalState({ ...initState });
    if(typeof handleClickConfirmButton !== 'function') {
      callback();
      return;
    }
    handleClickConfirmButton();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      contentLabel='Pop up Message'
      shouldCloseOnOverlayClick={true}
      className={styles.modalContainer}
      style={{
        overlay: {
          zIndex:10000,
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>

        <div className={styles.buttonContainer}>
          <Button onClick={handleClose} theme='tertiary' size='medium'>
            {cancleButtonName}
          </Button>
          <Button onClick={handleConfirm} size='medium'>
            {confirmButtonName}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
