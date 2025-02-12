import styles from './index.module.css'


const OnboardingSubtitle = ({ children, ...rest }) => {
  return (
      <p {...rest}className={styles.subtitle}>
        {children}
        </p>
  );
};

export default OnboardingSubtitle;