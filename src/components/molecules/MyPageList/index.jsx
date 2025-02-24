
import React from 'react';
import styles from './index.module.css'

const MypageList = () => {
  return (
   <div className={styles.my}>
     <ul className={styles.myList01}>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>내 정보</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
       <div className={styles.myListLine}></div>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>알림설정</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
       <div className={styles.myListLine}></div>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>구독 멤버십</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
       <div className={styles.myListLine}></div>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>일반</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
     </ul>

     <ul className={styles.myList02}>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>웹 계정으로 로그인하기</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
     </ul>

     <ul className={styles.myList03}>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>문의하기</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
       <div className={styles.myListLine}></div>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>개인정보 보호 설정</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
       <div className={styles.myListLine}></div>
       <li>
        <div>
          <div className={styles.myListImage}></div>
          <div className={styles.myListText}>서비스 약관</div>
        </div>
        <div className={styles.myListIcon}></div>
       </li>
     </ul>
   </div>
  );
};

export default MypageList;