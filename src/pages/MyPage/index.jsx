import myPageImg from '../../assets/image/mypage.png';
import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';

export default function MyPage() {
  return (
    <section className={styles.imgContainer}>
      <img className={styles.img} src={myPageImg} alt='My Page Mock' />;
      <BottomNav />
    </section>
  );
}
