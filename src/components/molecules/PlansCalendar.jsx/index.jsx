import { useState } from 'react';
import { addDays, getDate, getDay, getMonth, getYear, subDays } from 'date-fns';
import styles from './index.module.css';
import ChevronLeftButton from '../../common/Icons/ChevronLeftButton';
import ChevronRightButton from '../../common/Icons/ChevronRightButton';

const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

export default function PlansCalender() {
  const [current, setCurrent] = useState(new Date());

  const generateWeek = (centerDate) => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = subDays(centerDate, 3 - i);
      return {
        year: getYear(date),
        month: getMonth(date) + 1,
        date: getDate(date),
        day: dayNames[getDay(date)],
      };
    });
  };

  const [datesArr, setDatesArr] = useState(generateWeek(current));

  const prevWeekHandler = () => {
    const newDate = subDays(current, 7);
    setCurrent(newDate);
    setDatesArr(generateWeek(newDate));
  };

  const nextWeekHandler = () => {
    const newDate = addDays(current, 7);
    setCurrent(newDate);
    setDatesArr(generateWeek(newDate));
  };

  const seleteDateHandler = (year, month, date) => {
    const newCurrent = new Date(year, month - 1, date);
    setCurrent(newCurrent);
    setDatesArr(generateWeek(newCurrent));
  };

  return (
    <>
      {/* Year and Month Bar */}
      <div className={styles.yearAndMonthBar}>
        <ChevronLeftButton alt='previous week' onClick={prevWeekHandler} />

        <div className={styles.yearnAndMonthBox}>
          <span>{getYear(current)}년</span>
          <span>{getMonth(current) + 1}월</span>
        </div>

        <ChevronRightButton alt='next week' onClick={nextWeekHandler} />
      </div>

      {/* Dates */}
      <div className={styles.datesContainer}>
        {datesArr.map(({ year, month, date, day }, i) => (
          <button
            key={i}
            className={i === 3 ? styles.dateBoxToday : styles.dateBox}
            onClick={() => seleteDateHandler(year, month, date)}
          >
            <span className={i === 3 ? styles.dayToday : styles.day}>
              {day}
            </span>
            <span className={i === 3 ? styles.dateToday : styles.date}>
              {date}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
