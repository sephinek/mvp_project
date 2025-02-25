
import styles from './index.module.css';

export default function Splash() {

  return (
    <>
      <div className={styles.splashWrap}>
        <div className={styles.splash}>
          <div className={styles.splashLogo}></div>
          <div className={styles.splashLogo02}>
            <div className={styles.splashLogoImage}></div>
          </div>
        </div>
      </div>
    </>
  );
}
