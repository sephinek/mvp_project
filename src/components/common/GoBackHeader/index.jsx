import styles from './index.module.css';
import chevronLeftIcon from '../../../assets/icons/humble/chevron-left.svg';

export default function GoBackHeader({ handler }) {
  return (
    <header className={styles.wrap}>
      <img className={styles.icon} src={chevronLeftIcon} onClick={handler} />
    </header>
  );
}
