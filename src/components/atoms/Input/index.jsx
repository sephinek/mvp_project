import styles from './index.module.css';

const Input = ({ inputRef, type = 'hidden', ...rest }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inputBox}>
        <input ref={inputRef} {...rest} className={styles.input} />
        <div className={styles.lineBox}>
          <div className={styles.line}></div>
          <span
            className={`${type === 'hidden' ? styles.hidden : styles.visible}`}
          >
            것
          </span>
        </div>
      </div>
    </div>
  );
};

export default Input;
