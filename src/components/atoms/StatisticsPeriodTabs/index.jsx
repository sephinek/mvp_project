// import styles from './index.module.css'

// const StatisticsPeriodTabs = ({ children, ...rest }) => {
//     return (
//         <div className={styles.timePeriodTabs}>
//             <ul>
//                 <li className={styles.weeklyTab}>Weekly</li>
//                 <li className={styles.monthlyTab}>Monthly</li>
//             </ul>
//         </div>
//     )
// }

// export default StatisticsPeriodTabs


import { useState } from "react";
import styles from "./index.module.css";

const StatisticsPeriodTabs = ({ onSelectTab }) => {
    const [selectedTab, setSelectedTab] = useState("weekly"); // 기본값 'Weekly'

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        onSelectTab(tab); // 선택된 탭을 부모 컴포넌트로 전달
    };

    return (
        <div className={styles.timePeriodTabs}>
            <ul>
                <li 
                    className={`${styles.weeklyTab} ${selectedTab === "weekly" ? styles.active : ""}`}
                    onClick={() => handleTabClick("weekly")}
                >
                    Weekly
                </li>
                <li 
                    className={`${styles.monthlyTab} ${selectedTab === "monthly" ? styles.active : ""}`}
                    onClick={() => handleTabClick("monthly")}
                >
                    Monthly
                </li>
            </ul>
        </div>
    );
};

export default StatisticsPeriodTabs;
