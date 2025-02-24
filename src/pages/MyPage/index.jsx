import myPageImg from '../../assets/image/mypage.png';
import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';
import MyPageOverview from '../../components/atoms/myPageOverview';
import SectionTitle  from'../../components/atoms/SectionTitle';

export default function MyPage() {
  return (
    <section className={styles.imgContainer}>
      <MyPageOverview></MyPageOverview>
      <div className={styles.wrap}>
        <SectionTitle titleEn='My Page' titleKr='내 정보' />

      </div>
      {/* <img className={styles.img} src={myPageImg} alt='My Page Mock' />; */}
      <BottomNav />
    </section>
  );
}
