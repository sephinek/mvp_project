import styles from './index.module.css';

export default function SectionTitle02({ titleEn, titleKr, onAdd }) {
  return (
    <div className={styles.titleContainer}>
      <div>
        <span className={styles.titleEn}>{titleEn}</span>
        <span className={styles.titleKr}>{titleKr}</span>
      </div>
      <div onClick={onAdd} className={styles.plusButton}></div>
    </div>
  );
}
