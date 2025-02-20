import styles from './index.module.css';

const Input = ({ inputRef, ...rest }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inputBox}>
        <input ref={inputRef} {...rest} className={styles.input} />
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Input;
