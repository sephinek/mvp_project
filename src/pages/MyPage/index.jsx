import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';
import MyPageOverview from '../../components/atoms/MyPageOverview';
import SectionTitle from '../../components/atoms/SectionTitle';
import MypageList from '../../components/molecules/MyPageList';

export default function MyPage() {
  return (
    <section className={styles.imgContainer}>
      <MyPageOverview></MyPageOverview>
      <div className={styles.wrap}>
        <SectionTitle titleEn='My Page' titleKr='내 정보' />
        <MypageList></MypageList>
      </div>
      {/* <img className={styles.img} src={myPageImg} alt='My Page Mock' />; */}
      <BottomNav />
    </section>
  );
}
