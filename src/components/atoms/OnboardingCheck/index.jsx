import styles from './index.module.css'

const OnboardingCheck = ({
  id,
  name,
  value,
  children,
}) => {
  return <div>
    <input type='checkbox' id={id} name={name} className={styles.input} value={value}/>
    <label htmlFor={id} className={styles.label}>
      {children}
    </label>
  </div>
}

export default OnboardingCheck;