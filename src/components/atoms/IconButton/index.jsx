import styles from './index.module.css';

export default function IconButton({
  icon,
  alt,
  onClick,
  type = 'default',
  isActive,
}) {
  return (
    <button className={styles.iconBtn} onClick={onClick}>
      <img
        src={icon}
        alt={alt}
        className={`${type === 'default' && styles.icon} ${styles[type]} ${
          isActive ? styles.activeIcon : ''
        }`}
      />
    </button>
  );
}
