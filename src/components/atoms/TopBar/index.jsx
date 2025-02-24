import styles from './index.module.css';

const TopBar = ({
  title,
  LeftIcon,
  RightIcon,
  onClickLeft,
  onClickRight,
  ...rest
}) => {
  return (
    <div className={styles.topBar} {...rest}>
      <div className={styles.iconLeft} onClick={onClickLeft}>
        {LeftIcon && <LeftIcon />}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.iconRight} onClick={onClickRight}>
        {RightIcon && <RightIcon />}
      </div>
    </div>
  );
};

export default TopBar;
