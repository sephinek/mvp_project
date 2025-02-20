import Button from '../Button';
import styles from './index.module.css';

export default function ButtonSet({
  firstBtnTheme,
  firstBtnText,
  firstBtnType,
  firstOnClick,
  secondBtnTheme,
  secondBtnText,
  secondBtnType,
  secondOnClick,
}) {
  return (
    <div className={styles.buttonsContainer}>
      <Button theme={firstBtnTheme} type={firstBtnType} onClick={firstOnClick}>
        {firstBtnText}
      </Button>
      <Button
        theme={secondBtnTheme}
        type={secondBtnType}
        onClick={secondOnClick}
      >
        {secondBtnText}
      </Button>
    </div>
  );
}
