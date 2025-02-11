import styles from './index.module.css';

export default function Vision() {
  return (
    <section className={styles.visionContainer}>
      <div className={styles.visionHeading}>나의 비전은</div>
      <div className={styles.visionText}>"마음이 풍족한 사람이 되자"</div>
    </section>
  );
}
