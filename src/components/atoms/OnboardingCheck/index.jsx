import OnboardingIcon from '../../common/Icons/OnboardingIcon';
import styles from './index.module.css';

const OnboardingCheck = ({
  id,
  name,
  value,
  icon,
  targetFn,
  isSelected,
  children,
}) => {
  return (
    <div>
      <input
        type='checkbox'
        id={id}
        name={name}
        className={`${isSelected ? styles.active : styles.input}`}
        value={value}
        onChange={targetFn}
        checked={isSelected}
      />
      <label htmlFor={id} className={styles.label}>
        <OnboardingIcon icon={icon} />
        {children}
      </label>
    </div>
  );
};

export default OnboardingCheck;
