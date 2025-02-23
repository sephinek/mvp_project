import myPageImg from '../../assets/image/mypage.png';
import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';
import MyPageOverview from '../../components/atoms/myPageOverview';

export default function MyPage() {
  return (
    <section className={styles.imgContainer}>
      <MyPageOverview></MyPageOverview>
      {/* <img className={styles.img} src={myPageImg} alt='My Page Mock' />; */}
      <BottomNav />
    </section>
  );
}
