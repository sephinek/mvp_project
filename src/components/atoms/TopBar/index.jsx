import styles from './index.module.css';

const TopBar = ({ title, iconLeft, iconRight, ...rest }) => {
  return (
    <div className={styles.topBar} {...rest}>
      <div className={styles.iconLeft}>{iconLeft}</div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.iconRight}>{iconRight}</div>
    </div>
  );
};

export default TopBar;
