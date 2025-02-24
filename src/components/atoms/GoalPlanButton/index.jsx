import React from 'react';
import styles from './index.module.css'; // CSS 모듈로 임포트

const GoalPlanButton = ({ title, subtitle, icon, onClick }) => (
  <div className={styles.buttonContainer} onClick={onClick}>
    <div className={styles.textContainer}>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
    <div className={styles.iconContainer}>
      {icon}
    </div>
  </div>
);

function App() {
  return (
    <div className={styles.buttonWrap}>
      <GoalPlanButton
        title="목표 추가"
        subtitle="목표를 추가해보세요"
        icon={<i className="fas fa-plus-circle"></i>}
        onClick={() => console.log("목표 추가")}
      />
      <GoalPlanButton
        title="계획 추가"
        subtitle="계획을 추가해보세요"
        icon={<i className="fas fa-calendar-plus"></i>}
        onClick={() => console.log("계획 추가")}
      />
    </div>
  );
}

export default App;
