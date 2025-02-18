import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.css';

const Datefield_default = ({
  label,
  helpText,
  state = 'default',
  isDateRange = false,
  startDate = null,
  endDate = null,
  onStartDateChange,
  onEndDateChange,
  ...rest
}) => {
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false); // 시작 날짜 캘린더 상태
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false); // 종료 날짜 캘린더 상태

  const handleStartCalendarClick = () => {
    setIsStartCalendarOpen(true); // 시작 날짜 캘린더 열기
    setIsEndCalendarOpen(false); // 종료 날짜 캘린더 닫기
  };

  const handleEndCalendarClick = () => {
    setIsEndCalendarOpen(true); // 종료 날짜 캘린더 열기
    setIsStartCalendarOpen(false); // 시작 날짜 캘린더 닫기
  };

  const handleCloseCalendar = () => {
    setIsStartCalendarOpen(false); // 시작 날짜 캘린더 닫기
    setIsEndCalendarOpen(false); // 종료 날짜 캘린더 닫기
  };

  const handleStartDateChange = (date) => {
    onStartDateChange(date);
    setIsStartCalendarOpen(false); // 시작 날짜 선택 후 캘린더 닫기
  };

  const handleEndDateChange = (date) => {
    onEndDateChange(date);
    setIsEndCalendarOpen(false); // 종료 날짜 선택 후 캘린더 닫기
  };

  return (
    <div className={styles.inputContainer}>
      {/* 📌 레이블 */}
      {label && <label className={styles.label}>{label}</label>}

      {isDateRange ? (
        <div className={styles.dateRangeContainer}>
          {/* 📌 시작 날짜 입력 필드 */}
          <div
            className={`${styles.dateInput} ${styles[state] || ''}`}
            onClick={handleStartCalendarClick}
          >
            {startDate ? startDate.toLocaleDateString() : '시작 날짜'}
          </div>
          <span className={styles.dateSeparator}>-</span>
          {/* 📌 종료 날짜 입력 필드 */}
          <div
            className={`${styles.dateInput} ${styles[state] || ''}`}
            onClick={handleEndCalendarClick}
          >
            {endDate ? endDate.toLocaleDateString() : '종료 날짜'}
          </div>
        </div>
      ) : (
        <input
          {...rest}
          className={`${styles.inputField} ${styles[state] || ''}`}
        />
      )}

      {/* 📌 도움말 메시지 */}
      {helpText && (
        <p
          className={`${styles.helpText} ${
            state === 'error' ? styles.errorText : ''
          }`}
        >
          {helpText}
        </p>
      )}

      {/* 📌 바텀 시트 및 캘린더 */}
      <div
        className={`${styles.overlay} ${
          isStartCalendarOpen || isEndCalendarOpen ? styles.visible : ''
        }`}
        onClick={handleCloseCalendar}
      />
      {(isStartCalendarOpen || isEndCalendarOpen) && (
        <div className={`${styles.bottomSheet} ${styles.open}`}>
          <button className={styles.closeButton} onClick={handleCloseCalendar}>
            ×
          </button>
          <div className={styles.calendarWrapper}>
            {/* 📌 시작 날짜 캘린더 */}
            {isStartCalendarOpen && (
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsStart
                inline
              />
            )}
            {/* 📌 종료 날짜 캘린더 */}
            {isEndCalendarOpen && (
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsEnd
                inline
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Datefield_default;
