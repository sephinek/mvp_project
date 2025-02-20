import styles from './index.module.css';
import { useEffect, useState } from "react";

const data = [30, 60, 20, 100, 80, 70, 20]; // 각 요일별 데이터

const StatisticsGraph = () => {
    const [heights, setHeights] = useState(Array(data.length).fill(0)); // 초기값 0

    useEffect(() => {
        const timeouts = data.map((value, index) =>
            setTimeout(() => {
                setHeights((prev) => {
                    const newHeights = [...prev];
                    newHeights[index] = value; // 개별 높이 설정
                    return newHeights;
                });
            }, index * 150) // 순차적 애니메이션 적용
        );

        return () => timeouts.forEach((timeout) => clearTimeout(timeout));
    }, []);

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dates = ["21", "22", "23", "24", "25", "26", "27"];

    return (
        <div className={styles.statisticsGraph}>
            <ul className={styles.graphDay}>
                {days.map((day, index) => (
                    <li key={index}>{day}</li>
                ))}
            </ul>
            <ul className={styles.graphProgress}>
                {data.map((value, index) => (
                    <li key={index} className={styles.progressTrack}>
                        <div
                            className={styles.progressThumb}
                            style={{ height: `${heights[index]}%` }}
                        >
                        </div>
                    </li>
                ))}
            </ul>
            {/* <ul className={styles.graphPercent}>
                {data.map((value, index) => (
                    <li key={index}>{value}%</li> 
                ))}
            </ul> */}
            <ul className={styles.graphDate}>
                {dates.map((date, index) => (
                    <li key={index}>{date}</li>
                ))}
            </ul>
        </div>
    );
}

export default StatisticsGraph;
