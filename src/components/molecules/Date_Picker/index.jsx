import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.css';
import { getDate } from '../../../utils/date';
import Textfield_default from '../../atoms/Textfield_defalt';

const DateController = ({ date = null, setDate }) => {
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false); // 시작 날짜 캘린더 상태

  const handleCallPicker = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen); // 시작 날짜 캘린더 열기
  };

  const handleStartDateChange = (date) => {
    setDate(getDate(date));
    setIsStartCalendarOpen(false); // 시작 날짜 선택 후 캘린더 닫기
  };

  return (
    <div className={styles.inputContainer}>
      <Textfield_default
        onFocus={handleCallPicker}
        label='기간'
        placeholder={date}
      />
      <div
        className={`${styles.overlay} ${
          isStartCalendarOpen ? styles.visible : ''
        }`}
        onClick={handleCallPicker}
      />
      {isStartCalendarOpen && (
        <div className={`${styles.bottomSheet} ${styles.open}`}>
          <button className={styles.closeButton} onClick={handleCallPicker}>
            ×
          </button>
          <div className={styles.calendarWrapper}>
            {/* 📌 시작 날짜 캘린더 */}
            {isStartCalendarOpen && (
              <DatePicker
                selected={date}
                onChange={handleStartDateChange}
                selectsStart
                inline
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateController;
