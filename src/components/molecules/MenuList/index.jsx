
import React from 'react';
import styles from './index.module.css'

const MenuList = ({ items }) => {
  return (
    <div className={styles.menuList}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className={styles.menuItem}>
            {/* 아이콘 */}
            {item.icon && <div className={styles.icon}>{item.icon}</div>}

            {/* 텍스트 */}
            <div className={styles.text}>{item.text}</div>

            {/* 우측 화살표 */}
            <div className={styles.arrow}>&#9662;</div>
          </div>

          {/* 구분선 (마지막 아이템 제외) */}
          {index < items.length - 1 && (
            <div className={styles.divider}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuList;