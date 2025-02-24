import styles from './index.module.css';
import Radio from '../../../components/atoms/Radio';

const PublihsedRadio = ({ label, onClick, selectedColor }) => {
  const colors = ['orange', 'lemon', 'green-apple', 'blueberry', 'grape'];

  return (
    <div className={styles.inputContainer}>
      {/* 📌 레이블 */}
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.wrap}>
        {colors.map((color) => (
          <Radio
            onClick={() => onClick(color)}
            key={color}
            color={color}
            value={color}
            name='publish'
            id={`publish-${color}`}
            selectedColor={selectedColor}
          />
        ))}
      </div>
    </div>
  );
};

export default PublihsedRadio;
