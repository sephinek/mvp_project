import { Sheet } from 'react-modal-sheet';
import styles from './index.module.css';
import chevronRightIcon from '../../../assets/icons/humble/chevron-right.svg';
import bulbIcon from '../../../assets/icons/humble/bulb.svg';
import vacationIcon from '../../../assets/icons/solar/solar-vacation--black.svg';
import editIcon from '../../../assets/icons/humble/edit.svg';
import { Link } from 'react-router-dom';

const HomePlanBottomSheet = ({ isOpen, onClose, selectedPlanTitle }) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent='content-height'>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content
          style={{
            padding: '0 16px 24px',
          }}
        >
          <h2 className={styles.title}>{selectedPlanTitle}</h2>

          <div className={styles.buttons}>
            <Link to='/'>
              <div className={styles.button}>
                <div className={styles.left}>
                  <img src={bulbIcon} />
                  회고하기
                </div>
                <span>
                  <img src={chevronRightIcon} width={20} height={20} />
                </span>
              </div>
            </Link>

            <Link to='/'>
              <div className={styles.button}>
                <div className={styles.left}>
                  <img src={vacationIcon} />
                  휴식 가지기
                </div>
                <span>
                  <img src={chevronRightIcon} width={20} height={20} />
                </span>
              </div>
            </Link>

            <Link to='/'>
              <div className={styles.button}>
                <div className={styles.left}>
                  <img src={editIcon} width={20} height={20} />
                  수정하기
                </div>
                <span>
                  <img src={chevronRightIcon} width={20} height={20} />
                </span>
              </div>
            </Link>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
};

export default HomePlanBottomSheet;
