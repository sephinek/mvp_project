import Modal from 'react-modal';
import { addModalState } from '../../../../shared/recoil/addModalState';
import styles from './index.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import useNavigationPage from '../../../../hooks/useNavigationPage';

export default function AddModals() {
  const [goalState, setGoalState] = useRecoilState(addModalState);
  const { routePage } = useNavigationPage();
  const { isOpen, title, subTitle, icon } = goalState;

  return (
    <section>
      <div className={styles.overlay}></div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        contentLabel='Pop up Message'
        shouldCloseOnOverlayClick={true}
        className={styles.modalContainer}
      >
        <div>Modal</div>
        <button onClick={() => routePage('/goal/add')}>골 수정</button>
        <button>플랜 수정</button>
      </Modal>
    </section>
  );
}
