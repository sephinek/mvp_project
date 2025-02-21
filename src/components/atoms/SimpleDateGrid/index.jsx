import styles from './index.module.css';

const weeks = ['월', '화', '수', '목', '금', '토', '일'];

const SimpleDateGrid = ({ label, selected, setSelected }) => {
  return (
    <div className={styles.inputContainer}>
      {/* 📌 레이블 */}
      {label && <label className={styles.label}> {label}</label>}

      <div className={styles.wrap}>
        <ul className={styles.simpleDateGrid}>
          {weeks.map((el) => (
            <li
              className={selected?.includes(el) && styles.selected}
              key={el}
              onClick={() => setSelected(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleDateGrid;
