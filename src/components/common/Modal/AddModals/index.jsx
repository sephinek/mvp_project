import Modal from 'react-modal';
import { addGoalModalState } from '../../../../shared/recoil/addGoalModalState';
import { addPlanModalState } from '../../../../shared/recoil/addPlanModalState';
import styles from './index.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function AddModals() {
  const [goalState, setGoalState] = useRecoilState(addGoalModalState);
  const [planState, setPlanState] = useRecoilState(addPlanModalState);
  const {
    isOpen: goalIsOpen,
    title: goalTitle,
    subTitle: goalSubTitle,
    icon: goalIcon,
    callback: goalCallback,
  } = goalState;
  const {
    isOpen: planIsOpen,
    title: planTitle,
    subTitle: planSubTitle,
    icon: planIcon,
    callback: planCallback,
  } = planState;

  return (
    <section>
      <div className={styles.overlay}></div>
      <Modal
        isOpen={goalIsOpen}
        ariaHideApp={false}
        contentLabel='Pop up Message'
        shouldCloseOnOverlayClick={true}
        className={styles.modalContainer}
      >
        <div>Modal</div>
      </Modal>

      <Modal
        isOpen={planIsOpen}
        ariaHideApp={false}
        contentLabel='Pop up Message'
        shouldCloseOnOverlayClick={true}
        className={styles.modalContainer}
      ></Modal>
    </section>
  );
}
