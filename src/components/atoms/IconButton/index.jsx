import styles from './index.module.css';

export default function IconButton({ icon, alt, onClick }) {
  return (
    <button className={styles.iconBtn} onClick={onClick}>
      <img src={icon} alt={alt} className={styles.icon} />
    </button>
  );
}
