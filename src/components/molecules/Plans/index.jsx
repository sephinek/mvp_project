import { useState } from 'react';
import { addDays, getDate, getDay, getMonth, getYear, subDays } from 'date-fns';
import styles from './index.module.css';
import chevronLeftIcon from '../../../assets/icons/humble/chevron_left.svg';
import chevronRightIcon from '../../../assets/icons/humble/chevron_right.svg';

const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
export default function Plans() {
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
    <section className={styles.planContainer}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <span className={styles.titleEn}>Plan</span>
        <span className={styles.titleKr}>계획</span>
      </div>

      {/* Year and Month Bar */}
      <div className={styles.yearAndMonthBar}>
        <button className={styles.chevronBtn} onClick={prevWeekHandler}>
          <img
            src={chevronLeftIcon}
            alt='previous week'
            className={styles.chevronIcon}
          />
        </button>
        <div className={styles.yearnAndMonthBox}>
          <span>{getYear(current)}년</span>
          <span>{getMonth(current) + 1}월</span>
        </div>
        <button className={styles.chevronBtn} onClick={nextWeekHandler}>
          <img
            src={chevronRightIcon}
            alt='next week'
            className={styles.chevronIcon}
          />
        </button>
      </div>

      {/* Dates */}
      <div>
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
      </div>

      {/* Plans List */}
      <ul className={styles.plansContainer}>
        <li className={styles.planBox}>
          <div className={styles.colorAndTitlesBox}>
            <div className={styles.colorBar}></div>
            <div className={styles.goalAndPlanTitles}>
              <span className={styles.goalTitle}>해외 주식</span>
              <span className={styles.planTitle}>
                해외 장 열리고, 자동 매수 확인
              </span>
            </div>
          </div>
          <div className={styles.pausedAndCheckboxBox}>
            <span className={styles.paused}>휴식 중</span>
            <button className={styles.checkbox}>C</button>
          </div>
        </li>
        <li className={styles.planBox}>
          <div className={styles.colorAndTitlesBox}>
            <div className={styles.colorBar}></div>
            <div className={styles.goalAndPlanTitles}>
              <span className={styles.goalTitle}>해외 주식</span>
              <span className={styles.planTitle}>
                해외 장 열리고, 자동 매수 확인
              </span>
            </div>
          </div>
          <div className={styles.pausedAndCheckboxBox}>
            <span className={styles.paused}>휴식 중</span>
            <button className={styles.checkbox}>C</button>
          </div>
        </li>
        <li className={styles.planBox}>
          <div className={styles.colorAndTitlesBox}>
            <div className={styles.colorBar}></div>
            <div className={styles.goalAndPlanTitles}>
              <span className={styles.goalTitle}>해외 주식</span>
              <span className={styles.planTitle}>
                해외 장 열리고, 자동 매수 확인
              </span>
            </div>
          </div>
          <div className={styles.pausedAndCheckboxBox}>
            <span className={styles.paused}>휴식 중</span>
            <button className={styles.checkbox}>C</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
