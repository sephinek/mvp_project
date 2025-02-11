import styles from './index.module.css';

export default function SectionTitle() {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.titleEn}>Plan</span>
      <span className={styles.titleKr}>계획</span>
    </div>
  );
}
