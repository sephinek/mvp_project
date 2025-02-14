import React from "react";
import styles from './index.module.css';

const Ai_button = ({
  icon, // 아이콘 (React 컴포넌트 또는 이미지)
  title, // 타이틀 텍스트
  subtitle, // 서브타이틀 텍스트
  buttonText, // 버튼 텍스트
  buttonIcon, // 버튼 아이콘 (React 컴포넌트 또는 이미지)
  onClick, // 버튼 클릭 이벤트 핸들러
}) => {
  return (
    <div className={styles.card}>
      {/* 텍스트 영역 */}
      <div className={styles.textArea}>
        {/* 아이콘 영역 */}
        {icon && <div className={styles.icon}>{icon}</div>}

        {/* 타이틀과 서브타이틀 */}
        <div className={styles.textContent}>
          {title && <div className={styles.title}>{title}</div>}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </div>

      {/* 버튼 영역 */}
      <button className={styles.button} onClick={onClick}>
        {buttonIcon && <div className={styles.buttonIcon}>{buttonIcon}</div>}
        {buttonText && <span className={styles.buttonText}>{buttonText}</span>}
      </button>
    </div>
  );
};

export default Ai_button;