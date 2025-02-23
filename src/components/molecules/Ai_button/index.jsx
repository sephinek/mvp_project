import React, { useState} from "react";
import styles from './index.module.css';

const Ai_button = ({
  title, 
  onClick, 
}) => {

  const [isSetting, setIsSetting] = useState(false); 
  const [hasGenerated, setHasGenerated] = useState(false); 

  const handleClick = async () => {
    if (!hasGenerated) {
      setIsSetting(true);
      try {
        // 로딩 중 상태
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsSetting(false); 
        setHasGenerated(true); 
      } catch (error) {
        setIsSetting(false);
      }
    } else {
      // '다시 생성하기' 클릭 시, AI 다시 생성
      setHasGenerated(false);
      setIsSetting(false);
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.textArea}>
        <div className={styles.icon}></div>

        <div className={styles.textContent}>
          {title && <div className={styles.title}>{title}</div>}
          <div className={styles.subtitle}>해당 기능은 Chat GPT를 활용합니다.<br></br>개인정보 입력은 유의해 주세요</div>
        </div>
      </div>
      <button 
        className={styles.button} 
        onClick={handleClick}
        disabled={isSetting}
      >
          <div className={styles.buttonIcon}></div>
          <span className={styles.buttonText}>
          {isSetting ? "AI 세팅중입니다..." : hasGenerated ? "다시 생성하기" : "AI 계획 추천받기"}</span>
      </button>
    </div>
  );
};

export default Ai_button;