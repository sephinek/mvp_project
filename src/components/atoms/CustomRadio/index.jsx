import React, { useState } from 'react';
import styles from './index.module.css'; // CSS 모듈로 임포트

function CustomRadio() {
  const colors = 
  ['#FFBC88', '#FFF7A4', '#BBE7AB', '#9CD4F7', '#C4B9F6'
    
  ]; // 색상 배열
  const [selectedColor, setSelectedColor] = useState(0); // 기본값을 0으로 설정

  const onChangeRadio = (e) => {
    setSelectedColor(Number(e.target.value)); // 선택된 색상을 업데이트
  };

  return (
    <div className={styles.radioWrap}>
      {
        colors.map((color, idx) => (
          <label key={idx} className={styles.label}>
            <input
              type="radio"
              name="colors"
              value={idx}
              onChange={onChangeRadio}
              checked={idx === selectedColor}
              className={styles.radioInput} // 실제 radio input은 숨김
            />
            <span
              className={`${styles.fruit} ${idx === selectedColor ? styles.selected : ''}`}
              style={{
                backgroundColor: idx === selectedColor ? 'white' : color, // 선택된 상태에서 배경을 하얀색으로, 아닌 경우 색상 배경
                borderColor: idx === selectedColor ? color : 'transparent', // 선택된 상태에서 테두리는 색상으로
              }}
            ></span>
          </label>
        ))
      }
    </div>
  );
}

export default CustomRadio;
