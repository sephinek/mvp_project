import { dayOptions } from '../../../utils/date';
import styles from './index.module.css';

const SimpleDateGrid = ({ label, selected, setSelected }) => {
  return (
    <div className={styles.inputContainer}>
      {/* 📌 레이블 */}
      {label && <label className={styles.label}> {label}</label>}

      <div className={styles.wrap}>
        <ul className={styles.simpleDateGrid}>
          {dayOptions.map(({ label, value }) => {
            const isSelected = selected?.includes(value)
            return (
              <li
                className={isSelected ? styles.selected : ''}
                key={label}
                onClick={() => setSelected(value)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SimpleDateGrid;
