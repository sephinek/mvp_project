import React from "react";
import styles from './index.module.css';

const Ai_button = ({
  title, // 타이틀 텍스트
  onClick, // 버튼 클릭 이벤트 핸들러
}) => {
  return (
    <div className={styles.card}>
      {/* 텍스트 영역 */}
      <div className={styles.textArea}>
        {/* 아이콘 영역 */}
        <div className={styles.icon}></div>

        {/* 타이틀과 서브타이틀 */}
        <div className={styles.textContent}>
          {title && <div className={styles.title}>{title}</div>}
          <div className={styles.subtitle}>해당 기능은 Chat GPT를 활용합니다.<br></br>개인정보 입력은 유의해 주세요</div>
        </div>
      </div>

      {/* 버튼 영역 */}
      <button className={styles.button} onClick={onClick}>
          <div className={styles.buttonIcon}></div>
          <span className={styles.buttonText}>AI 계획 추천받기</span>
      </button>
    </div>
  );
};

export default Ai_button;