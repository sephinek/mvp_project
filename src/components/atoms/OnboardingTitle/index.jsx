import styles from './index.module.css'


const OnboardingTitle = ({ children, ...rest }) => {
  return (
      <h1 {...rest}className={styles.title}>
      {children}
      </h1>
  );
};

export default OnboardingTitle;