import styles from './index.module.css';

const OnBoardingTitle = ({ children, secondLine, thirdLine, type }) => {
  return (
    <div className={styles.onboardingTitleBox}>
      <span className={styles.title}>{children}</span>
      <span
        className={`${
          type === 'vision' ? styles.visionLine : styles.secondLine
        }`}
      >
        {secondLine}
      </span>
      <span className={styles.thirdLine}>{thirdLine}</span>
    </div>
  );
};
export default OnBoardingTitle;
