import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { useRecoilValue } from 'recoil';
import { myPlanState } from '../../../shared/recoil/myPlanState';

export default function Vision() {
  const navigate = useNavigate();
  const { vision } = useRecoilValue(myPlanState);

  return (
    <section className={styles.visionContainer}>
      <div className={styles.logo} onClick={() => navigate('/main')}>
        Lucid
      </div>
      <div className={styles.visionHeading}>나의 비전은</div>
      <span className={styles.visionText}>&quot;{vision} 사람&quot;</span>
    </section>
  );
}
