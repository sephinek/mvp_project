
import Modal from 'react-modal';

import { useRecoilState } from 'recoil';
import { confirmModalState } from '../../../../shared/recoil/confirmModalState';

import styles from './index.module.css';
import Button from "../../../atoms/Button";


const ConfirmModal = () => {
    const [modalState, setModalState] = useRecoilState(confirmModalState);
    const {
        isOpen,
        title,
        subTitle,
        callback,
        confirmButtonName,
        cancleButtonName,
    } = modalState;
    const handleClose = () => {
        setModalState({ isOpen: false });
};

return (
    <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={true}
        className={styles.modalContainer}
    >
        <div className={styles.modal}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subTitle}</div>
      
            <div className={styles.buttonContainer}>
                <Button onClick={handleClose} theme='tertiary' size="medium">{cancleButtonName}</Button>
                <Button onClick={callback} size="medium">{confirmButtonName}</Button>
            </div>
        </div>
    </Modal>
  );
};

export default ConfirmModal;
