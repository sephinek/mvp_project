import { useState } from 'react';
import IconButton from '../../atoms/IconButton/index.jsx';
import HomeIcon from '../../../assets/icons/solar/BottomNav-icon01.svg';
import ReflectionDayIcon from '../../../assets/icons/solar/BottomNav-icon02.svg';
import AddIcon from '../../../assets/icons/solar/BottomNav-icon03.svg';
import StatisticsIcon from '../../../assets/icons/solar/BottomNav-icon04.svg';
import MyPageIcon from '../../../assets/icons/solar/BottomNav-icon05.svg';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const MENUS = [
  { title: '홈', alt: 'Home menu', icon: HomeIcon, to: '/' },
  {
    title: '점검데이',
    alt: 'Reflection Day menu',
    icon: ReflectionDayIcon,
    to: '/reflection',
  },
  { title: '추가', alt: 'Add menu', icon: AddIcon },
  {
    title: '통계',
    alt: 'Statistics menu',
    icon: StatisticsIcon,
    to: '/statistics',
  },
  { title: 'MY', alt: 'My Page menu', icon: MyPageIcon, to: '/mypage' },
];

export default function BottomNav() {
  const [currentMenu, setCurrentMenu] = useState(MENUS[0]);

  const clickHandler = (menu) => {
    setCurrentMenu(menu);
  };

  return (
    <nav className={styles.bottomNavContainer}>
      <ul className={styles.bottomNavBox}>
        {MENUS.map((menu) => {
          if (menu.title !== '추가') {
            return (
              <Link key={menu.title} className={`${styles.menuBox}`}>
                <IconButton
                  icon={menu.icon}
                  alt={menu.alt}
                  type='bottomNavIcon'
                  className={styles.icon}
                  onClick={() => clickHandler(menu)}
                  to={menu.to}
                />
                <span
                  className={`${styles.menuTitle} ${
                    menu === currentMenu ? 'styles.active' : ''
                  }`}
                >
                  {menu.title}
                </span>
              </Link>
            );
          } else {
            return (
              <li key={menu.title} className={styles.menuBox}>
                <div>
                  <IconButton
                    icon={AddIcon}
                    alt={menu.alt}
                    type='bottomNavAddIcon'
                    active={false}
                    className={styles.icon}
                  />
                </div>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
