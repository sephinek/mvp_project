import styles from './index.module.css';

const TopBar = ({ title, LeftIcon, RightIcon, ...rest }) => {
  return (
    <div className={styles.topBar} {...rest}>
      <div className={styles.iconLeft}>{LeftIcon && <LeftIcon />}</div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.iconRight}>{RightIcon && <RightIcon />}</div>
    </div>
  );
};

export default TopBar;
