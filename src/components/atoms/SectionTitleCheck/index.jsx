import styles from './index.module.css';

export default function SectionTitleCheck({ titleEn, titleKr }) {
  return (
    <div className={styles.titleContainer}>
      <div>
        <span className={styles.titleEn}>{titleEn}</span>
        <span className={styles.titleKr}>{titleKr}</span>
      </div>
      <div>
        <p>선택 4개</p>
        <div className={styles.check}></div>
      </div>
    </div>
  );
}
