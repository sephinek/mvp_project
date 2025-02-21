import styles from './index.module.css';

const Togglebox = ({ label, isPaused, setIsPaused }) => {
  return (
    <div className={styles.inputContainer}>
      {/* 📌 레이블 */}
      {label && <label className={styles.label}> {label}</label>}

      <div className={styles.wrap}>
        <div className={styles.togglebox}>
          <label htmlFor=''>휴식 가지기</label>
          <div className={styles.toggle} onClick={() => setIsPaused(!isPaused)}>
            <div className={styles.toggleBTN}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Togglebox;
