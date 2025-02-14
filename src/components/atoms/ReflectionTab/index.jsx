import { useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ReflectionTab = ({ children, ...rest }) => {
  const [activeTab, setActiveTab] = useState(0); // 활성화된 탭 상태

  // 탭 이름 배열
  // const tabNames = ['비전보드', '회고', '가이드', '계획정리'];
  const tabs = [
    { title: '비전보드', to: '/reflection/vision-board' },
    { title: '회고', to: '/reflection/review' },
    { title: '가이드', to: '/reflection/guide' },
    { title: '계획정리', to: '/reflection/plans-review' },
  ];

  // 탭 클릭 시 활성화된 탭 변경
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div {...rest} className={styles.tabContainer}>
      <ul className={styles.tab}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? styles.activeTab : ''} // 선택된 탭에 activeTab 클래스 적용
            onClick={() => handleTabClick(index)} // 클릭 시 활성화된 탭 상태 변경
          >
            <div
              className={`${styles.tab} ${
                activeTab === index ? styles.activeTab : ''
              }`}
            >
              <Link className={styles.tabName} to={tab.to}>
                {tab.title}
              </Link>
            </div>
            <span
              className={activeTab === index ? styles.activeSpan : ''}
            ></span>
            {/* 선택된 탭에만 활성화된 밑줄 표시 */}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default ReflectionTab;
