import styles from './index.module.css';

export default function SectionTitle({ titleEn, titleKr }) {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.titleEn}>{titleEn}</span>
      <span className={styles.titleKr}>{titleKr}</span>
    </div>
  );
}
