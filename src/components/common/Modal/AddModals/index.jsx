import Modal from 'react-modal';
import { addModalState } from '../../../../shared/recoil/addModalState';
import styles from './index.module.css';
import { useRecoilState } from 'recoil';
import HomeQuickButtons from '../../../organisms/HomeQuickButtons';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddModals() {
  const [goalState, setGoalState] = useRecoilState(addModalState);
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <HomeQuickButtons />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </section>
  );
}
