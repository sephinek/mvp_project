import Modal from 'react-modal';
import { addModalState } from '../../../../shared/recoil/addModalState';
import styles from './index.module.css';
import { useRecoilState } from 'recoil';
import useNavigationPage from '../../../../hooks/useNavigationPage';
import HomeQuickButtons from '../../../organisms/HomeQuickButtons';

export default function AddModals() {
  const [goalState, setGoalState] = useRecoilState(addModalState);
  const { routePage } = useNavigationPage();
  const { isOpen, title, subTitle, icon } = goalState;

  return (
    <section>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        contentLabel='Pop up Message'
        shouldCloseOnOverlayClick={true}
        className={styles.modalContainer}
        overlayClassName={styles.overlay}
      >
        <HomeQuickButtons />
      </Modal>
    </section>
  );
}
