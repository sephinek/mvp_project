import { Link, useParams } from 'react-router-dom';
import { Sheet } from 'react-modal-sheet';
import chevronRightIcon from '../../../assets/icons/humble/chevron-right.svg';
import bulbIcon from '../../../assets/icons/humble/bulb.svg';
import vacationIcon from '../../../assets/icons/solar/solar-vacation--black.svg';
import editIcon from '../../../assets/icons/humble/edit.svg';
import styles from './index.module.css';
import useCallModal from '../../../hooks/useCallModal';
import { useSetRecoilState } from 'recoil';
import { myPlanState } from '../../../shared/recoil/myPlanState';

const HomePlanBottomSheet = ({ isOpen, onClose, selectedPlan }) => {
  const { callModal, closeModal } = useCallModal();
  const setMyPlanState = useSetRecoilState(myPlanState);

  const restClickHandler = () => {
    onClose();

    callModal(
      '휴식 가지기',
      <>
        지금까지의 데이터는 보관되며,<br></br> 이후 반복은 중지됩니다.
      </>,
      '괜찮아요',
      '휴식 가질래요',
      () => {
        setMyPlanState((prev) =>
          prev
            ? {
                ...prev,
                goals: prev.goals.map((goal) => ({
                  ...goal,
                  plans: goal.plans.map((plan) =>
                    plan.id === selectedPlan.id
                      ? { ...plan, isPaused: true }
                      : plan
                  ),
                })),
              }
            : prev
        );
        closeModal();
      }
    );
  };

  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent='content-height'>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content
          style={{
            padding: '0 16px 24px',
          }}
        >
          <h2 className={styles.title}>{selectedPlan.title}</h2>

          <div className={styles.buttons}>
            <Link to='/reflection/review'>
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

            <Link to='/main'>
              <div className={styles.button} onClick={restClickHandler}>
                <div className={styles.left}>
                  <img src={vacationIcon} />
                  휴식 가지기
                </div>
                <span>
                  <img src={chevronRightIcon} width={20} height={20} />
                </span>
              </div>
            </Link>

            <Link to={`/plan/edit/${selectedPlan.id}`}>
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
