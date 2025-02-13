import styles from './index.module.css';

export default function Vision({ myVision }) {
  return (
    <section className={styles.visionContainer}>
      <div className={styles.logo}>Lucid</div>
      <div className={styles.visionHeading}>나의 비전은</div>
      <div className={styles.visionText}>"{myVision}"</div>
    </section>
  );
}
